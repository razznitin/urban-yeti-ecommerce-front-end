"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from "lucide-react"

const navItems = [
  {
    label: "Shop",
    href: "/shop",
    megaMenu: [
      { title: "Men's", links: ["Jackets", "Fleece", "Shirts", "Knitwear", "T-Shirts", "Trousers"] },
      { title: "Women's", links: ["Jackets", "Fleece", "Shirts", "Knitwear", "T-Shirts", "Trousers"] },
      { title: "Accessories", links: ["Bags", "Hats", "Scarves", "Gloves", "Socks"] },
    ],
  },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground text-center text-xs tracking-widest uppercase py-2 px-4">
        Free shipping on orders over $150
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-background"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex-shrink-0">
            <Image
              src="https://urban-yeti.com/images/urban-yeti-logo-blue.png"
              alt="Urban Yeti"
              width={140}
              height={40}
              className="h-8 w-auto lg:h-10"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.megaMenu && setMegaOpen(item.label)}
                onMouseLeave={() => setMegaOpen(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium tracking-wide uppercase text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.label}
                  {item.megaMenu && <ChevronDown className="h-3 w-3" />}
                </Link>

                {/* Mega menu */}
                {item.megaMenu && megaOpen === item.label && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4">
                    <div className="bg-card border border-border rounded-lg shadow-xl p-8 min-w-[560px]">
                      <div className="grid grid-cols-3 gap-8">
                        {item.megaMenu.map((col) => (
                          <div key={col.title}>
                            <h4 className="font-semibold text-sm uppercase tracking-wider text-primary mb-3">
                              {col.title}
                            </h4>
                            <ul className="flex flex-col gap-2">
                              {col.links.map((link) => (
                                <li key={link}>
                                  <Link
                                    href={`/shop/${col.title.toLowerCase()}/${link.toLowerCase()}`}
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                  >
                                    {link}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              aria-label="Account"
              className="hidden sm:block text-foreground/70 hover:text-primary transition-colors"
            >
              <User className="h-5 w-5" />
            </button>
            <button
              aria-label="Cart"
              className="relative text-foreground/70 hover:text-primary transition-colors"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                0
              </span>
            </button>
            <button
              aria-label="Menu"
              className="lg:hidden text-foreground/70 hover:text-primary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 top-[105px] bg-background z-40 overflow-y-auto">
            <nav className="flex flex-col px-6 py-8 gap-6">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="text-2xl font-medium tracking-wide text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.megaMenu && (
                    <div className="mt-3 ml-4 flex flex-col gap-3">
                      {item.megaMenu.map((col) => (
                        <div key={col.title}>
                          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-1">
                            {col.title}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {col.links.map((link) => (
                              <Link
                                key={link}
                                href={`/shop/${col.title.toLowerCase()}/${link.toLowerCase()}`}
                                className="text-sm text-muted-foreground"
                                onClick={() => setMobileOpen(false)}
                              >
                                {link}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Link
                  href="/account"
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  <User className="h-5 w-5" />
                  Account
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
