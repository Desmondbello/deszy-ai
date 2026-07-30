export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl bg-slate-900 p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-white">
          Welcome Back 👋
        </h1>

        <p className="mt-3 text-center text-gray-400">
          Sign in to your Deszy AI account
        </p>

        <form className="mt-8 space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
          />

          <button
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Login
          </button>

        </form>

        <p className="mt-6 text-center text-gray-400">
          Don't have an account?
          <span className="ml-2 text-blue-400 cursor-pointer">
            Sign Up
          </span>
        </p>

      </div>
    </main>
  );
}