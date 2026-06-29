import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/mindbridge-logo.png.png";

export default function Home({ coins }) {
  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <motion.img
            src={logo}
            alt="MindBridge Logo"
            className="mx-auto h-44 object-contain mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          <p className="text-2xl text-slate-600 mt-4">
            Empowering Students Through Learning & Mental Wellness
          </p>

          <p className="text-lg text-slate-500 mt-6 max-w-4xl mx-auto leading-relaxed">
            MindBridge enables students to support one another academically,
            earn Care Coins through meaningful contributions, and redeem them
            for professional mental health and wellness services.
          </p>

          <div className="flex justify-center mt-8">
            <Link to="/therapy">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg">
                Explore Wellness Services
              </button>
            </Link>
          </div>

        </motion.div>

        {/* Welcome Card */}

        <div className="bg-white rounded-3xl p-8 shadow-lg mb-16">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-4xl font-bold">
                Welcome, Karishma 👋
              </h2>

              <p className="text-slate-500 mt-3 text-lg">
                Fashion Communication Student • NIFT
              </p>

            </div>

            <div className="bg-blue-100 px-8 py-5 rounded-3xl text-center">

              <p className="text-sm text-slate-600">
                Care Coins
              </p>

              <h1 className="text-4xl font-bold text-blue-600">
                🪙 {coins}
              </h1>

            </div>

          </div>

        </div>

        {/* Feature Grid */}

        <section className="mb-20">

          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            How MindBridge Works
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-3">
                Peer Learning
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Share notes, tutor juniors, and answer questions to create
                a collaborative learning environment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">🪙</div>
              <h3 className="text-2xl font-bold mb-3">
                Care Coin Rewards
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Earn Care Coins through meaningful academic contributions
                and community engagement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-3">
                Affordable Therapy
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Redeem your Care Coins for therapy sessions, wellness
                workshops, and mindfulness programs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-3">
                Community Challenges
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Participate in collaborative activities and stress-relief
                challenges that strengthen the student community.
              </p>
            </div>

          </div>

        </section>

        {/* Rewards */}

        <section className="mb-20">

          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            Redeem Your Care Coins
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:scale-105 transition">
              <div className="text-4xl mb-3">🧘</div>
              <h3 className="font-bold text-xl">
                Meditation Course
              </h3>
              <p className="text-blue-600 mt-2 font-semibold">
                40 Coins
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:scale-105 transition">
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="font-bold text-xl">
                Stress Workshop
              </h3>
              <p className="text-blue-600 mt-2 font-semibold">
                50 Coins
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:scale-105 transition">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-xl">
                Career Guidance
              </h3>
              <p className="text-blue-600 mt-2 font-semibold">
                80 Coins
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg text-center hover:scale-105 transition">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="font-bold text-xl">
                Therapy Session
              </h3>
              <p className="text-blue-600 mt-2 font-semibold">
                100 Coins
              </p>
            </div>

          </div>

        </section>

        {/* Footer */}

        <footer className="border-t pt-10 text-center text-slate-500">

          <h3 className="font-semibold text-lg">
            MindBridge © 2026
          </h3>

          <p className="mt-2">
            Empowering Students Through Learning & Mental Wellness
          </p>

        </footer>

      </div>
    </div>
  );
}