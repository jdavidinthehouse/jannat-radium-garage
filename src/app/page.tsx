import Hero from "@/components/sections/hero"
import FeaturedProducts from "@/components/sections/featured-products"
import ProductCategories from "@/components/sections/product-categories"
import WhyChooseUs from "@/components/sections/why-choose-us"
import About from "@/components/sections/about"
import Contact from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <WhyChooseUs />
      <About />
      <Contact />
    </>
  )
}
