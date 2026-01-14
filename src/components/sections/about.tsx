
import { Animated } from "@/components/Animated";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Animated className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-body text-primary">
            Welcome to <br />
            <em className="font-headline">Your Private Escape</em>
          </h2>
          <div className="mt-6 space-y-6 text-lg text-foreground/80">
            <p>
              At Nirvanica, we believe true luxury is tranquility. Our exclusive
              property comprises twelve appointed rooms, each framing
              breathtaking views of the forest canopy and the serene Banasura
              Dam.
            </p>
            <p>
              For an unparalleled private escape, our exclusive pool suite
              provides a sanctuary of seclusion and indulgence with its own
              private pool. Every element at Nirvanica is curated to help you
              reconnect with yourself and the profound beauty of nature.
            </p>
          </div>
        </Animated>
      </div>
    </section>
  );
}
