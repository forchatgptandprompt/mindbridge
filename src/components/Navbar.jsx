import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import logo from "../assets/mindbridge-logo.png.png";

export default function Navbar({ coins }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = location.pathname === "/";

  const navLinks = [
    { path: "/", label: "🏠 Dashboard" },
    { path: "/notes", label: "📚 Notes" },
    { path: "/groups", label: "👥 Groups" },
    { path: "/challenges", label: "🌟 Challenges" },
    { path: "/chat", label: "💬 Chat" },
    { path: "/therapy", label: "🧠 Wellness" },
    { path: "/leaderboard", label: "🏆 Leaderboard" },
    { path: "/profile", label: "👤 Profile" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">

        {/* Top Bar */}

        <div className="flex items-center justify-between">

          {/* Logo */}

          <div className="w-40 md:w-52">

            <AnimatePresence>

              {!isHome && (
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -30,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: -30,
                    scale: 0.8,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <img
                    src={logo}
                    alt="MindBridge"
                    className="h-12 md:h-16 object-contain"
                  />
                </motion.div>
              )}

            </AnimatePresence>

          </div>

          {/* Desktop Navigation */}

          <div className="hidden lg:flex gap-5 text-base font-medium">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition px-3 py-2 rounded-xl ${
                  location.pathname === link.path
                    ? "bg-blue-100 text-blue-700"
                    : "hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

          </div>

          {/* Right Side */}

          <div className="flex items-center gap-3">

            {/* Coins */}

            <div className="bg-gradient-to-r from-yellow-300 to-amber-400 px-4 md:px-6 py-2 md:py-3 rounded-2xl shadow-md">
              <span className="font-bold text-slate-800 text-sm md:text-lg">
                🪙 {coins}
              </span>
            </div>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-3xl text-slate-700"
            >
              {menuOpen ? "✕" : "☰"}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}

        <AnimatePresence>

          {menuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="lg:hidden mt-4 overflow-hidden"
            >

              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-4 shadow-xl flex flex-col gap-2">

                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`px-4 py-3 rounded-2xl transition ${
                      location.pathname === link.path
                        ? "bg-blue-100 text-blue-700"
                        : "hover:bg-blue-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </nav>
  );
}