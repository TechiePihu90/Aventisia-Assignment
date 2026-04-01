import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div>
    
      <Header />

      
      <div className="flex">
        <Sidebar />

        <div className="flex-1 bg-gray-50 min-h-screen p-6">
          {children}
        </div>
      </div>
    </div>
  );
}