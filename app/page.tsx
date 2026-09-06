import { SiteHeader } from '@/components/site-header'
import Hero from '@/components/hero' 
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Saad Qamar Alvi. All rights reserved.</p>
          <p className="font-mono">Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}