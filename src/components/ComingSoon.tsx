import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const ComingSoon = () => {
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    const countDownDate = new Date("April 10, 2024 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days + "d");
      setHours(hours + "h");
      setMinutes(minutes + "m");
      setSeconds(seconds + "s");

      if (distance < 0) {
        clearInterval(interval);
        // Optionally, handle the case when countdown is over
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col  justify-center items-center px-2 bg-gradient-to-tr from-sky-300 via-sky-400 to-blue-500">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="py-4 px-6 space-y-8">
          <div className="flex justify-center items-center">
            <Logo className="h-auto w-xs" />
          </div>
          <p className="mt-2 text-lg text-gray-600">
            Wir arbeiten hart daran, diese Seite zu erstellen. Bitte besuchen
            Sie uns bald wieder.
          </p>
        </div>
        <div className="py-4 px-6">
          <div
            className={cn("flex flex-wrap gap-4 justify-center items-center", {
              hidden: !days || !hours || !minutes || !seconds,
            })}
          >
            <div className="border rounded-lg px-4 py-2">
              <div className="font-bold font-mono text-2xl text-gray-800">
                {days}
              </div>
            </div>
            <div className="border rounded-lg px-4 py-2">
              <div className="font-bold font-mono text-2xl text-gray-800">
                {hours}
              </div>
            </div>
            <div className="border rounded-lg px-4 py-2">
              <div className="font-bold font-mono text-2xl text-gray-800">
                {minutes}
              </div>
            </div>
            <div className="border rounded-lg px-4 py-2">
              <div className="font-bold font-mono text-2xl text-gray-800">
                {seconds}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
