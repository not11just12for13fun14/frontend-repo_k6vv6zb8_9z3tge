import { Sparkles, Send } from 'lucide-react'
import { useState } from 'react'

export default function AITutor() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I’m your AI tutor. Tell me your dream role and I’ll tailor a learning plan with course picks.' }
  ])
  const [input, setInput] = useState('')

  const send = () => {
    if (!input.trim()) return
    const userMsg = { role: 'user', content: input.trim() }
    const reply = {
      role: 'assistant',
      content:
        'Great choice! Start with core fundamentals, add 1 project/week, and I’ll adjust recommendations as you progress. Here are 3 courses to begin: “CS50 Intro to CS”, “Frontend Masters: Complete Intro to React”, and “System Design Basics”.',
    }
    setMessages((m) => [...m, userMsg, reply])
    setInput('')
  }

  return (
    <section className="py-14">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="h-6 w-6 text-amber-500" />
          <h2 className="text-2xl font-bold tracking-tight">AI tutor</h2>
        </div>
        <div className="rounded-2xl border bg-white/80 backdrop-blur p-4">
          <div className="h-64 overflow-y-auto space-y-3 pr-1">
            {messages.map((m, idx) => (
              <div key={idx} className={m.role === 'assistant' ? 'text-gray-800' : 'text-blue-700 font-medium'}>
                {m.content}
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ask about roles, courses, or roadmaps..."
              className="flex-1 rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button onClick={send} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              <Send className="h-4 w-4" /> Send
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
