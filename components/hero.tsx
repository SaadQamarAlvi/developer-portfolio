import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code2, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pt-24">
      <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Available for new projects
          </span>

          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Full-Stack Developer building{' '}
            <span className="text-primary">fast, thoughtful</span> web apps.
          </h1>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            I&apos;m Saad Qamar Alvi. I design and ship end-to-end products &mdash;
            from pixel-perfect front-ends to reliable APIs and databases. I care
            about performance, accessibility, and clean, maintainable code.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button size="lg" render={<Link href="#projects" />}>
              View my work
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              render={<Link href="#contact" />}
            >
              Get in touch
            </Button>
            <div className="flex items-center gap-1 pl-1">
              <Link
                href="https://github.com/saadqamaralvi"
                aria-label="GitHub profile"
                className="inline-flex size-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
              >
                <Code2 className="size-5" />
              </Link>
              <Link
                href="mailto:saadqamaralvi@gmail.com"
                aria-label="Email me"
                className="inline-flex size-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
              >
                <Mail className="size-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative mx-auto md:mx-0">
          <div className="absolute -inset-3 -z-10 rounded-3xl bg-primary/10 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src="/saad.png"
              alt="Portrait of Saad Qamar Alvi"
              width={320}
              height={400}
              priority
              className="h-[360px] w-[288px] object-cover md:h-[420px] md:w-[336px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}