"use client"

import Image from "next/image"
import Link from "next/link"

const collections = [
  {
    title: "Fleece",
    subtitle: "Warmth Without Weight",
    image: "/images/collection-fleece.jpg",
    href: "/collections/fleece",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Jackets",
    subtitle: "Weatherproof Protection",
    image: "/images/collection-jackets.jpg",
    href: "/collections/jackets",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Shirts",
    subtitle: "Everyday Versatility",
    image: "/images/collection-shirts.jpg",
    href: "/collections/shirts",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Accessories",
    subtitle: "Complete The Look",
    image: "/images/collection-accessories.jpg",
    href: "/collections/accessories",
    span: "col-span-1 row-span-1",
  },
]

export function FeaturedCollections() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3">
          Explore
        </p>
        <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
          Shop By Collection
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
        {collections.map((col) => (
          <Link
            key={col.title}
            href={col.href}
            className={`group relative overflow-hidden ${
              col.title === "Jackets" ? "sm:row-span-2" : ""
            } ${col.title === "Accessories" ? "sm:col-span-2 lg:col-span-1" : ""}`}
          >
            <div
              className={`relative w-full overflow-hidden ${
                col.title === "Jackets" ? "h-80 sm:h-full" : "h-80"
              }`}
            >
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-foreground/25 transition-all duration-500 group-hover:bg-foreground/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-background/70 mb-2">
                  {col.subtitle}
                </p>
                <h3 className="font-serif text-3xl font-bold text-background lg:text-4xl">
                  {col.title}
                </h3>
                <span className="mt-4 inline-block border-b-2 border-background pb-0.5 text-xs font-semibold uppercase tracking-widest text-background opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                  Shop Now
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
