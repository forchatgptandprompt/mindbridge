export default function Profile() {
  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-blue-600 mb-10">
          👤 My Profile
        </h1>

        <div className="bg-white p-10 rounded-3xl shadow-lg">

          <div className="flex items-center gap-8">

            <div className="w-28 h-28 bg-blue-100 rounded-full flex items-center justify-center text-5xl">
              👩
            </div>

            <div>

              <h2 className="text-4xl font-bold">
                Karishma M
              </h2>

              <p className="text-slate-500 mt-2 text-lg">
                Fashion Communication • NIFT
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="font-semibold">🪙 Care Coins</h3>
              <p className="text-3xl text-blue-600 font-bold mt-2">
                120
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="font-semibold">👥 Study Groups</h3>
              <p className="text-3xl text-blue-600 font-bold mt-2">
                3
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="font-semibold">📚 Notes Uploaded</h3>
              <p className="text-3xl text-blue-600 font-bold mt-2">
                6
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <h3 className="font-semibold">❓ Doubts Answered</h3>
              <p className="text-3xl text-blue-600 font-bold mt-2">
                14
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}