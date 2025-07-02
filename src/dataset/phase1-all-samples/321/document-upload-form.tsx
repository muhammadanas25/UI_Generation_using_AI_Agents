"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, CheckCircle2, File, Upload } from "lucide-react";

interface Document {
  id: string;
  name: string;
  status: "uploading" | "processing" | "verified" | "rejected";
  progress: number;
}

export default function Component() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setError(null);

    // Simulating file upload and processing
    const newDocument: Document = {
      id: Date.now().toString(),
      name: file.name,
      status: "uploading",
      progress: 0,
    };

    setDocuments((prevDocs) => [...prevDocs, newDocument]);

    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      setDocuments((prevDocs) =>
        prevDocs.map((doc) =>
          doc.id === newDocument.id ? { ...doc, progress: i } : doc
        )
      );
    }

    // Simulate processing
    setDocuments((prevDocs) =>
      prevDocs.map((doc) =>
        doc.id === newDocument.id ? { ...doc, status: "processing" } : doc
      )
    );

    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Randomly verify or reject the document
    const finalStatus = Math.random() > 0.5 ? "verified" : "rejected";
    setDocuments((prevDocs) =>
      prevDocs.map((doc) =>
        doc.id === newDocument.id ? { ...doc, status: finalStatus } : doc
      )
    );
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="space-y-1 sm:space-y-2">
        <CardTitle className="text-xl sm:text-2xl">
          LegalX Document Upload
        </CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Upload your legal documents for verification
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="document" className="text-sm sm:text-base">
              Document
            </Label>
            <Input
              id="document"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
              className="text-sm sm:text-base"
            />
          </div>
          {error && (
            <div className="text-red-500 flex items-center gap-2 text-sm">
              <AlertCircle className="h-4 w-4" />
              {error}
            </div>
          )}
        </form>

        {documents.length > 0 && (
          <div className="mt-6 sm:mt-8">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Uploaded Documents
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {documents.map((doc) => (
                <li
                  key={doc.id}
                  className="flex items-start sm:items-center gap-3 sm:gap-4"
                >
                  <File className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 mt-1 sm:mt-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm sm:text-base truncate">
                      {doc.name}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      {doc.status === "uploading" && (
                        <>
                          <Progress value={doc.progress} className="w-full" />
                          <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                            {doc.progress}%
                          </span>
                        </>
                      )}
                      {doc.status === "processing" && (
                        <p className="text-xs sm:text-sm text-yellow-500">
                          Processing...
                        </p>
                      )}
                      {doc.status === "verified" && (
                        <p className="text-xs sm:text-sm text-green-500 flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4" />{" "}
                          Verified
                        </p>
                      )}
                      {doc.status === "rejected" && (
                        <p className="text-xs sm:text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />{" "}
                          Rejected
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <p className="text-xs sm:text-sm text-gray-500">
          Supported file types: PDF, DOC, DOCX. Maximum file size: 10MB.
        </p>
      </CardFooter>
    </Card>
  );
}
