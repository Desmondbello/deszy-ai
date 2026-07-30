
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-blue-500">
          Deszy AI
        </h1>

        <div className="flex gap-6">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-6xl font-extrabold">
          Your Intelligent
          <br />
          Everyday Assistant
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-gray-400">
          Build, Learn, Create and Work Smarter with Deszy AI.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-xl border border-gray-600 px-8 py-4 font-semibold hover:bg-slate-800">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid gap-8 px-8 pb-20 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-900 p-8">
          <h2 className="text-2xl font-bold">🤖 AI Chat</h2>
          <p className="mt-3 text-gray-400">
            Ask questions, research topics and get instant answers.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900 p-8">
          <h2 className="text-2xl font-bold">📄 PDF Tools</h2>
          <p className="mt-3 text-gray-400">
            Merge, split, summarize and convert PDFs with AI.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900 p-8">
          <h2 className="text-2xl font-bold">🎓 Study Assistant</h2>
          <p className="mt-3 text-gray-400">
            Learn faster with quizzes, summaries and explanations.
          </p>
        </div>
      </section>
    </main>
  );
}