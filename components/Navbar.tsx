"use client";

import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 font-bold text-white">
            D
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              Deszy AI
            </h1>

            <p className="text-xs text-gray-400">
              Intelligence for Everyone
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="transition hover:text-blue-400">
            Home
          </a>

          <a href="#" className="transition hover:text-blue-400">
            Features
          </a>

          <a href="#" className="transition hover:text-blue-400">
            Pricing
          </a>

          <a href="#" className="transition hover:text-blue-400">
            Contact
          </a>
        </div>

        {/* Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          
        <Link href="/login">
       <button className="rounded-lg border border-slate-700 px-5 py-2 hover:bg-slate-800">
            Login
      </button>
      </Link>
          
      <Link href="/signup">
     <button className="rounded-lg bg-blue-600 px-5 py-2 font-semibold transition hover:scale-105 hover:bg-blue-700">
         Sign Up
     </button>
       </Link>
          
 </div>

        {/* Mobile Menu Icon */}
        <button className="text-2xl md:hidden">
          <FiMenu />
        </button>
      </div>
    </motion.nav>
  );
}