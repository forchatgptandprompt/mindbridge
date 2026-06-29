import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/mindbridge-logo.png.png";

export default function Navbar({ coins }) {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <nav className="bg-white shadow-md px-8 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Animated Logo */}

        <div className="w-52">

          <AnimatePresence>

            {!isHome && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: -40,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: -40,
                  scale: 0.7,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <img
                  src={logo}
                  alt="MindBridge"
                  className="h-16 object-contain"
                />
              </motion.div>
            )}

          </AnimatePresence>

        </div>

        {/* Navigation */}

        <div className="flex gap-6 text-lg font-medium">

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
            to="/challenges"
            className="hover:text-blue-600 transition"
          >
            🌟 Challenges
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

        {/* Coins */}

        <div className="bg-blue-100 px-6 py-3 rounded-2xl shadow-sm">
          <span className="font-bold text-blue-700 text-lg">
            🪙 {coins}
          </span>
        </div>

      </div>
    </nav>
  );
}