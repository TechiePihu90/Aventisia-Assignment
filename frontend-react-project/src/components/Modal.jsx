import { X } from "lucide-react";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">

      {/* BACKDROP */}
      <div
        className="flex-1 bg-black/40"
        onClick={onClose}
      ></div>

      {/* RIGHT SIDE PANEL */}
      <div className="`w-[400px]` h-full bg-white shadow-lg flex flex-col">

        {/* HEADER */}
        <div className="p-5 border-b flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold">
              Create New Knowledge Base
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Best for quick answers from documents, website and text files
            </p>
          </div>

          <X
            className="cursor-pointer text-gray-500"
            onClick={onClose}
          />
        </div>

        {/* FORM (SCROLLABLE) */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">

          <div>
            <label className="text-sm font-medium text-gray-700">
              Name <span></span>
            </label>
            <input
              required
              placeholder="Enter name"
              className="w-full border border-gray-200 px-3 py-2 rounded-md mt-1 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Description <span ></span>
            </label>
            <textarea
              required
              placeholder="Enter description"
              className="w-full border border-gray-200 px-3 py-2 rounded-md mt-1 h-20 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Vector Store <span className="text-red-500">*</span>
            </label>
            <input
              required
              placeholder="Qdrant"
              className="w-full border border-gray-200 px-3 py-2 rounded-md mt-1 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              LLM Embedding Model <span className="text-red-500">*</span>
            </label>
            <input
              required
              placeholder="text-embedding-ada-002"
              className="w-full border border-gray-200 px-3 py-2 rounded-md mt-1 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

        </div>

        {/* FOOTER (BOTTOM RIGHT BUTTONS) */}
        <div className="p-4  flex justify-end gap-3">

          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md">
            Create
          </button>
        </div>

      </div>
    </div>
  );
}