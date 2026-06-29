export default function Profile({ coins }) {
  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}

        <h1 className="text-5xl font-bold text-blue-600 mb-10">
          👤 My Profile
        </h1>

        {/* Profile Card */}

        <div className="bg-white p-10 rounded-3xl shadow-lg">

          <div className="flex items-center gap-8">

            {/* Avatar */}

            <div className="w-28 h-28 bg-blue-100 rounded-full flex items-center justify-center text-5xl">
              👩
            </div>

            {/* User Details */}

            <div>

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

            <div className="bg-blue-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-slate-700">
                Care Coins
              </h3>

              <p className="text-3xl font-bold text-blue-600 mt-2">
                🪙 {coins}
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-slate-700">
                Study Groups Joined
              </h3>

              <p className="text-3xl font-bold text-blue-600 mt-2">
                3
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-slate-700">
                Notes Uploaded
              </h3>

              <p className="text-3xl font-bold text-blue-600 mt-2">
                6
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-slate-700">
                Doubts Answered
              </h3>

              <p className="text-3xl font-bold text-blue-600 mt-2">
                14
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl md:col-span-2">
              <h3 className="text-lg font-semibold text-slate-700">
                Wellness Sessions Attended
              </h3>

              <p className="text-3xl font-bold text-blue-600 mt-2">
                2
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}