export function Services() {
    return (
      <section id="services" className="py-20 border-t border-border/60">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-2">// What I Do</h2>
          <h3 className="text-3xl font-bold text-foreground mb-10">Services</h3>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-border bg-card hover:border-emerald-500/50 transition-colors">
              <h4 className="text-xl font-semibold mb-2 text-foreground">Web Development</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building fast, SEO-optimized web applications with modern frameworks like Next.js App Router, React, and Tailwind CSS.
              </p>
            </div>
  
            <div className="p-6 rounded-xl border border-border bg-card hover:border-emerald-500/50 transition-colors">
              <h4 className="text-xl font-semibold mb-2 text-foreground">API & Backend Systems</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Designing serverless endpoints, integrating relational databases, webhooks, and third-party APIs.
              </p>
            </div>
  
            <div className="p-6 rounded-xl border border-border bg-card hover:border-emerald-500/50 transition-colors">
              <h4 className="text-xl font-semibold mb-2 text-foreground">Automation & Scraping</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Creating automated workflows, web scrapers, and data extraction pipelines to process unstructured information.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }