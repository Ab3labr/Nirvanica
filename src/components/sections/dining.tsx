import { Animated } from "@/components/Animated";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";

export default function Dining() {
  const diningImage = PlaceHolderImages.find((p) => p.id === "dining-main");

  return (
    <section id="dining" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Animated>
            <div className="space-y-8">
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-body text-primary">
                  Dine at <em className="font-headline">Nirvanica</em>
                </h2>
              </div>
              <div className="text-left">
                <p className="text-lg text-foreground/80">
                  Experience soulful dining, whether you crave a hearty Kerala
                  meal, continental classics, or a candlelight dinner with a view.
                </p>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="mt-8 border-primary text-primary bg-white hover:bg-primary hover:text-white transition-colors"
                >
                  <Link href="/book">Reserve a table</Link>
                </Button>
              </div>
            </div>
          </Animated>
          <Animated animation="scale-in" delay={200}>
            {diningImage && (
              <div className="relative h-[400px] md:h-[500px] w-full">
                <Image
                  src={diningImage.imageUrl}
                  alt={diningImage.description}
                  fill
                  className="object-cover rounded-lg shadow-xl"
                  data-ai-hint={diningImage.imageHint}
                />
              </div>
            )}
          </Animated>
        </div>
      </div>
    </section>
  );
}
