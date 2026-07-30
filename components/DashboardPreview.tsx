export default function DashboardPreview() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold uppercase tracking-widest">
            Dashboard
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Everything You Need in One Place
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            Manage conversations, summarize PDFs, generate images,
            study smarter, and organize your work from one beautiful dashboard.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-2xl">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="rounded-2xl bg-slate-800 p-6">
              <h3 className="text-xl font-bold text-blue-400">
                AI Chat
              </h3>

              <p className="mt-3 text-gray-400">
                Start intelligent conversations.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-800 p-6">
              <h3 className="text-xl font-bold text-green-400">
                PDF Tools
              </h3>

              <p className="mt-3 text-gray-400">
                Analyze and summarize documents.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-800 p-6">
              <h3 className="text-xl font-bold text-purple-400">
                Image AI
              </h3>

              <p className="mt-3 text-gray-400">
                Generate amazing AI images.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-800 p-6">
              <h3 className="text-xl font-bold text-orange-400">
                Study Hub
              </h3>

              <p className="mt-3 text-gray-400">
                Learn faster with AI assistance.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}