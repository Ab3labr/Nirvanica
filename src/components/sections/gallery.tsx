
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Gallery() {
  const galleryImages = PlaceHolderImages.filter((p) =>
    p.id.startsWith("gallery-")
  );

  const getImageDimensions = (imageUrl: string) => {
    try {
      const url = new URL(imageUrl);
      if (url.hostname === 'images.unsplash.com') {
        const width = parseInt(url.searchParams.get('w') || '1080', 10);
        // Unsplash aspect ratio is often not in the URL, so we'll just use a common one or calculate from a fixed height
        return { width, height: Math.round(width * 0.75) };
      }
      
      const parts = url.pathname.split('/');
      const height = parseInt(parts.pop() || '400', 10);
      const width = parseInt(parts.pop() || '600', 10);

      if (isNaN(width) || isNaN(height)) {
        return { width: 600, height: 400 };
      }
      
      return { width, height };
    } catch {
      return { width: 600, height: 400 };
    }
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Visual Journey
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-foreground/80">
            A glimpse into the serene beauty and understated luxury of
            Nirvanica.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {galleryImages.map((img, index) => {
             const { width, height } = getImageDimensions(img.imageUrl);
             const rowSpan = height > width ? 'row-span-2' : '';
             const colSpan = width > height ? 'md:col-span-2' : '';

            return (
              <div
                key={img.id}
                className={`relative rounded-lg overflow-hidden shadow-lg group ${rowSpan} ${colSpan}`}
              >
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  width={width}
                  height={height}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={img.imageHint}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {img.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
