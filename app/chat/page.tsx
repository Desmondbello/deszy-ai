"use client";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "👋 Hello! Welcome to Deszy AI.",
    },
  ]);

  async function sendMessage() {
  if (!message.trim()) return;

  const userMessage = message;

  setMessages([
    ...messages,
    {
      sender: "You",
      text: userMessage,
    },
  ]);

  setMessage("");

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: userMessage,
    }),
  });

  const data = await res.json();

  setMessages((prev) => [
    ...prev,
    {
      sender: "AI",
      text: data.reply,
    },
  ]);
}

  return (
  <div className="flex min-h-screen bg-slate-950 text-white">
    <Sidebar />

    <main className="flex-1 p-8">

      <h1 className="text-4xl font-bold">
        🤖 Deszy AI Chat
      </h1>

      <div className="mt-8 rounded-2xl bg-slate-900 p-6 h-[500px] overflow-y-auto">

        {messages.map((msg, index) => (
          <div
            key={index}
            className="mb-4 rounded-xl bg-slate-800 p-4"
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}

      </div>

      <div className="mt-6 flex gap-3">

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask Deszy AI anything..."
          className="flex-1 rounded-xl bg-slate-800 px-4 py-3 outline-none"
        />

        <button
          onClick={sendMessage}
          className="rounded-xl bg-blue-600 px-6 hover:bg-blue-700"
        >
          Send
        </button>

    </main>
  </div>
);
}
