    import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold">
        Welcome to Deszy AI Dashboard 👋
      </h1>

      <p className="mt-4 text-gray-400">
        This is where users will access all AI tools.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <Link href="/chat">
  <div className="cursor-pointer rounded-2xl bg-slate-900 p-6 transition hover:scale-105 hover:bg-slate-800">
    <h2 className="text-xl font-bold text-blue-400">
      🤖 AI Chat
    </h2>

    <p className="mt-2 text-gray-400">
      Chat with your AI assistant.
    </p>
  </div>
</Link>

        <Link href="/pdf-tools">
  <div className="cursor-pointer rounded-2xl bg-slate-900 p-6 transition hover:scale-105 hover:bg-slate-800">
    <h2 className="text-xl font-bold text-green-400">📄 PDF Tools</h2>
    <p className="mt-2 text-gray-400">
      Summarize and analyze PDFs.
    </p>
  </div>
</Link>

        <Link href="/image-ai">
  <div className="cursor-pointer rounded-2xl bg-slate-900 p-6 transition hover:scale-105 hover:bg-slate-800">
    <h2 className="text-xl font-bold text-purple-400">🖼️ Image AI</h2>
    <p className="mt-2 text-gray-400">
      Generate AI-powered images.
    </p>
  </div>
</Link>

        <div className="rounded-2xl bg-slate-900 p-6">
          <h2 className="text-xl font-bold text-orange-400">🎓 Study Hub</h2>
          <p className="mt-2 text-gray-400">
            Learn smarter with AI.
          </p>
        </div>

      </div>
    </main>
  );
}