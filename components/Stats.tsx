export default function Stats() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
        <div>
          <h2 className="text-5xl font-bold text-blue-500">50K+</h2>
          <p className="mt-2 text-gray-400">Users</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-blue-500">1M+</h2>
          <p className="mt-2 text-gray-400">AI Responses</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-blue-500">99.9%</h2>
          <p className="mt-2 text-gray-400">Uptime</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-blue-500">24/7</h2>
          <p className="mt-2 text-gray-400">Support</p>
        </div>
      </div>
    </section>
  );
}