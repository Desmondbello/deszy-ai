export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800 bg-slate-950">
      <h1 className="text-2xl font-bold text-blue-500">
        Deszy AI
      </h1>

      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-blue-400">Home</a>
        <a href="#" className="hover:text-blue-400">Features</a>
        <a href="#" className="hover:text-blue-400">Pricing</a>
        <a href="#" className="hover:text-blue-400">Contact</a>

        <button className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700">
          Login
        </button>
      </div>
    </nav>
  );
}