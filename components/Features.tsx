import { FaRobot, FaFilePdf, FaGraduationCap } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaRobot className="text-4xl text-blue-400" />,
      title: "AI Chat",
      description:
        "Get instant answers, brainstorm ideas, and solve problems with AI.",
    },
    {
      icon: <FaFilePdf className="text-4xl text-red-400" />,
      title: "PDF Tools",
      description:
        "Summarize, merge, split, and analyze documents in seconds.",
    },
    {
      icon: <FaGraduationCap className="text-4xl text-green-400" />,
      title: "Study Assistant",
      description:
        "Generate notes, quizzes, explanations, and exam preparation material.",
    },
  ];

  return (
    <section className="bg-slate-950 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Powerful Features
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-blue-500"
            >
              {feature.icon}

              <h3 className="mt-6 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}