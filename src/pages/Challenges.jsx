import { useState } from "react";

export default function Challenges({ coins, setCoins }) {
  const [joinedChallenges, setJoinedChallenges] = useState([]);
  const [message, setMessage] = useState("");

  const challenges = [
    {
      id: 1,
      emoji: "🌿",
      title: "No-Stress Week",
      description:
        "Practice mindfulness and take regular breaks during your study sessions.",
      reward: 20,
    },

    {
      id: 2,
      emoji: "📖",
      title: "Study Together Challenge",
      description:
        "Help at least 3 classmates with their doubts this week.",
      reward: 15,
    },

    {
      id: 3,
      emoji: "💧",
      title: "Hydration Challenge",
      description:
        "Track your water intake and encourage your friends to stay healthy.",
      reward: 10,
    },

    {
      id: 4,
      emoji: "😊",
      title: "Kindness Challenge",
      description:
        "Perform acts of kindness and support within the MindBridge community.",
      reward: 25,
    },
  ];

  const joinChallenge = (challenge) => {
    if (joinedChallenges.includes(challenge.id)) return;

    setJoinedChallenges([...joinedChallenges, challenge.id]);
    setCoins(coins + challenge.reward);

    setMessage(
      `🎉 You completed "${challenge.title}" and earned +${challenge.reward} Care Coins!`
    );

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold text-blue-600">
            🌟 Community Challenges
          </h1>

          <p className="text-xl text-slate-600 mt-4 max-w-3xl mx-auto">
            Participate in positive activities, support your peers,
            and earn Care Coins for wellness services.
          </p>

        </div>

        {/* Success Message */}

        {message && (
          <div className="mb-8 bg-green-100 text-green-700 p-4 rounded-2xl text-center font-semibold shadow-md animate-pulse">
            {message}
          </div>
        )}

        {/* Coins Card */}

        <div className="bg-blue-100 rounded-3xl p-8 mb-12 flex justify-between items-center shadow-lg">

          <div>

            <h2 className="text-2xl font-bold text-blue-800">
              Your Care Coins
            </h2>

            <p className="text-blue-700 mt-2">
              Complete challenges to earn more rewards.
            </p>

          </div>

          <div className="text-5xl font-bold text-blue-600">
            🪙 {coins}
          </div>

        </div>

        {/* Challenge Grid */}

        <div className="grid md:grid-cols-2 gap-8">

          {challenges.map((challenge) => (

            <div
              key={challenge.id}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="text-6xl mb-5">
                {challenge.emoji}
              </div>

              <h2 className="text-2xl font-bold mb-3">
                {challenge.title}
              </h2>

              <p className="text-slate-600 leading-relaxed mb-6">
                {challenge.description}
              </p>

              <div className="flex justify-between items-center mb-6">

                <span className="text-green-600 font-bold text-lg">
                  +{challenge.reward} 🪙
                </span>

              </div>

              <button
                onClick={() => joinChallenge(challenge)}
                disabled={joinedChallenges.includes(challenge.id)}
                className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  joinedChallenges.includes(challenge.id)
                    ? "bg-green-500 text-white cursor-default"
                    : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
                }`}
              >
                {joinedChallenges.includes(challenge.id)
                  ? "Completed ✓"
                  : "Join Challenge"}
              </button>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}