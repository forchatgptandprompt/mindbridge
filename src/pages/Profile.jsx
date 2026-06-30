import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Profile({
  coins,
  setIsLoggedIn,
}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(
      "mindbridgeLoggedIn"
    );

    setIsLoggedIn(false);

    navigate("/login");
  };

  const stats = [
    {
      title: "Care Coins",
      value: `🪙 ${coins}`,
      premium: true,
    },

    {
      title: "Study Groups Joined",
      value: "3",
    },

    {
      title: "Notes Uploaded",
      value: "6",
    },

    {
      title: "Doubts Answered",
      value: "14",
    },

    {
      title: "Wellness Sessions Attended",
      value: "2",
      full: true,
    },
  ];

  const achievements = [
    "🏅 Top Contributor",
    "📚 Note Master",
    "🌿 Wellness Advocate",
    "👥 Community Builder",
  ];

  return (
    <div className="min-h-screen p-4 md:p-10 relative overflow-hidden">

      {/* Background Blobs */}

      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/20 blur-3xl rounded-full -z-10"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/20 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-5xl mx-auto">

        {/* Title */}

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-slate-800 mb-10"
        >
          👤 My Profile
        </motion.h1>

        {/* Profile Card */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="
          bg-white/70
          backdrop-blur-2xl
          border border-white/40
          p-6 md:p-10
          rounded-[32px]
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          "
        >

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Avatar */}

            <div
              className="
              w-28 h-28
              bg-gradient-to-br
              from-blue-100
              to-indigo-100
              rounded-full
              flex
              items-center
              justify-center
              text-5xl
              shadow-lg
              "
            >
              👩
            </div>

            {/* Info */}

            <div className="text-center md:text-left">

              <h2 className="text-3xl font-bold">
                Karishma M
              </h2>

              <p className="text-slate-500 text-lg mt-2">
                Fashion Communication Student
              </p>

              <p className="text-slate-500">
                National Institute of Fashion Technology (NIFT)
              </p>

            </div>

          </div>

          {/* Stats */}

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            {stats.map((stat, index) => (

              <div
                key={index}
                className={`
                  ${
                    stat.full
                      ? "md:col-span-2"
                      : ""
                  }

                  ${
                    stat.premium
                      ? `
                      bg-gradient-to-r
                      from-amber-100
                      via-yellow-100
                      to-orange-100
                      `
                      : `
                      bg-white/70
                      `
                  }

                  backdrop-blur-xl
                  border border-white/40
                  p-6
                  rounded-3xl
                  shadow-lg
                  hover:-translate-y-1
                  hover:shadow-2xl
                  transition-all
                  duration-300
                `}
              >

                <h3 className="text-lg font-semibold text-slate-700">
                  {stat.title}
                </h3>

                <p
                  className={`
                    text-3xl
                    font-bold
                    mt-3

                    ${
                      stat.premium
                        ? "text-amber-700"
                        : "text-blue-600"
                    }
                  `}
                >
                  {stat.value}
                </p>

              </div>

            ))}

          </div>

          {/* Achievements */}

          <div className="mt-12">

            <h3 className="text-2xl font-bold mb-6">
              Achievements
            </h3>

            <div className="flex flex-wrap gap-4">

              {achievements.map((badge, index) => (

                <div
                  key={index}
                  className="
                  bg-white/80
                  backdrop-blur-xl
                  border border-white/40
                  px-5
                  py-3
                  rounded-2xl
                  shadow-md
                  hover:scale-105
                  transition
                  "
                >
                  {badge}
                </div>

              ))}

            </div>

          </div>

          {/* Logout Button */}

          <button
            onClick={handleLogout}
            className="
            mt-12
            w-full
            bg-gradient-to-r
            from-red-500
            to-rose-500
            text-white
            py-4
            rounded-2xl
            font-semibold
            shadow-lg
            hover:-translate-y-1
            hover:shadow-2xl
            transition-all
            duration-300
            "
          >
            Logout
          </button>

        </motion.div>

      </div>

    </div>
  );
}