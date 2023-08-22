import NormalButton from "./NormalButton";
import { useNavigate } from "@remix-run/react";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <button
            className="mr-4"
            onClick={() => {
              navigate("/userdashboard");
            }}
          >
            Add Issue
          </button>
          <button
            className="mr-4"
            onClick={() => {
              navigate("/userdashboard/issues/assigned");
            }}
          >
            Assigned Issues
          </button>

          <button
            className="mr-4"
            onClick={() => {
              navigate("/userdashboard/issues/reported");
            }}
          >
            Reported Issues
          </button>
        </div>
        <NormalButton buttonName="Logout" onClick={() => navigate("/logout")} />
      </div>
    </nav>
  );
}
