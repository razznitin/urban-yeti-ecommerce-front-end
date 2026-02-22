import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube } from "lucide-react"

const footerLinks = {
  Shop: ["Men's", "Women's", "Accessories", "New Arrivals", "Best Sellers", "Sale"],
  Company: ["Our Story", "Sustainability", "Careers", "Journal", "Press"],
  Support: ["Contact Us", "Shipping & Returns", "Size Guide", "FAQs", "Store Locator"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
}

export function SiteFooter() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <Image
              src="https://urban-yeti.com/images/urban-yeti-logo-blue.png"
              alt="Urban Yeti"
              width={120}
              height={36}
              className="h-8 w-auto mb-6"
            />
            <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
              Premium urban-outdoor clothing designed for those who wander boldly and tread lightly.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${title.toLowerCase()}/${link.toLowerCase().replace(/[&\s]+/g, "-")}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Urban Yeti. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/legal/privacy-policy"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/legal/terms-of-service"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/legal/cookie-policy"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
