import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { z } from 'zod';

const MAX_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_TYPES = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

const fileSchema = z.object({
  file: z
    .instanceof(File)
    .refine((file) => ACCEPTED_TYPES.includes(file.type), {
      message: 'Only PDF and DOCX files are allowed.',
    })
    .refine((file) => file.size <= MAX_SIZE, {
      message: 'File size must be 2MB or less.',
    }),
});

type FileState = {
  file: File | null;
  error: string | null;
};

interface FileUploadZoneProps {
  label: string;
  onFileChange: (file: File | null) => void;
}

const FileUploadZone: React.FC<FileUploadZoneProps> = ({ label, onFileChange }) => {
  const [state, setState] = useState<FileState>({ file: null, error: null });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;
    const result = fileSchema.safeParse({ file });
    if (!result.success) {
      setState({ file: null, error: result.error.issues[0].message });
      onFileChange(null);
    } else {
      setState({ file, error: null });
      onFileChange(file);
    }
  }, [onFileChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxSize: MAX_SIZE,
  });

  const removeFile = () => {
    setState({ file: null, error: null });
    onFileChange(null);
  };

  return (
    <div className="mb-6">
      <label className="block font-medium mb-2">{label}</label>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded px-4 py-8 text-center cursor-pointer transition-colors duration-150 ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white hover:border-blue-400'
        }`}
      >
        <input {...getInputProps()} />
        {state.file ? (
          <div className="flex flex-col items-center gap-2">
            <span className="text-green-700 font-medium">{state.file.name}</span>
            <span className="text-xs text-gray-500">{(state.file.size / 1024).toFixed(1)} KB</span>
            <button
              type="button"
              className="text-red-500 underline text-xs mt-1"
              onClick={removeFile}
            >
              Remove File
            </button>
          </div>
        ) : (
          <span className="text-gray-500">Drag & drop or click to select a PDF or DOCX file (max 2MB)</span>
        )}
      </div>
      {state.error && <div className="text-red-600 text-sm mt-2">{state.error}</div>}
    </div>
  );
};

export default FileUploadZone;
