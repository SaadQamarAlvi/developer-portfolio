'use client'

import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mb-10 flex flex-col gap-2">
        <span className="font-mono text-sm text-primary">03 / Contact</span>
        <h2
          id="contact-heading"
          className="text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Let&apos;s build something
        </h2>
        <p className="max-w-xl text-pretty text-muted-foreground">
          Have a project in mind or just want to say hello? Drop me a message
          and I&apos;ll get back to you.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-10 text-center">
            <CheckCircle2 className="size-10 text-primary" />
            <p className="text-lg font-semibold text-foreground">
              Thanks for reaching out!
            </p>
            <p className="text-sm text-muted-foreground">
              Your message has been sent. I&apos;ll reply as soon as I can.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jane Doe"
                  className="rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jane@example.com"
                  className="rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="resize-y rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <Button type="submit" size="lg" className="self-start">
              Send message
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
