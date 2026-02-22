import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedCollections } from "@/components/featured-collections"
import { ShopByActivity } from "@/components/shop-by-activity"
import { BestSellers } from "@/components/best-sellers"
import { BrandStory } from "@/components/brand-story"
import { Newsletter } from "@/components/newsletter"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturedCollections />
        <ShopByActivity />
        <BestSellers />
        <BrandStory />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  )
}
