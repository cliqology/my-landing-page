import Hero from "@/components/sections/Hero";
import FeaturedTools from "@/components/sections/FeaturedTools";
import FeaturedExperiments from "@/components/sections/FeaturedExperiments";
import AboutPreview from "@/components/sections/AboutPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedTools />
      <FeaturedExperiments />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}
