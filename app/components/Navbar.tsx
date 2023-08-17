import NormalButton from "./NormalButton";
import { useNavigate } from "@remix-run/react";

export default function Navbar() {
    const navigate = useNavigate();
  return (
    <nav className="sticky top-0 bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Services
          </a>
        </div>
            <NormalButton buttonName="Logout" onClick={()=>navigate('/logout')}/>
      </div>
    </nav>
  );
}
