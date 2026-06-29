import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../assets/mindbridge-logo.png.png";

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === "karishma@nift.ac.in" &&
      password === "mindbridge123"
    ) {
      setIsLoggedIn(true);
      navigate("/");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-10">

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="bg-white p-12 rounded-3xl shadow-2xl w-full max-w-md"
      >

        {/* Logo */}

        <img
          src={logo}
          alt="MindBridge"
          className="h-28 mx-auto mb-8 object-contain"
        />

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-slate-500 mb-8">
          Learn Together. Thrive Together.
        </p>

        {/* Demo Credentials */}

        <div className="bg-blue-50 p-4 rounded-2xl mb-6 text-sm">

          <p className="font-bold text-blue-700 mb-2">
            Demo Login
          </p>

          <p>Email: karishma@nift.ac.in</p>

          <p>Password: mindbridge123</p>

        </div>

        {/* Error */}

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-xl mb-4">
            {error}
          </div>
        )}

        {/* Form */}

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-2xl hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            Login
          </button>

        </form>

      </motion.div>

    </div>
  );
}