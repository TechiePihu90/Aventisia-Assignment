import { Link, useLocation } from "react-router-dom";
import {
  Bot, Cpu, Book, Upload, Monitor, List, Zap,
  Briefcase, Play, Shield, Database, Key,
  Building, Plug
} from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const menuItem = (to, label, Icon) => {
    const isActive = location.pathname === to;

    return (
      <Link to={to}>
        <div
          className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm cursor-pointer
          ${isActive
            ? "bg-indigo-50 text-indigo-600"
            : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Icon size={16} />
          <span>{label}</span>
        </div>
      </Link>
    );
  };

  return (
    <div className="w-60 bg-white border-r min-h-screen px-3 py-5">

      {/* MY PROJECTS */}
      <p className="text-xs text-gray-400 uppercase tracking-wide mb-2 px-2">
        My Projects
      </p>
      <div className="space-y-1">
        {menuItem("/agents", "Agents", Bot)}
        {menuItem("/models", "AI Models", Cpu)}
        {menuItem("/library", "Library", Book)}
      </div>

      {/* ORCHESTRATOR */}
      <p className="text-xs text-gray-400 uppercase tracking-wide mt-6 mb-2 px-2">
        Orchestrator
      </p>
      <div className="space-y-1">
        {menuItem("/published", "Published", Upload)}
        {menuItem("/machines", "Machines", Monitor)}
        {menuItem("/queues", "Queues", List)}
        {menuItem("/triggers", "Triggers", Zap)}
        {menuItem("/jobs", "Jobs", Briefcase)}
        {menuItem("/executions", "Executions", Play)}
        {menuItem("/vault", "Vault", Shield)}
        {menuItem("/knowledge-base", "Knowledge Base", Database)}
        {menuItem("/keystore", "Key Store", Key)}
      </div>

      {/* ADMIN */}
      <p className="text-xs text-gray-400 uppercase tracking-wide mt-6 mb-2 px-2">
        Admin
      </p>
      <div className="space-y-1">
        {menuItem("/tenant", "Tenant", Building)}
        {menuItem("/integrations", "Integrations", Plug)}
         {menuItem("/integrations", "Integrations", Plug)}
      </div>

    </div>
  );
}