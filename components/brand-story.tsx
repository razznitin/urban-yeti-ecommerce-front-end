import Image from "next/image"
import Link from "next/link"

export function BrandStory() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/brand-story.jpg"
            alt="Person on a mountain summit at sunrise overlooking alpine wilderness"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Our Story
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-foreground text-balance">
            True to Our Roots, Built for the Journey Ahead
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg max-w-lg">
            At Urban Yeti, we believe the best adventures happen when the urban edge meets the wild unknown. Every piece we craft is designed to move with you, from city streets to mountain peaks.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg max-w-lg">
            We put responsibility at the heart of every product, using recycled and organic materials wherever possible, planting a tree for every order, and building clothing that lasts.
          </p>

          {/* Impact stats */}
          <div className="mt-4 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <p className="text-2xl font-bold text-primary lg:text-3xl">250K+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                Trees Planted
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary lg:text-3xl">74%</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                Recycled Materials
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary lg:text-3xl">100%</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                Carbon Neutral
              </p>
            </div>
          </div>

          <Link
            href="/about"
            className="mt-4 inline-flex w-fit items-center justify-center bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:opacity-90"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
