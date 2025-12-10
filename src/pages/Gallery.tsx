import { useState } from "react";
import gallery1 from "@/assets/lobsel.jpg";
import gallery2 from "@/assets/lob3.jpeg";
import gallery10 from "@/assets/lobgp.jpeg";
import gallery28 from "@/assets/attendance.jpeg";

import gallery8 from "@/assets/bus.jpeg";
import gallery9 from "@/assets/busel.jpg";
import gallery29 from "@/assets/busend.jpeg";

import gallery11 from "@/assets/pldtbkg.jpeg";
import gallery12 from "@/assets/pldtv.jpeg";
import gallery13 from "@/assets/pldtsel.jpeg";
import gallery14 from "@/assets/pldtb.jpeg";
import gallery15 from "@/assets/pldtgp.jpeg";
import gallery16 from "@/assets/vitv.jpeg";
import gallery3 from "@/assets/vitv2.jpeg";

import gallery4 from "@/assets/vikgp1.jpeg";
import gallery5 from "@/assets/vikgp2.jpeg";
import gallery6 from "@/assets/vikbkg.jpeg";
import gallery7 from "@/assets/vikchef.jpeg";

import gallery17 from "@/assets/jaibldg.jpeg";
import gallery18 from "@/assets/jaipion.jpeg";
import gallery19 from "@/assets/jaidisc.jpeg";
import gallery20 from "@/assets/jaisel.jpeg";
import gallery21 from "@/assets/jaipc.jpeg";
import gallery22 from "@/assets/jaigp.jpeg";

import gallery23 from "@/assets/911trck.jpeg";
import gallery24 from "@/assets/911disc.jpeg";
import gallery25 from "@/assets/911tv.jpeg";
import gallery26 from "@/assets/911wartv.jpeg";
import gallery27 from "@/assets/911earth.jpeg";
import gallery30 from "@/assets/911bkg.jpeg";
import gallery31 from "@/assets/911cctv.jpeg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
  { src: gallery1, alt: "lobsel" },
  { src: gallery28, alt: "att" },
  { src: gallery2, alt: "lob3" },
  { src: gallery10, alt: "lob3" },

  { src: gallery29, alt: "bus" },
  { src: gallery8, alt: "bus" },
  { src: gallery9, alt: "bus" },

  { src: gallery11, alt: "pldt" },
  { src: gallery12, alt: "pldt" },
  { src: gallery16, alt: "pldt" },
  { src: gallery3, alt: "pldt" },
  { src: gallery14, alt: "pldt" },
  { src: gallery15, alt: "pldt" },
  { src: gallery13, alt: "pldt" },

  { src: gallery6, alt: "vik" },
  { src: gallery7, alt: "vik" },
  { src: gallery4, alt: "vik" },
  { src: gallery5, alt: "vik" },

  { src: gallery17, alt: "jai" },
  { src: gallery18, alt: "jai" },
  { src: gallery19, alt: "jai" },
  { src: gallery20, alt: "jai" },
  { src: gallery21, alt: "jai" },
  { src: gallery22, alt: "jai" },

  { src: gallery23, alt: "911" },
  { src: gallery24, alt: "911" },
  { src: gallery25, alt: "911" },
  { src: gallery26, alt: "911" },
  { src: gallery27, alt: "911" },
  { src: gallery31, alt: "911" },
  { src: gallery30, alt: "911" },
  
  ];

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">Gallery</h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
            A collection of photo captures from Davao Educational Tour
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
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
