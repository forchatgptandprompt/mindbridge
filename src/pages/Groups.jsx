import { useState } from "react";

export default function Groups() {
  const [joinedGroups, setJoinedGroups] = useState([]);

  const groups = [
    {
      id: 1,
      name: "Visual Communication Group",
      members: 12,
      description:
        "Discuss design projects, typography, and visual storytelling.",
    },
    {
      id: 2,
      name: "Photography Club",
      members: 8,
      description:
        "Share photography tips, assignments, and creative work.",
    },
    {
      id: 3,
      name: "Fashion Illustration Circle",
      members: 15,
      description:
        "Collaborate on sketches, portfolios, and fashion concepts.",
    },
  ];

  const joinGroup = (id) => {
    if (!joinedGroups.includes(id)) {
      setJoinedGroups([...joinedGroups, id]);
    }
  };

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
          {groups.map((group) => (
            <div
              key={group.id}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
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

                <button
                  onClick={() => joinGroup(group.id)}
                  disabled={joinedGroups.includes(group.id)}
                  className={`px-6 py-3 rounded-2xl transition font-semibold ${
                    joinedGroups.includes(group.id)
                      ? "bg-green-500 text-white cursor-default"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {joinedGroups.includes(group.id)
                    ? "Joined ✓"
                    : "Join Group"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}