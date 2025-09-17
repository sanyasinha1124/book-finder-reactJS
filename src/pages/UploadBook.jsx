// import React, { useState } from "react";

// export default function UploadBook() {
//   const [file, setFile] = useState(null);
//   const [title, setTitle] = useState("");

//   const handleFile = (e) => {
//     const f = e.target.files[0];
//     setFile(f);
//     if (!title) setTitle(f?.name || "");
//   };

//   const handleUpload = (e) => {
//     e.preventDefault();
//     // Implement your upload backend here. For demo, we just create a preview URL
//     alert("Pretend uploaded: " + (file?.name || "No file"));
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow space-y-4">
//       <h2 className="text-2xl font-semibold">Upload & Share</h2>
//       <form onSubmit={handleUpload} className="space-y-3">
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Title"
//           className="w-full p-3 rounded dark:bg-gray-700"
//         />
//         <input type="file" accept="application/pdf" onChange={handleFile} />
//         <div className="flex gap-2">
//           <button className="px-4 py-2 bg-green-600 text-white rounded">
//             Upload
//           </button>
//           <button
//             type="button"
//             onClick={() => {
//               setFile(null);
//               setTitle("");
//             }}
//             className="px-4 py-2 bg-gray-200 rounded"
//           >
//             Reset
//           </button>
//         </div>
//       </form>

//       {file && (
//         <div>
//           <h3 className="font-semibold">Preview</h3>
//           <iframe
//             title="pdf-preview"
//             src={URL.createObjectURL(file)}
//             className="w-full h-96 mt-2 rounded"
//           />
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";

export default function UploadBook() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");

  const handleFile = (e) => {
    const f = e.target.files[0];
    setFile(f);
    if (!title) setTitle(f?.name || "");
  };

  const handleUpload = (e) => {
    e.preventDefault();
    // Implement your upload backend here. For demo, we just create a preview URL
    alert("Pretend uploaded: " + (file?.name || "No file"));
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow space-y-4">
      <h2 className="text-2xl font-semibold">Upload & Share</h2>
      <form onSubmit={handleUpload} className="space-y-3">
        {/* Title Input */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />

        {/* File Input */}
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFile}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />

        {/* Buttons */}
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow">
            Upload
          </button>
          <button
            type="button"
            onClick={() => {
              setFile(null);
              setTitle("");
            }}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500 rounded-lg shadow"
          >
            Reset
          </button>
        </div>
      </form>

      {/* PDF Preview */}
      {file && (
        <div>
          <h3 className="font-semibold">Preview</h3>
          <iframe
            title="pdf-preview"
            src={URL.createObjectURL(file)}
            className="w-full h-96 mt-2 rounded border border-gray-300 dark:border-gray-600"
          />
        </div>
      )}
    </div>
  );
}
