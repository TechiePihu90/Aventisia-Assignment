import { Bell,Menu } from "lucide-react";
import "tailwindcss";
export default function Header() {
  return (
    <div className="bg-[#1E1B4B] text-white px-6 py-3 flex items- justify-between mt-2 ml-1 mr-1 rounded-md">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-2 md:gap-4">
        <Menu className="md:hidden cursor-pointer"/>
        <h1 className="font-bold text-lg"> Workspace</h1>

        <select className="hidden sm:block bg-white/10 border-white/20 text-white px-2 md:px-3 py-1 rounded text-xs md:text-sm outline-none">
          <option>Workspace 1</option>
          <option>Workspace 2</option>
        </select>
      </div>

      {/* CENTER SEARCH */}
    
          <div className="hidden md:block relative w-[40%]">
        <input 
          type="text"
          placeholder="Search..."
          className="w-full mt-1 pl-3 pr-12 py-2  rounded-md bg-white/10 border-white/20 text-white placeholder-gray-300 outline-none"
        />
           <span className="absolute right-3 top-1/2 -translate-y-1/2 text-s text-gray-300 pointer-events-none">
    ⌘K
  </span>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">
        <Bell className="cursor-pointer" />

        <div className="w-8 h-8 rounded-full bg-gray-300 text-black flex items-center justify-center font-bold">
          GK
        </div>
      </div>

    </div>
  );
}