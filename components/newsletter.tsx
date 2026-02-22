"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="bg-foreground">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/60 mb-3">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl font-bold text-background sm:text-4xl lg:text-5xl">
            Join the Pack
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-background/70">
            Be the first to know about new collections, exclusive offers, and adventures from the Urban Yeti community.
          </p>

          {submitted ? (
            <div className="mt-10">
              <p className="text-lg font-medium text-background">
                Welcome to the pack. Check your inbox.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 border-b-2 border-background/30 bg-transparent px-1 py-3 text-sm text-background placeholder:text-background/40 outline-none transition-colors focus:border-primary"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:opacity-90"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
