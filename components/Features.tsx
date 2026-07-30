export default function Features() {
  return (
    <section className="grid gap-8 px-8 pb-20 md:grid-cols-3 bg-slate-950">
      <div className="rounded-2xl bg-slate-900 p-8 hover:bg-slate-800 transition">
        <h2 className="text-2xl font-bold">🤖 AI Chat</h2>
        <p className="mt-3 text-gray-400">
          Chat with a powerful AI assistant for work, school, and everyday tasks.
        </p>
      </div>

      <div className="rounded-2xl bg-slate-900 p-8 hover:bg-slate-800 transition">
        <h2 className="text-2xl font-bold">📄 PDF Tools</h2>
        <p className="mt-3 text-gray-400">
          Merge, split, summarize, and convert PDF documents quickly.
        </p>
      </div>

      <div className="rounded-2xl bg-slate-900 p-8 hover:bg-slate-800 transition">
        <h2 className="text-2xl font-bold">🎓 Study Assistant</h2>
        <p className="mt-3 text-gray-400">
          Generate quizzes, summaries, explanations, and study notes.
        </p>
      </div>
    </section>
  );
}