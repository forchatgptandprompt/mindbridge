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
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-lg">
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
                    className="h-20 w-auto object-contain"
                  />
                </motion.div>
              )}

            </AnimatePresence>

          </div>

          {/* Desktop Navigation */}

          <div className="hidden lg:flex items-center gap-3 text-[15px] font-medium">

            {navLinks.map((link) => (

              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-2xl transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-blue-100 text-blue-700 shadow-sm"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-600 hover:-translate-y-0.5"
                }`}
              >
                {link.label}
              </Link>

            ))}

          </div>

          {/* Right Side */}

          <div className="flex items-center gap-3">

            {/* Coins */}

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 px-4 md:px-6 py-2 md:py-3 rounded-2xl shadow-lg"
            >
              <span className="font-bold text-slate-800 text-sm md:text-lg">
                🪙 {coins}
              </span>
            </motion.div>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-3xl text-slate-700 hover:text-blue-600 transition"
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
              className="lg:hidden overflow-hidden mt-4"
            >

              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-4 shadow-2xl border border-white/30 flex flex-col gap-2">

                {navLinks.map((link) => (

                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`px-4 py-3 rounded-2xl transition-all duration-300 ${
                      location.pathname === link.path
                        ? "bg-blue-100 text-blue-700"
                        : "hover:bg-blue-50 hover:text-blue-600"
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