import { Briefcase, CheckCircle2, ArrowRight } from 'lucide-react'

const ROADMAPS = [
  {
    role: 'Frontend Developer',
    color: 'from-blue-500 to-cyan-500',
    steps: [
      'Web fundamentals: HTML, CSS, JavaScript',
      'Modern React + Hooks + State management',
      'TypeScript + component patterns',
      'Testing (Vitest/Jest) & accessibility (a11y)',
      'Build tools, perf, and deployment'
    ],
  },
  {
    role: 'Backend Developer',
    color: 'from-purple-500 to-indigo-500',
    steps: [
      'Language fundamentals (Python/Node/Go)',
      'APIs (REST/GraphQL) & auth best practices',
      'Databases (SQL + NoSQL) & ORMs',
      'Caching, queues, and observability',
      'Cloud, Docker, CI/CD'
    ],
  },
  {
    role: 'Data Scientist',
    color: 'from-emerald-500 to-teal-500',
    steps: [
      'Python, NumPy, pandas, data wrangling',
      'Statistics, probability, and EDA',
      'ML algorithms & scikit-learn',
      'Model eval, MLOps, and deployment',
      'Communication & dashboards'
    ],
  },
]

export default function RoadmapExplorer() {
  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold tracking-tight">Role-based roadmaps</h2>
        </div>
        <p className="text-gray-600 mb-8">Clear, step-by-step paths to land your target role. Save months of guesswork.</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ROADMAPS.map((r) => (
            <div key={r.role} className="group bg-white/80 backdrop-blur rounded-xl border shadow-sm overflow-hidden">
              <div className={`h-1 bg-gradient-to-r ${r.color}`} />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">{r.role}</h3>
                <ul className="space-y-2 mb-4">
                  {r.steps.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all">
                  Explore roadmap <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
