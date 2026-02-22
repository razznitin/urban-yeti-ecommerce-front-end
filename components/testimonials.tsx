"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "James M.",
    location: "Portland, OR",
    rating: 5,
    text: "The Ridgeline jacket has been my go-to for everything from morning commutes to weekend hikes. The fit is perfect and it handles rain like a champ.",
    product: "Ridgeline Waterproof Jacket",
  },
  {
    name: "Sarah K.",
    location: "Denver, CO",
    rating: 5,
    text: "I love knowing my purchase supports real environmental action. Plus, the fleece is the softest I've ever worn. Urban Yeti has a customer for life.",
    product: "Summit Fleece Pullover",
  },
  {
    name: "Alex T.",
    location: "Seattle, WA",
    rating: 5,
    text: "Built to last and looks great doing it. I've worn the overshirt on trails, at the office, and out to dinner. It just works everywhere.",
    product: "Trail Wool Overshirt",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[current]

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/testimonials-bg.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-background/60 mb-3">
            What Our Community Says
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-background sm:text-4xl lg:text-5xl mb-12">
            Trusted By Adventurers
          </h2>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-amber-400 text-amber-400"
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mb-8">
            <p className="text-lg leading-relaxed text-background/90 lg:text-xl italic">
              {`"${t.text}"`}
            </p>
          </blockquote>

          {/* Attribution */}
          <div className="mb-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-background">
              {t.name}
            </p>
            <p className="mt-1 text-xs text-background/60">
              {t.location} &mdash; {t.product}
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center border border-background/30 text-background/70 transition-colors hover:border-background hover:text-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-background"
                      : "w-2 bg-background/40 hover:bg-background/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center border border-background/30 text-background/70 transition-colors hover:border-background hover:text-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
