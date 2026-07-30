export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-6 bg-slate-950 text-white">
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
  );
}