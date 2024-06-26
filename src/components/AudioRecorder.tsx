import {
  IMediaRecorder,
  MediaRecorder,
  register,
  deregister,
} from "extendable-media-recorder";
import { connect } from "extendable-media-recorder-wav-encoder";
import { cn } from "@/lib/utils";
import { User } from "oidc-client-ts";
import { useState, useEffect, useRef } from "react";
import { FaMicrophone } from "@react-icons/all-files/fa/FaMicrophone";
import { FaStopCircle } from "@react-icons/all-files/fa/FaStopCircle";

import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

interface AudioRecorderProps {
  onRecord: (isRecording: boolean) => void;
  onData: (text: string) => void;
}

const AudioRecorder: React.FC<AudioRecorderProps> = (props) => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<IMediaRecorder>(null);

  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    let port: MessagePort;

    const init = async () => {
      port = await connect();
      await register(port);
    };

    init();

    return () => {
      // Close WebSocket connection when component unmounts
      if (port) {
        deregister(port);
      }
    };
  }, []);

  const connectWS = () => {
    const oidcStorage = sessionStorage.getItem(
      `oidc.user:${__JAEN_ZITADEL__.authority}:${__JAEN_ZITADEL__.clientId}`
    );

    const token = oidcStorage
      ? User.fromStorageString(oidcStorage).access_token
      : "";

    if (ws?.current?.readyState !== WebSocket.OPEN) {
      const websocket = new WebSocket(
        `wss://website-pylon.cronit.io/transcribe?token=${token}`
        // `ws://localhost:3000/transcribe?token=${token}`
      );

      websocket.onmessage = (ev) => {
        props.onData(ev.data);
        props.onRecord(false);

        toast({
          title: "Success",
          description: "Transcription complete",
        });
      };

      ws.current = websocket;
    }

    return ws.current;
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      const recorder = new MediaRecorder(stream, { mimeType: "audio/wav" });

      const socket = connectWS();

      recorder.ondataavailable = (e) => {
        if (socket && socket.readyState === WebSocket.OPEN) {
          const size = e.data.size;

          if (size > 0) {
            socket.send(e.data);

            toast({
              title: "Processing",
              // Size in MB
              description: `Sending ${(size / 1024 / 1024).toFixed(
                2
              )} MB of audio data`,
            });
          } else {
            toast({
              title: "Error",
              description: "No audio data was received",
              variant: "destructive",
            });
          }
        } else {
          toast({
            title: "Error",
            description: "WebSocket connection is not open",
            variant: "destructive",
          });
        }
      };

      recorder.onstop = () => {
        setIsRecording(false);

        stream.getTracks().forEach((track) => track.stop());
      };

      recorder.start();
      setIsRecording(true);
      setMediaRecorder(recorder);

      props.onRecord(true);
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  const stopRecording = async () => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.stop();
    }
  };

  return (
    <div>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={isRecording ? stopRecording : startRecording}
      >
        <FaMicrophone
          className={cn("h-4 w-4", {
            hidden: isRecording,
          })}
        />
        <FaStopCircle
          className={cn("h-4 w-4 animate-pulse", {
            hidden: !isRecording,
          })}
        />
      </Button>
    </div>
  );
};

export default AudioRecorder;
