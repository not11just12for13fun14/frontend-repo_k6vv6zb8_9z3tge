import RoadmapExplorer from './components/RoadmapExplorer'
import TrendsFeed from './components/TrendsFeed'
import AITutor from './components/AITutor'
import ResumeBuilder from './components/ResumeBuilder'
import { Rocket } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-blue-600/10 text-blue-700">
              <Rocket className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                Launch your tech career with clarity and momentum
              </h1>
              <p className="mt-4 text-gray-600 max-w-2xl">
                One place for job‑ready roadmaps, the latest tech trends, AI‑powered course picks, and ATS‑friendly resume guidance.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#tutor" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-2.5 font-medium shadow hover:bg-blue-700">
                  Get your plan
                </a>
                <a href="#roadmaps" className="inline-flex items-center justify-center rounded-lg border px-5 py-2.5 font-medium text-gray-700 hover:bg-white">
                  Explore roadmaps
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sections */}
      <main>
        <div id="roadmaps"><RoadmapExplorer /></div>
        <TrendsFeed />
        <div id="tutor"><AITutor /></div>
        <ResumeBuilder />
      </main>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500">
        Built for students aiming higher • Your career, accelerated
      </footer>
    </div>
  )
}

export default App
