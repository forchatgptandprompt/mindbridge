import { Link } from "react-router-dom";
import logo from "../assets/mindbridge-logo.png.png";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center">
          <img
            src={logo}
            alt="MindBridge"
            className="h-16 object-contain"
          />
        </div>

        {/* Navigation */}

        <div className="flex gap-8 text-lg font-medium">

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            🏠 Dashboard
          </Link>

          <Link
            to="/notes"
            className="hover:text-blue-600 transition"
          >
            📚 Notes
          </Link>

          <Link
            to="/groups"
            className="hover:text-blue-600 transition"
          >
            👥 Groups
          </Link>

          <Link
            to="/therapy"
            className="hover:text-blue-600 transition"
          >
            🧠 Wellness
          </Link>

          <Link
            to="/leaderboard"
            className="hover:text-blue-600 transition"
          >
            🏆 Leaderboard
          </Link>

          <Link
            to="/profile"
            className="hover:text-blue-600 transition"
          >
            👤 Profile
          </Link>

        </div>

        {/* Care Coins */}

        <div className="bg-blue-100 px-6 py-3 rounded-2xl shadow-sm">
          <span className="font-bold text-blue-700 text-lg">
            🪙 120
          </span>
        </div>

      </div>
    </nav>
  );
}