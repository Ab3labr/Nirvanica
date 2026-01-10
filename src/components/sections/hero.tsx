import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-background");

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full pt-20">
        <div className="flex flex-col items-center space-y-6 px-4">
          <h1
            className={cn(
              "text-5xl md:text-7xl font-bold tracking-tight text-shadow-lg",
              "font-vogue"
            )}
          >
            Nirvanica Retreat
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-background/90 text-shadow">
            Discover the perfect harmony of nature and comfort at Nirvanica — an
            escape into the lush landscapes of Wayanad.
          </p>
          <div className="pt-12">
            <Button
              asChild
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm font-medium px-8 py-6 text-lg rounded-full"
            >
              <Link href="#about">Explore Nirvanica</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/80" />
        </div>
      </div>
    </section>
  );
}
