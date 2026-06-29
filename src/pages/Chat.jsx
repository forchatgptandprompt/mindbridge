import { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "Sreya",
      text: "Hey! Did anyone finish the Typography assignment?",
    },

    {
      sender: "You",
      text: "Yes, I uploaded my notes on MindBridge yesterday!",
    },

    {
      sender: "Anna",
      text: "That's amazing! I'll check them out tonight 😊",
    },

    {
      sender: "Catherine",
      text: "Can we have a study session this weekend?",
    },

    {
      sender: "Pankhuri",
      text: "I'm in! Let's meet after the Visual Communication class.",
    },
  ]);

  const autoReplies = [
    {
      sender: "Sreya",
      text: "Thanks for helping everyone! 💖",
    },

    {
      sender: "Anna",
      text: "Let's study together tomorrow!",
    },

    {
      sender: "Catherine",
      text: "I'll upload my notes later today!",
    },

    {
      sender: "Pankhuri",
      text: "That really helped me, thank you! 😊",
    },

    {
      sender: "Sreya",
      text: "Good luck for the submission! ✨",
    },

    {
      sender: "Anna",
      text: "Let's complete the challenge together! 🌟",
    },
  ];

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "You",
        text: message,
      },
    ]);

    setMessage("");

    setTimeout(() => {
      const randomReply =
        autoReplies[
          Math.floor(Math.random() * autoReplies.length)
        ];

      setMessages((prev) => [
        ...prev,
        randomReply,
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-10">

      <div className="max-w-4xl mx-auto">

        {/* Header */}

        <div className="bg-white p-6 rounded-t-3xl shadow-lg flex items-center gap-4">

          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
            👥
          </div>

          <div>

            <h1 className="text-2xl font-bold">
              FC Batch-2 Study Group
            </h1>

            <p className="text-green-500">
              ● Sreya, Anna, Catherine & Pankhuri Online
            </p>

          </div>

        </div>

        {/* Messages */}

        <div className="bg-white h-[500px] overflow-y-auto p-8 space-y-4 shadow-lg">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`flex ${
                msg.sender === "You"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div>

                {msg.sender !== "You" && (
                  <p className="text-sm text-slate-500 mb-1 ml-3">
                    {msg.sender}
                  </p>
                )}

                <div
                  className={`max-w-sm p-4 rounded-3xl ${
                    msg.sender === "You"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-200"
                  }`}
                >
                  {msg.text}
                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Input */}

        <div className="bg-white p-6 rounded-b-3xl shadow-lg flex gap-4">

          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            className="flex-1 border rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-8 rounded-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-105"
          >
            Send
          </button>

        </div>

      </div>

    </div>
  );
}