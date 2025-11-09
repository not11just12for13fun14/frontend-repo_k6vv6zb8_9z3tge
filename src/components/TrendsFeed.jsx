import { Flame, Globe, ArrowUpRight } from 'lucide-react'

const TRENDS = [
  {
    title: 'AI Agents moving into production',
    source: 'The New Stack',
    url: '#',
    tag: 'AI/ML',
  },
  {
    title: 'Rust gains traction for backend services',
    source: 'InfoQ',
    url: '#',
    tag: 'Backend',
  },
  {
    title: 'Next-gen CSS tooling and design systems',
    source: 'Smashing Mag',
    url: '#',
    tag: 'Frontend',
  },
]

export default function TrendsFeed() {
  return (
    <section className="py-14 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <Flame className="h-6 w-6 text-rose-600" />
          <h2 className="text-2xl font-bold tracking-tight">What’s trending</h2>
        </div>
        <p className="text-gray-600 mb-8">Stay ahead with curated insights on tools, frameworks, and hiring trends.</p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TRENDS.map((t) => (
            <a key={t.title} href={t.url} className="group block rounded-xl border bg-white/80 backdrop-blur p-5 hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs text-gray-500"><Globe className="h-3.5 w-3.5" /> {t.source}</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-rose-50 text-rose-600">{t.tag}</span>
              </div>
              <h3 className="mt-3 font-semibold group-hover:text-gray-900 text-gray-800">{t.title}</h3>
              <span className="mt-3 inline-flex items-center gap-1 text-blue-600 text-sm">Read more <ArrowUpRight className="h-4 w-4" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
