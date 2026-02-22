import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    title: "The Art of Layering: A Complete Guide",
    excerpt:
      "Master the three-layer system to stay comfortable in any conditions, from crisp autumn mornings to unexpected mountain storms.",
    image: "/images/blog-1.jpg",
    date: "Feb 12, 2026",
    category: "Guides",
    href: "/journal/art-of-layering",
  },
  {
    title: "5 Coastal Trails You Need to Hike This Spring",
    excerpt:
      "From rugged sea cliffs to hidden coves, these trails offer breathtaking views and unforgettable experiences for every skill level.",
    image: "/images/blog-2.jpg",
    date: "Feb 5, 2026",
    category: "Adventure",
    href: "/journal/coastal-trails-spring",
  },
  {
    title: "Behind the Fabric: Our Commitment to Sustainability",
    excerpt:
      "Take a look inside our supply chain and discover how we source recycled and organic materials to build clothing that lasts.",
    image: "/images/blog-3.jpg",
    date: "Jan 28, 2026",
    category: "Sustainability",
    href: "/journal/behind-the-fabric",
  },
]

export function JournalSection() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
      {/* Header */}
      <div className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3">
            From The Journal
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Stories & Guides
          </h2>
        </div>
        <Link
          href="/journal"
          className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:text-primary"
        >
          View All Posts
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Posts grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.title} href={post.href} className="group">
            {/* Image */}
            <div className="relative aspect-[3/2] overflow-hidden mb-5">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Meta */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground">{post.date}</span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary lg:text-2xl text-balance">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
              {post.excerpt}
            </p>

            {/* Read more */}
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors group-hover:text-primary">
              Read More
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
