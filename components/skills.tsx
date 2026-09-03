const skills = [
  {
    name: 'React',
    role: 'Front-end',
    description:
      'Component-driven UIs with hooks, context, and modern state patterns.',
  },
  {
    name: 'Next.js',
    role: 'Framework',
    description:
      'App Router, server components, and streaming for fast, SEO-friendly apps.',
  },
  {
    name: 'Node.js',
    role: 'Back-end',
    description:
      'REST and streaming APIs, background jobs, and server-side tooling.',
  },
  {
    name: 'Supabase',
    role: 'Database & Auth',
    description:
      'Postgres, row-level security, auth, and realtime for production data.',
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20"
      aria-labelledby="skills-heading"
    >
      <div className="mb-10 flex flex-col gap-2">
        <span className="font-mono text-sm text-primary">01 / Skills</span>
        <h2
          id="skills-heading"
          className="text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Tools I build with
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <div className="mb-4 inline-flex size-11 items-center justify-center rounded-lg border border-border bg-background font-mono text-sm font-semibold text-primary">
              {skill.name.slice(0, 2)}
            </div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              {skill.role}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-foreground">
              {skill.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
