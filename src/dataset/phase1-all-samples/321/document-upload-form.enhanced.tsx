"use client";

import { useState, useCallback } from "react";
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
import { AlertCircle, CheckCircle2, File, Upload, Trash2 } from "lucide-react";
import { Transition } from "@headlessui/react";

interface Document {
  id: string;
  name: string;
  status: "uploading" | "processing" | "verified" | "rejected";
  progress: number;
}

export default function Component() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileUpload = async (files: FileList) => {
    const fileArray = Array.from(files);
    for (const file of fileArray) {
      if (!file) continue;

      setError(null);

      const newDocument: Document = {
        id: Date.now().toString() + Math.random().toString(),
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
    }
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const removeDocument = (id: string) => {
    setDocuments((prevDocs) => prevDocs.filter((doc) => doc.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl mx-auto shadow-lg rounded-lg bg-white transition-transform transform hover:scale-105">
        <CardHeader className="border-b">
          <CardTitle className="text-xl sm:text-2xl font-bold text-blue-600">
            LegalX Document Upload
          </CardTitle>
          <CardDescription className="text-sm sm:text-base text-gray-600">
            Upload your legal documents for verification and track their status
            in real-time.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div
            className={`p-4 sm:p-6 border-2 border-dashed rounded-md flex flex-col items-center justify-center transition-colors ${
              isDragging ? "border-blue-400 bg-blue-50" : "border-gray-300"
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <Upload className="h-8 w-8 sm:h-12 sm:w-12 text-blue-500 mb-2 sm:mb-4 transition-transform transform hover:scale-110" />
            <p className="text-sm sm:text-base text-gray-500 mb-2 sm:mb-4 text-center">
              Drag and drop your files here
            </p>
            <Button
              variant="secondary"
              onClick={() => document.getElementById("file-input")?.click()}
              className="text-sm sm:text-base"
            >
              Browse Files
            </Button>
            <Input
              id="file-input"
              type="file"
              accept=".pdf,.doc,.docx"
              multiple
              className="hidden"
              onChange={(e) =>
                e.target.files && handleFileUpload(e.target.files)
              }
            />
          </div>

          {error && (
            <div className="mt-4 text-red-500 flex items-center gap-2 text-sm sm:text-base">
              <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              {error}
            </div>
          )}

          {documents.length > 0 && (
            <div className="mt-6 sm:mt-8">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                Uploaded Documents
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {documents.map((doc) => (
                  <Transition
                    key={doc.id}
                    show={true}
                    enter="transition-opacity duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                  >
                    <li className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-50 p-3 sm:p-4 rounded-md shadow hover:bg-gray-100 transition-colors">
                      <div className="flex items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
                        <File className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 mt-1 sm:mt-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-700 text-sm sm:text-base truncate">
                            {doc.name}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            {doc.status === "uploading" && (
                              <>
                                <Progress
                                  value={doc.progress}
                                  className="w-24 sm:w-32 h-2 rounded-full"
                                />
                                <span className="text-xs sm:text-sm text-gray-500">
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
                      </div>
                      <Button
                        variant="destructive"
                        size="icon"
                        className="mt-2 sm:mt-0"
                        onClick={() => removeDocument(doc.id)}
                      >
                        <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </li>
                  </Transition>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
        <CardFooter className="border-t p-4 sm:p-6">
          <p className="text-xs sm:text-sm text-gray-500">
            Supported file types: PDF, DOC, DOCX. Maximum file size: 10MB.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
