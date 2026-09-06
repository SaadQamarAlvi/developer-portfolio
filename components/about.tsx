export function About() {
    return (
      <section id="about" className="py-20 border-t border-border/60">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-2">// Introduction</h2>
          <h3 className="text-3xl font-bold text-foreground mb-6">About Me</h3>
  
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
            I’m a Full-Stack Developer and IT Undergraduate specializing in building modern web applications. 
            I focus on clean architecture, fast performance, and seamless user experiences using Next.js, TypeScript, and serverless infrastructure.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h4 className="font-semibold text-foreground mb-2">Languages & Core</h4>
              <p className="text-sm text-muted-foreground">TypeScript, JavaScript, C++, SQL, HTML/CSS</p>
            </div>
  
            <div className="p-6 rounded-xl border border-border bg-card">
              <h4 className="font-semibold text-foreground mb-2">Education</h4>
              <p className="text-sm text-muted-foreground">BS Information Technology</p>
            </div>
  
            <div className="p-6 rounded-xl border border-border bg-card">
              <h4 className="font-semibold text-foreground mb-2">Tooling</h4>
              <p className="text-sm text-muted-foreground">VS Code, Cursor, Git, Docker, n8n, Vercel</p>
            </div>
          </div>
        </div>
      </section>
    )
  }