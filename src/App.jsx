// src/App.js
import {
  FaHome,
  FaUsers,
  FaTags,
  FaBookmark,
  FaHistory,
  FaPlus,
  FaSignOutAlt,
} from "react-icons/fa";

import logo from "./../public/logo1.png";
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useProtection from "./Hooks/useProtection";
import BalanceButton from "./Components/BlanceButton";
function App() {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  const { data, isLoading, isError, refetch } = useProtection();

  const handleLogout = async (e) => {
    e.preventDefault();
    logOut();
    return navigate("/login");
  };
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-[#1E90FF] text-gray-100 w-64 hidden sm:flex-none sm:flex flex-col justify-between p-4 ">
        <div>
          <div className="sm:text-2xl font-bold mb-6 flex items-center">
            <img className="h-4 sm:h-8 mr-2" src={logo} alt="logo" /> Len Den
          </div>
          <nav className="space-y-4">
            <a
              href="#"
              className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
            >
              <FaHome />
              <span>My Feed</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
            >
              <FaUsers />
              <span>Public Squads</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
            >
              <FaTags />
              <span>Tags</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
            >
              <FaBookmark />
              <span>Bookmarks</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
            >
              <FaHistory />
              <span>History</span>
            </a>
          </nav>
        </div>
        <div className="space-y-4 mb-4 text-blue-600 font-medium">
          <button className="w-full flex items-center justify-center space-x-2 bg-white hover:bg-gray-600 p-2 rounded">
            <FaPlus />
            <span>Become An Agent</span>
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 bg-white hover:bg-gray-600 p-2 rounded"
          >
            <FaSignOutAlt />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-grow bg-blue-100 text-gray-100">
        <header className="flex items-center justify-between mb-6 bg-[#1e9aff] p-4 shadow-xl">
          <h1 className="sm:text-xl font-medium sm:font-bold ">{`${data.name} (${data.role})`}</h1>
          <BalanceButton />
        </header>

        <div className="grid grid-cols-3 gap-4 text-gray-800">
          <div className="bg-gray-50 p-4 rounded-lg m-8">
            <h2 className="font-bold mb-2">Outlet</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
