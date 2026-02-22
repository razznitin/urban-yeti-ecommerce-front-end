import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Person on a mountain ridge at golden hour wearing Urban Yeti outdoor clothing"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-foreground/30" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-background/80">
          New Season Collection
        </p>
        <h1 className="font-serif text-5xl font-bold leading-tight text-background sm:text-6xl lg:text-7xl max-w-4xl text-balance">
          Designed to Wander, Built to Endure
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-background/85 lg:text-lg">
          Premium outdoor clothing for urban adventurers who embrace the journey and leave a smaller footprint.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:opacity-90"
          >
            Shop Now
          </Link>
          <Link
            href="/collections"
            className="inline-flex items-center justify-center border-2 border-background px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-background transition-all hover:bg-background hover:text-foreground"
          >
            View Collections
          </Link>
        </div>
      </div>
    </section>
  )
}
