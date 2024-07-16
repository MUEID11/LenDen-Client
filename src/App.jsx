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
import logo from "./../public/logo1.png"
function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-[#1E90FF] text-gray-100 w-64 flex-none flex flex-col justify-between p-4">
        <div>
          <div className="text-2xl font-bold mb-6 flex items-center"><img className="h-8 mr-2"  src={logo} alt="logo"/> Len Den</div>
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
          <button className="w-full flex items-center justify-center space-x-2 bg-white hover:bg-gray-600 p-2 rounded">
            <FaSignOutAlt />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow bg-blue-100 text-gray-100">
        <header className="flex items-center justify-between mb-6 bg-[#1e9aff] p-4 shadow-xl">
          <h1 className="text-3xl font-bold ">My feed</h1>
          <input
            type="button"
            value="Balance"
            className="bg-white text-blue-600 p-2 rounded-md"
          />
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
