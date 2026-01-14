import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Animated } from "@/components/Animated";

export default function Gallery() {
  const galleryImages = PlaceHolderImages.filter((p) =>
    p.id.startsWith("gallery-")
  );

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Animated className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-body text-primary">
            A visual journey <br />
            <em className="font-headline"> of Nirvanica</em>
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-foreground/80">
            A glimpse into the serene beauty and understated luxury of
            Nirvanica.
          </p>
        </Animated>
        <Animated animation="fade-in" delay={200}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {galleryImages.map((img) => (
                <CarouselItem key={img.id} className="md:basis-1/2">
                  <div className="p-1">
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={img.imageUrl}
                        alt={img.description}
                        fill
                        className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={img.imageHint}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </Animated>
      </div>
    </section>
  );
}
