
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dining() {
  const diningImage = PlaceHolderImages.find((p) => p.id === "dining-main");

  return (
    <section id="dining" className="py-24 sm:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="lg:order-last flex justify-center">
            {diningImage && (
              <div className="relative h-[400px] w-full sm:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={diningImage.imageUrl}
                  alt={diningImage.description}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  data-ai-hint={diningImage.imageHint}
                />
              </div>
            )}
          </div>
          <div className="lg:order-first space-y-6 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">
              Exquisite Dining
            </h2>
            <p className="text-lg text-foreground/80">
            Experience soulful dining, whether you crave a hearty Kerala meal, continental classics, or a candlelight dinner with a view.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href="#contact">Reserve a Table</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
