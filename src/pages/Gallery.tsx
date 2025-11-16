import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: gallery1, alt: "Web development workspace" },
    { src: gallery2, alt: "Abstract design" },
    { src: gallery3, alt: "UI design mockups" },
    { src: gallery4, alt: "Programming books" },
    { src: gallery5, alt: "Team collaboration" },
    { src: gallery1, alt: "Web development workspace" },
    { src: gallery2, alt: "Abstract design" },
    { src: gallery3, alt: "UI design mockups" },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-4">Gallery</h1>
          <p className="text-xl text-muted-foreground">
            A collection of my work and inspirations
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-card rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
