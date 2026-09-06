import Image from 'next/image'
import { Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-20 max-w-5xl mx-auto px-6">
      <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8">
        
        {/* Left Column: Text & Buttons */}
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-full mb-4 border border-emerald-500/20">
            Available for new projects
          </span>
          
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            Full-Stack Developer building <span className="text-emerald-500">fast, thoughtful</span> web apps.
          </h1>
          
          <p className="text-muted-foreground text-lg mb-6">
            I'm Saad Qamar Alvi. I design and ship end-to-end products — from pixel-perfect front-ends to reliable APIs and databases.
          </p>

          {/* Action Button Group */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <a
              href="#projects"
              className="px-4 py-2.5 rounded-lg bg-emerald-500 text-zinc-950 font-medium hover:bg-emerald-400 transition-colors"
            >
              View my work &rarr;
            </a>

            <a
              href="https://www.linkedin.com/in/saadqamaralvi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg border border-border bg-card text-foreground hover:bg-accent transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <svg className="w-4 h-4 text-emerald-500 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.53 1.53 0 1 0 0 3.06 1.53 1.53 0 0 0 0-3.06Z" />
              </svg>
              LinkedIn
            </a>

            <a
              href="/Saad_Qamar_Alvi_Resume.pdf"
              download="Saad_Qamar_Alvi_Resume.pdf"
              className="px-4 py-2.5 rounded-lg border border-border bg-card text-foreground hover:bg-accent transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Download className="w-4 h-4 text-emerald-500" />
              Resume
            </a>
          </div>
        </div>

        {/* Right Column: Clickable LinkedIn Profile Image */}
        <div className="shrink-0">
          <a
            href="https://www.linkedin.com/in/saadqamaralvi"
            target="_blank"
            rel="noopener noreferrer"
            className="block group relative"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-emerald-500/30 group-hover:border-emerald-500 transition-all duration-300 shadow-lg">
              <Image
                src="/profile.jpeg"
                alt="Saad Qamar Alvi"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}