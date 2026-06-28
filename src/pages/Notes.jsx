export default function Notes() {

  const notes = [
    "Design Fundamentals Notes",
    "Typography Basics",
    "Fashion Communication Semester 2",
    "Color Theory Guide",
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-blue-600 mb-4">
          📚 Shared Notes
        </h1>

        <p className="text-slate-600 text-xl mb-10">
          Access resources shared by fellow students.
        </p>

        <div className="grid gap-6">

          {notes.map((note, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-lg flex justify-between items-center"
            >

              <div>
                <h2 className="text-2xl font-semibold">
                  {note}
                </h2>

                <p className="text-slate-500">
                  Uploaded by Peer Mentor
                </p>
              </div>

              <button className="bg-blue-600 text-white px-5 py-3 rounded-2xl hover:bg-blue-700 transition">
                Download
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}