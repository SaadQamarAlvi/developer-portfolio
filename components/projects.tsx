import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Insight Analytics',
    description:
      'A real-time analytics dashboard with custom charts, cohort filters, and CSV exports.',
    image: '/project-analytics.png',
    tags: ['Next.js', 'Supabase', 'Charts'],
    href: 'https://example.com',
  },
  {
    title: 'Nomad Store',
    description:
      'A headless e-commerce storefront with cart, checkout, and order management.',
    image: '/project-ecommerce.png',
    tags: ['React', 'Node.js', 'Stripe'],
    href: 'https://example.com',
  },
  {
    title: 'Pulse Chat',
    description:
      'A realtime team chat app with presence, typing indicators, and threads.',
    image: '/project-chat.png',
    tags: ['Next.js', 'Supabase', 'Realtime'],
    href: 'https://example.com',
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20"
      aria-labelledby="projects-heading"
    >
      <div className="mb-10 flex flex-col gap-2">
        <span className="font-mono text-sm text-primary">02 / Projects</span>
        <h2
          id="projects-heading"
          className="text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Featured work
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50"
          >
            <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
