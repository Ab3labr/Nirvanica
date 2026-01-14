import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experiences from "@/components/sections/experiences";
import Gallery from "@/components/sections/gallery";
import VideoSection from "@/components/sections/video-section";
import Dining from "@/components/sections/dining";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <VideoSection />
        <Experiences />
        <Dining />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
