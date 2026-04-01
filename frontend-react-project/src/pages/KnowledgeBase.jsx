import Layout from "../components/Layout.jsx";
import { useState } from "react";
import Modal from "../components/Modal.jsx";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function KnowledgeBase() {
  const [open, setOpen] = useState(false);

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const dummyData = [1,2,3,4,5,6];
  const data = open ? [] : dummyData;
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleRowsChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  };

  return (
    <Layout>
      {/*  MAIN WRAPPER FIX */}
      <div className="flex flex-col min-h-screen bg-gray-50 ">

        {/*  CONTENT AREA */}
        <div className="flex-grow p-1 pb-16 ">

          {/* TOP BAR */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-6">
            <h2 className=" text-lg md:text-xl font-semibold">Knowledge Base</h2>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full md:w-auto">
              <input
                placeholder="Search..."
                className="px-3 py-2 border rounded-md"
              />
              <button
                onClick={() => setOpen(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md"
              >
                + Create New
              </button>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white border rounded-xl shadow-[0_2px_8px_rgba(156,163,175,0.4)] p-3 relative">
           {data.length === 0 ? (
  <div className="flex flex-col justify-center items-center h-[300px] text-gray-400">
    
    {/* ICON */}
    <div className="relative">
      <svg
        width="80"
        height="80"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-300"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <path d="M14 2v6h6"/>
      </svg>

      {/* sparkle */}
      <span className="absolute -top-2 -right-2 text-indigo-500 text-xl">
      </span>
    </div>

    {/* TEXT */}
    <p className="mt-4 text-lg md:text-2xl text-gray-500 font-medium text-center">
      No Knowledge Bases Found
    </p>

  </div>
) :(
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {currentData.map((item) => (
                <div
                  key={item}
                  className="bg-white border rounded-xl p-4 shadow-sm"
                >
                  <div className="flex justify-between mb-2">
                  <h3 className="font-semibold mb-2">Test</h3>
                  <BsThreeDotsVertical className="top-4  text-gray-500 cursor-pointer hover:text-black " />
                  </div>
                  <p className="text-sm text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                   
                  <div className="mt-4 pt-3 border-t text-xs text-gray-400">
                    Created On: 14/07/2025
                  </div>
                </div>
              ))}
            </div>
             )}
          </div>

        </div>

        {/* Footer */}
        <div className="fixed bottom-0 left-0 md:left-64 right-0 bg-white px-3 md:px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-2 text-xs md:text-sm z-50 ">

          <span>{data.length === 0 ? "0 row(s)" : `${data.length} rows`} </span>

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">

            <div className="flex items-center gap-2">
              <span>Rows per page</span>
              <select
                value={rowsPerPage}
                onChange={handleRowsChange}
                className="border rounded px-2 py-1"
              >
                <option value={6}>6</option>
                <option value={9}>9</option>
                <option value={12}>12</option>
              </select>
            </div>

            <span>page {data.length === 0 ? 0 :page} of {totalPages || 0}</span>
           {page === 1 || data.length === 0}
            <div className="flex gap-1">
              <button onClick={() => setPage(1)} disabled={page === 1} className="border px-2 py-1 rounded disabled:opacity-40">{"<<"}</button>
              <button onClick={handlePrev} disabled={page === 1} className="border px-2 py-1 rounded disabled:opacity-40">{"<"}</button>
              <button onClick={handleNext} disabled={page === totalPages} className="border px-2 py-1 rounded disabled:opacity-40">{">"}</button>
              <button onClick={() => setPage(totalPages)} disabled={page === totalPages} className="border px-2 py-1 rounded disabled:opacity-40">{">>"}</button>
            </div>

          </div>
        </div>

        <Modal isOpen={open} onClose={() => setOpen(false)} />
      </div>
    </Layout>
  );
}