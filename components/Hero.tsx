"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-32">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <span className="rounded-full border border-blue-500 px-4 py-2 text-sm text-blue-400">
          🚀 Powered by Artificial Intelligence
        </span>

        <h1 className="mt-8 text-6xl font-extrabold leading-tight md:text-7xl">
          Your Intelligent
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Everyday Assistant
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">
          Research, write, learn, create images, summarize PDFs, and boost
          productivity with one powerful AI platform.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-xl border border-slate-700 px-8 py-4 font-semibold transition hover:bg-slate-800">
            Watch Demo
          </button>
        </div>
      </motion.div>
    </section>
  );
}