import { Link } from "react-router-dom";
import logo from "../assets/mindbridge-logo.png.png";

export default function Home({ coins }) {
  return (
    <div className="min-h-screen p-4 md:p-10 relative overflow-hidden">

      {/* Background Blobs */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full -z-10"></div>

      <div className="absolute top-96 right-20 w-96 h-96 bg-purple-200/30 blur-3xl rounded-full -z-10"></div>

      <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-200/20 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}

        <div className="text-center mb-16">

          <img
            src={logo}
            alt="MindBridge Logo"
            className="mx-auto h-28 md:h-32 w-auto object-contain mb-6"
          />

          <p className="text-xl md:text-2xl text-slate-600 mt-4">
            Empowering Students Through Learning & Mental Wellness
          </p>

          <p className="text-base md:text-lg text-slate-500 mt-6 max-w-4xl mx-auto leading-relaxed">
            MindBridge enables students to support one another academically,
            earn Care Coins through meaningful contributions, and redeem them
            for professional mental health and wellness services.
          </p>

          <div className="flex justify-center mt-8">
            <Link to="/therapy">
              <button
                className="
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                text-white
                px-8
                py-4
                rounded-2xl
                font-semibold
                shadow-xl
                hover:-translate-y-1
                hover:shadow-2xl
                transition-all
                duration-300
                "
              >
                Explore Wellness Services
              </button>
            </Link>
          </div>

        </div>

        {/* Welcome Card */}

        <div
          className="
          bg-white/70
          backdrop-blur-2xl
          border border-white/40
          rounded-[32px]
          p-6 md:p-8
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          mb-16
          "
        >

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Welcome, Karishma 👋
              </h2>

              <p className="text-slate-500 mt-3 text-base md:text-lg">
                Fashion Communication Student • NIFT
              </p>

            </div>

            <div
              className="
              bg-gradient-to-r
              from-amber-100
              via-yellow-100
              to-orange-100
              px-6 md:px-8
              py-4 md:py-5
              rounded-3xl
              text-center
              shadow-lg
              "
            >

              <p className="text-sm text-slate-600">
                Care Coins
              </p>

              <h1 className="text-3xl md:text-4xl font-bold text-amber-700">
                🪙 {coins}
              </h1>

            </div>

          </div>

        </div>

        {/* Feature Grid */}

        <section className="mb-20">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
            How MindBridge Works
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <div className="text-5xl mb-4">📚</div>

              <h3 className="text-2xl font-bold mb-3">
                Peer Learning
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Share notes, tutor juniors, and answer questions to create
                a collaborative learning environment.
              </p>

            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <div className="text-5xl mb-4">🪙</div>

              <h3 className="text-2xl font-bold mb-3">
                Care Coin Rewards
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Earn Care Coins through meaningful academic contributions
                and community engagement.
              </p>

            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <div className="text-5xl mb-4">🧠</div>

              <h3 className="text-2xl font-bold mb-3">
                Affordable Therapy
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Redeem your Care Coins for therapy sessions, wellness
                workshops, and mindfulness programs.
              </p>

            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

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

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
            Redeem Your Care Coins
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {[
              ["🧘", "Meditation Course", "40 Coins"],
              ["🌿", "Stress Workshop", "50 Coins"],
              ["🎯", "Career Guidance", "80 Coins"],
              ["🧠", "Therapy Session", "100 Coins"],
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white/70 backdrop-blur-xl border border-white/40 p-6 rounded-3xl shadow-lg text-center hover:scale-105 transition"
              >

                <div className="text-4xl mb-3">
                  {item[0]}
                </div>

                <h3 className="font-bold text-lg md:text-xl">
                  {item[1]}
                </h3>

                <p className="text-blue-600 mt-2 font-semibold">
                  {item[2]}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Footer */}

        <footer className="border-t border-white/40 pt-10 text-center text-slate-500">

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