import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dropzone } from "@/components/ui/dropzone";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { pylonURL } from "@/pylons/kassabuch/src";
import { PageConfig, PageProps } from "@atsnek/jaen";
import { ReloadIcon } from "@radix-ui/react-icons";
import { DeleteIcon } from "lucide-react";
import { useState } from "react";

const Page: React.FC<PageProps> = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [registerNames, setRegisterNames] = useState<string[]>([]);
  const [registerTypes, setRegisterTypes] = useState<string[]>([]);

  const [isUploading, setIsUploading] = useState(false);

  return (
    <Card className="space-y-8">
      <CardHeader className="space-y-4">
        <CardTitle>Upload registers</CardTitle>

        <CardDescription>
          Upload the registers journals you want to convert to a CSV file. You
          can upload multiple files at once.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <h2 className="text-xl font-bold">Uploaded files</h2>

        <Dropzone onChange={setFiles} className="w-full" fileExtension="zip" />

        <Table>
          <TableCaption>
            {files.length} file{files.length === 1 ? "" : "s"} uploaded
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Filename</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Register name</TableHead>
              <TableHead>Register type</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* <TableRow>
    <TableCell className="font-medium">INV001</TableCell>
    <TableCell>Paid</TableCell>
    <TableCell>Credit Card</TableCell>
    <TableCell className="text-right">$250.00</TableCell>
  </TableRow> */}

            {files.map((file, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{file.name}</TableCell>
                <TableCell className="text-muted-foreground">
                  {Math.round(file.size / 1024)} KB
                </TableCell>
                <TableCell>
                  <Input
                    placeholder="Register name"
                    onChange={(e) => {
                      setRegisterNames((values) => {
                        const newValues = [...values];
                        newValues[index] = e.target.value;
                        return newValues;
                      });
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Select
                    onValueChange={(value) => {
                      setRegisterTypes((values) => {
                        const newValues = [...values];
                        newValues[index] = value;
                        return newValues;
                      });
                    }}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="QMP_18">QMP_18</SelectItem>
                      <SelectItem value="SHARP">SHARP</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setFiles((values) => {
                        const newValues = [...values];
                        newValues.splice(index, 1);
                        return newValues;
                      });

                      setRegisterNames((values) => {
                        const newValues = [...values];
                        newValues.splice(index, 1);
                        return newValues;
                      });

                      setRegisterTypes((values) => {
                        const newValues = [...values];
                        newValues.splice(index, 1);
                        return newValues;
                      });
                    }}
                  >
                    <DeleteIcon className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      <CardFooter className="justify-end">
        <Button
          disabled={isUploading}
          onClick={async () => {
            const formData = new FormData();

            // Validate if all files have a register name and type

            try {
              files.forEach((file, index) => {
                formData.append("file", file);

                const registerName = registerNames[index];
                const registerType = registerTypes[index];

                if (!registerName || !registerType) {
                  throw new Error(
                    "Please fill in all register names and types"
                  );
                }

                formData.append("registerName", registerName);
                formData.append("registerType", registerType);
              });
            } catch (error) {
              toast({
                title: "Error",
                description: (error as Error).message,
                variant: "destructive",
              });

              return;
            }

            // Validate formData here
            if (files.length === 0) {
              toast({
                title: "Error",
                description: "Please upload at least one file",
                variant: "destructive",
              });
              return;
            }

            setIsUploading(true);

            const response = await fetch(`${pylonURL}/registers/upload`, {
              method: "POST",
              body: formData,
            });

            setIsUploading(false);

            if (!response.ok) {
              toast({
                title: "Error",
                description: (
                  <div>
                    <p>There was an error converting the registers to CSV</p>
                    <p>{response.statusText}</p>
                  </div>
                ),
                variant: "destructive",
              });
              return;
            }

            const file = await response.blob();
            let fileName = response.headers
              .get("Content-Disposition")
              ?.split("filename=")[1];

            // Cut off the quotes
            fileName =
              fileName?.substring(1, fileName.length - 1) || "registers.csv";

            const url = window.URL.createObjectURL(file);

            const a = document.createElement("a");

            a.href = url;

            a.download = fileName;

            a.click();

            toast({
              title: "Success",
              description: "Registers have been converted to CSV",
            });
          }}
        >
          <ReloadIcon
            className={cn("h-4 w-4 mr-2 animate-spin", {
              hidden: !isUploading,
            })}
          />
          Convert
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Page;

export const pageConfig: PageConfig = {
  label: "Registers",
  icon: "FaCashRegister",
  layout: {
    name: "jaen",
  },
  menu: {
    type: "app",
    label: "Registers",
  },
};
