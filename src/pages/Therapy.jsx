export default function Therapy() {
  const services = [
    {
      emoji: "🧠",
      title: "1-on-1 Therapy Session",
      description:
        "Connect with certified psychologists for professional mental health support.",
      coins: 100,
      duration: "45 Minutes",
    },

    {
      emoji: "🧘",
      title: "Meditation Course",
      description:
        "Learn mindfulness and relaxation techniques to improve focus and well-being.",
      coins: 40,
      duration: "4 Sessions",
    },

    {
      emoji: "🌿",
      title: "Stress Management Workshop",
      description:
        "Interactive workshops designed to help students manage academic pressure.",
      coins: 50,
      duration: "2 Hours",
    },

    {
      emoji: "🎯",
      title: "Career Guidance Session",
      description:
        "Receive mentorship and career advice from industry professionals.",
      coins: 80,
      duration: "1 Hour",
    },
  ];

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
            🪙 120
          </div>

        </div>

        {/* Services */}

        <div className="grid md:grid-cols-2 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
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

              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700 transition">
                Redeem Service
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