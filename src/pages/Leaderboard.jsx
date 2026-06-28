export default function Leaderboard() {
  const students = [
    {
      name: "Sreya",
      coins: 350,
      rank: "🥇",
    },
    {
      name: "Anna",
      coins: 280,
      rank: "🥈",
    },
    {
      name: "Karishma",
      coins: 120,
      rank: "🥉",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-10">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-blue-600 mb-10">
          Community Leaderboard
        </h1>

        {students.map((student, index) => (

          <div
            key={index}
            className="bg-white p-6 rounded-3xl shadow-lg mb-5 flex justify-between items-center"
          >

            <div className="flex items-center gap-5">

              <span className="text-4xl">
                {student.rank}
              </span>

              <h2 className="text-2xl font-bold">
                {student.name}
              </h2>

            </div>

            <div className="text-blue-600 text-2xl font-bold">
              🪙 {student.coins}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}