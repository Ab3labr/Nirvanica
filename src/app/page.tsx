import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experiences from "@/components/sections/experiences";
import Dining from "@/components/sections/dining";
import Gallery from "@/components/sections/gallery";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experiences />
        <Dining />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
