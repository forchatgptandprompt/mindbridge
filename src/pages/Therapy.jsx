import { useState } from "react";

export default function Therapy({ coins, setCoins }) {
  const [message, setMessage] = useState("");
  const [redeemed, setRedeemed] = useState([]);

  const services = [
    {
      id: 1,
      emoji: "🧠",
      title: "1-on-1 Therapy Session",
      description:
        "Connect with certified psychologists for professional mental health support.",
      coins: 100,
      duration: "45 Minutes",
    },

    {
      id: 2,
      emoji: "🧘",
      title: "Meditation Course",
      description:
        "Learn mindfulness and relaxation techniques to improve focus and well-being.",
      coins: 40,
      duration: "4 Sessions",
    },

    {
      id: 3,
      emoji: "🌿",
      title: "Stress Management Workshop",
      description:
        "Interactive workshops designed to help students manage academic pressure.",
      coins: 50,
      duration: "2 Hours",
    },

    {
      id: 4,
      emoji: "🎯",
      title: "Career Guidance Session",
      description:
        "Receive mentorship and career advice from industry professionals.",
      coins: 80,
      duration: "1 Hour",
    },
  ];

  const redeemService = (service) => {
    if (redeemed.includes(service.id)) return;

    if (coins >= service.coins) {
      setCoins(coins - service.coins);
      setRedeemed([...redeemed, service.id]);

      setMessage(
        `✅ Successfully redeemed ${service.title}!`
      );

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } else {
      setMessage(
        "❌ Not enough Care Coins to redeem this service."
      );

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold text-blue-600">
            🧠 Mental Wellness Hub
          </h1>

          <p className="text-xl text-slate-600 mt-4 max-w-3xl mx-auto">
            Redeem your Care Coins for therapy, mindfulness programs,
            career mentoring, and stress-management workshops.
          </p>

        </div>

        {/* Success Message */}

        {message && (
          <div className="mb-8 bg-green-100 text-green-700 p-4 rounded-2xl text-center font-semibold shadow-md animate-pulse">
            {message}
          </div>
        )}

        {/* Care Coins Card */}

        <div className="bg-blue-100 rounded-3xl p-8 mb-12 flex justify-between items-center shadow-lg">

          <div>

            <h2 className="text-2xl font-bold text-blue-800">
              Your Available Balance
            </h2>

            <p className="text-blue-700 mt-2">
              Earn more coins by helping your peers academically.
            </p>

          </div>

          <div className="text-5xl font-bold text-blue-600">
            🪙 {coins}
          </div>

        </div>

        {/* Services */}

        <div className="grid md:grid-cols-2 gap-8">

          {services.map((service) => (

            <div
              key={service.id}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="text-6xl mb-5">
                {service.emoji}
              </div>

              <h2 className="text-2xl font-bold mb-3">
                {service.title}
              </h2>

              <p className="text-slate-600 leading-relaxed mb-5">
                {service.description}
              </p>

              <div className="flex justify-between items-center mb-6">

                <span className="text-blue-600 font-bold text-lg">
                  🪙 {service.coins} Coins
                </span>

                <span className="text-slate-500">
                  {service.duration}
                </span>

              </div>

              <button
                onClick={() => redeemService(service)}
                disabled={redeemed.includes(service.id)}
                className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  redeemed.includes(service.id)
                    ? "bg-green-500 text-white cursor-default"
                    : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
                }`}
              >
                {redeemed.includes(service.id)
                  ? "Redeemed ✓"
                  : "Redeem Service"}
              </button>

            </div>

          ))}

        </div>

        {/* Footer Note */}

        <div className="mt-16 text-center text-slate-500">

          <p>
            Therapy services are supported through institutional
            partnerships, CSR initiatives, and NGO collaborations.
          </p>

        </div>

      </div>
    </div>
  );
}