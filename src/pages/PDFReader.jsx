// src/pages/PDFReader.jsx
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Configure worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFReader() {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setPageNumber(1);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4">📑 PDF Reader</h2>
      
      <input type="file" accept="application/pdf" onChange={onFileChange} className="mb-4" />

      {file && (
        <div className="flex flex-col items-center">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            className="border rounded shadow"
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>

          <p className="mt-4">
            Page {pageNumber} of {numPages}
          </p>

          <div className="flex gap-4 mt-2">
            <button
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber(pageNumber - 1)}
              className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              disabled={pageNumber >= numPages}
              onClick={() => setPageNumber(pageNumber + 1)}
              className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
