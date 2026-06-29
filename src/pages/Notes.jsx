import { useState } from "react";

export default function Notes({ coins, setCoins }) {
  const [message, setMessage] = useState("");

  const notes = [
    "Design Fundamentals Notes",
    "Typography Basics",
    "Fashion Communication Semester 2",
    "Color Theory Guide",
  ];

  const uploadNotes = () => {
    setCoins(coins + 10);

    setMessage("✅ Notes uploaded successfully! +10 Care Coins earned!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-10">

          <div>
            <h1 className="text-5xl font-bold text-blue-600 mb-4">
              📚 Shared Notes
            </h1>

            <p className="text-slate-600 text-xl">
              Access resources shared by fellow students.
            </p>
          </div>

          <button
            onClick={uploadNotes}
            className="bg-green-600 text-white px-6 py-4 rounded-2xl hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            ⬆️ Upload Notes (+10 🪙)
          </button>

        </div>

        {/* Success Message */}

        {message && (
          <div className="mb-8 bg-green-100 text-green-700 p-4 rounded-2xl text-center font-semibold shadow-md animate-pulse">
            {message}
          </div>
        )}

        {/* Current Coins */}

        <div className="bg-blue-100 p-6 rounded-3xl mb-8 shadow-lg">

          <h2 className="text-xl font-bold text-blue-700">
            Current Care Coins
          </h2>

          <p className="text-4xl font-bold text-blue-600 mt-2">
            🪙 {coins}
          </p>

        </div>

        {/* Notes List */}

        <div className="grid gap-6">

          {notes.map((note, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-lg flex justify-between items-center hover:shadow-2xl transition-all duration-300"
            >

              <div>
                <h2 className="text-2xl font-semibold">
                  {note}
                </h2>

                <p className="text-slate-500">
                  Uploaded by Peer Mentor
                </p>
              </div>

              <button className="bg-blue-600 text-white px-5 py-3 rounded-2xl hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                Download
              </button>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}