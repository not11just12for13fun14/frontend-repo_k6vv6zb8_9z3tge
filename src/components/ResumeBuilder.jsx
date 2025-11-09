import { FileText, Download } from 'lucide-react'

export default function ResumeBuilder() {
  const example = {
    name: 'Alex Carter',
    role: 'Software Engineer',
    summary: 'Builder-minded engineer with a focus on clean UX and reliable systems. 3 internships, 6 shipped projects.',
    skills: ['JavaScript', 'React', 'Python', 'FastAPI', 'MongoDB', 'Git'],
    experience: [
      {
        company: 'Acme Corp',
        title: 'Frontend Intern',
        period: 'Summer 2024',
        bullets: [
          'Optimized component rendering, cutting TTI by 28%',
          'Led migration to React Query across 9 views',
        ],
      },
      {
        company: 'Campus Labs',
        title: 'Full‑stack Intern',
        period: '2023 – 2024',
        bullets: [
          'Built analytics dashboards used by 1.2k students',
          'Designed ATS‑friendly resume template in Figma',
        ],
      },
    ],
  }

  const download = () => {
    const blob = new Blob([JSON.stringify(example, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'resume-data.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section className="py-14 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <FileText className="h-6 w-6 text-violet-600" />
          <h2 className="text-2xl font-bold tracking-tight">ATS‑friendly resume</h2>
        </div>
        <p className="text-gray-600 mb-8">Use structured sections, action verbs, and measurable impact. Export your data to plug into any template.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border bg-white p-6">
            <h3 className="font-semibold mb-2">Preview</h3>
            <div className="text-sm text-gray-700">
              <div className="text-xl font-bold">{example.name}</div>
              <div className="text-gray-500 mb-3">{example.role}</div>
              <p className="mb-4">{example.summary}</p>
              <div className="mb-4">
                <div className="font-medium">Skills</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {example.skills.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-full bg-slate-100">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-medium">Experience</div>
                <div className="mt-2 space-y-4">
                  {example.experience.map((e) => (
                    <div key={e.company}>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{e.title} • {e.company}</span>
                        <span className="text-xs text-gray-500">{e.period}</span>
                      </div>
                      <ul className="list-disc pl-5 text-sm mt-1">
                        {e.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-white p-6">
            <h3 className="font-semibold mb-4">Export data</h3>
            <p className="text-sm text-gray-600 mb-4">Download a structured JSON you can import into resume tools or keep versioned in Git.</p>
            <button onClick={download} className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg">
              <Download className="h-4 w-4" /> Download JSON
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
