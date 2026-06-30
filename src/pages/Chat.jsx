import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState("");

  const messagesEndRef = useRef(null);

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

  const avatarColors = {
    Sreya: "bg-pink-200",
    Anna: "bg-purple-200",
    Catherine: "bg-blue-200",
    Pankhuri: "bg-amber-200",
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

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

    const randomReply =
      autoReplies[
        Math.floor(Math.random() * autoReplies.length)
      ];

    setTyping(randomReply.sender);

    setTimeout(() => {
      setTyping("");

      setMessages((prev) => [
        ...prev,
        randomReply,
      ]);
    }, 1500);
  };

  return (
    <div className="min-h-screen p-4 md:p-10 relative overflow-hidden">

      {/* Background Blobs */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 blur-3xl rounded-full -z-10"></div>

      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-4xl mx-auto">

        {/* Header */}

        <div
          className="
          bg-white/70
          backdrop-blur-2xl
          border border-white/40
          p-6
          rounded-t-[32px]
          shadow-xl
          flex items-center gap-4
          "
        >

          <div className="w-16 h-16 bg-blue-100 rounded-3xl flex items-center justify-center text-3xl">
            👥
          </div>

          <div>

            <h1 className="text-2xl md:text-3xl font-bold">
              FC Batch-2 Study Group
            </h1>

            <p className="text-green-500 mt-1">
              ● Sreya, Anna, Catherine & Pankhuri Online
            </p>

          </div>

        </div>

        {/* Messages */}

        <div
          className="
          bg-white/60
          backdrop-blur-2xl
          border-x
          border-white/40
          h-[500px]
          overflow-y-auto
          p-6 md:p-8
          space-y-5
          "
        >

          <AnimatePresence>

            {messages.map((msg, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className={`flex ${
                  msg.sender === "You"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div>

                  {msg.sender !== "You" && (

                    <div className="flex items-center gap-2 mb-2 ml-2">

                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          avatarColors[msg.sender]
                        }`}
                      >
                        {msg.sender[0]}
                      </div>

                      <p className="text-sm text-slate-500">
                        {msg.sender}
                      </p>

                    </div>

                  )}

                  <div
                    className={`max-w-xs md:max-w-md p-4 rounded-[24px] shadow-md ${
                      msg.sender === "You"
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                        : "bg-white/80 backdrop-blur-xl"
                    }`}
                  >
                    {msg.text}
                  </div>

                </div>

              </motion.div>

            ))}

          </AnimatePresence>

          {/* Typing Indicator */}

          {typing && (

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="text-slate-500 text-sm ml-3"
            >
              {typing} is typing...
            </motion.div>

          )}

          <div ref={messagesEndRef} />

        </div>

        {/* Input */}

        <div
          className="
          bg-white/70
          backdrop-blur-2xl
          border border-white/40
          p-4 md:p-6
          rounded-b-[32px]
          shadow-xl
          flex gap-4
          "
        >

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
            className="
            flex-1
            bg-white/80
            backdrop-blur-xl
            rounded-2xl
            p-4
            focus:outline-none
            focus:ring-2
            focus:ring-blue-300
            "
          />

          <button
            onClick={sendMessage}
            className="
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            text-white
            px-6 md:px-8
            rounded-2xl
            hover:-translate-y-1
            hover:shadow-xl
            transition-all
            duration-300
            "
          >
            Send
          </button>

        </div>

      </div>
    </div>
  );
}