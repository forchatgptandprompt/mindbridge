import { motion } from "framer-motion";
import logo from "../assets/mindbridge-logo.png.png";

export default function SplashScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center overflow-hidden relative">

      {/* Background Blobs */}

      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>

      {/* Content */}

      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <motion.img
          src={logo}
          alt="MindBridge"
          className="h-32 md:h-40 w-auto mx-auto mb-8"
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            type: "spring",
          }}
        />

        <motion.div
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        >
          <p className="text-slate-500 text-lg font-medium">
            Loading...
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}