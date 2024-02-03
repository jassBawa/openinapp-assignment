"use client";
import { ExcelIcon, UploadIcon } from "../assets/icons";
import React from "react";
import { useDropzone } from "react-dropzone";

const CSVDropZone = ({ onFileDrop }) => {
  const onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
    onFileDrop(acceptedFiles[0]);
  };

  const { acceptedFiles, getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    accept: ".csv, .xlsx",
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="mt-12 max-w-lg w-full py-4 px-8 bg-white shadow-sm rounded">
      <div
        {...getRootProps({ className: "dropzone" })}
        className="bg-white py-24 w-full border border-dashed rounded flex justify-center items-center"
      >
        <input {...getInputProps()} className="" />
        <div className="flex flex-col gap-3 justify-center items-center">
          <ExcelIcon />
          <p className="block">
            Drop your excel sheet here or{" "}
            <span className="text-indigo-500">browse</span>
          </p>
        </div>
      </div>
      <button
        onClick={open}
        className="mt-4 bg-primary w-full text-white py-2 rounded"
      >
        Upload
      </button>
    </div>
  );
};

export default CSVDropZone;
