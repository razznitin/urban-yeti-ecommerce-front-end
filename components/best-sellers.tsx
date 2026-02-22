"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ShoppingBag } from "lucide-react"

const products = [
  {
    name: "Summit Fleece Jacket",
    price: 145,
    image: "/images/product-1.jpg",
    hoverImage: "/images/product-1-hover.jpg",
    href: "/shop/summit-fleece-jacket",
    colors: ["Navy", "Charcoal", "Forest"],
  },
  {
    name: "Trail Waterproof Shell",
    price: 225,
    image: "/images/product-2.jpg",
    hoverImage: "/images/product-2-hover.jpg",
    href: "/shop/trail-waterproof-shell",
    colors: ["Forest Green", "Black", "Stone"],
  },
  {
    name: "Heritage Wool Overshirt",
    price: 175,
    image: "/images/product-3.jpg",
    hoverImage: "/images/product-3-hover.jpg",
    href: "/shop/heritage-wool-overshirt",
    colors: ["Charcoal", "Oatmeal", "Navy"],
  },
  {
    name: "Alpine Knit Sweater",
    price: 130,
    image: "/images/product-4.jpg",
    hoverImage: "/images/product-4-hover.jpg",
    href: "/shop/alpine-knit-sweater",
    colors: ["Oatmeal", "Slate", "Tan"],
  },
]

function ProductCard({
  product,
}: {
  product: (typeof products)[0]
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={product.href} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <Image
            src={hovered ? product.hoverImage : product.image}
            alt={product.name}
            fill
            className="object-cover transition-all duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <button
            aria-label={`Quick add ${product.name} to cart`}
            className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 hover:scale-110"
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </Link>
      <div className="mt-4 flex flex-col gap-1">
        <Link href={product.href}>
          <h3 className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <span key={color} className="text-xs text-muted-foreground">
              {color}
            </span>
          ))}
        </div>
        <p className="text-sm font-semibold text-primary">
          ${product.price}.00
        </p>
      </div>
    </div>
  )
}

export function BestSellers() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-card-foreground">
              Best Sellers
            </h2>
          </div>
          <Link
            href="/shop/best-sellers"
            className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:text-foreground"
          >
            View All
            <span className="ml-2">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
