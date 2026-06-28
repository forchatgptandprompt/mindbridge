export default function Groups() {

  const groups = [
    {
      name: "Visual Communication Group",
      members: 12,
      description: "Discuss design projects, typography, and visual storytelling."
    },
    {
      name: "Photography Club",
      members: 8,
      description: "Share photography tips, assignments, and creative work."
    },
    {
      name: "Fashion Illustration Circle",
      members: 15,
      description: "Collaborate on sketches, portfolios, and fashion concepts."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-blue-600 mb-4">
          👥 Study Groups
        </h1>

        <p className="text-slate-600 text-xl mb-10">
          Learn, collaborate, and grow with your peers.
        </p>

        <div className="grid gap-6">

          {groups.map((group, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition"
            >

              <div className="flex justify-between items-center">

                <div>

                  <h2 className="text-2xl font-bold">
                    {group.name}
                  </h2>

                  <p className="text-slate-500 mt-2">
                    {group.description}
                  </p>

                  <p className="text-blue-600 mt-3 font-medium">
                    👥 {group.members} Members
                  </p>

                </div>

                <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition">
                  Join Group
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}