import Image from "next/image"
import Link from "next/link"

const activities = [
  {
    title: "Hike",
    image: "/images/activity-hike.jpg",
    href: "/collections/hike",
  },
  {
    title: "Urban",
    image: "/images/activity-urban.jpg",
    href: "/collections/urban",
  },
  {
    title: "Camp",
    image: "/images/activity-camp.jpg",
    href: "/collections/camp",
  },
  {
    title: "Snow",
    image: "/images/activity-snow.jpg",
    href: "/collections/snow",
  },
]

export function ShopByActivity() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3">
            Your Next Adventure
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Shop By Activity
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {activities.map((activity) => (
            <Link
              key={activity.title}
              href={activity.href}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-foreground/20 transition-all duration-500 group-hover:bg-foreground/40" />
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="font-serif text-2xl font-bold text-background lg:text-3xl">
                  {activity.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
