import { Layout, Database, Zap } from 'lucide-react'

export function Services() {
  return (
    <section id="services" className="py-20 border-t border-border/60">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-2">// What I Do</h2>
        <h3 className="text-3xl font-bold text-foreground mb-10">Services</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Web Development */}
          <div className="p-6 rounded-xl border border-border bg-card hover:border-emerald-500/50 transition-colors">
            <Layout className="w-8 h-8 text-emerald-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-foreground">Full-Stack Web Apps</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Architecting production-ready web applications using Next.js App Router, React, TypeScript, and Tailwind CSS focused on clean code, responsive layouts, and modern UI architectures.
            </p>
          </div>

          {/* Card 2: API & Database */}
          <div className="p-6 rounded-xl border border-border bg-card hover:border-emerald-500/50 transition-colors">
            <Database className="w-8 h-8 text-emerald-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-foreground">API & Database Design</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Designing normalized relational schemas (SQL) and building performant REST APIs. Structuring clean data access layers and seamless integration between clients and server backends.
            </p>
          </div>

          {/* Card 3: Performance & Systems */}
          <div className="p-6 rounded-xl border border-border bg-card hover:border-emerald-500/50 transition-colors">
            <Zap className="w-8 h-8 text-emerald-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-foreground">System Performance</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Optimizing frontend rendering strategies, Core Web Vitals, and underlying application logic. Applying sound data structures and object-oriented patterns to maintain scalable execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}