import { Animated } from "@/components/Animated";

export default function VideoSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Animated animation="scale-in" className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="https://i.ibb.co/KpwfhTXv/firosnv-photography-fu-Esz-HF4uf-A-unsplash.jpg"
            >
              <source
                src="https://pub-e2b30b0395e3468a926e3f69e84708e4.r2.dev/1018.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </Animated>
      </div>
    </section>
  );
}
