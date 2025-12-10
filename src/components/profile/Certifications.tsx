import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import cert1 from "@/assets/certdvoet.jpg";
import cert2 from "@/assets/certchumm.jpg";

export const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    {
      title: "CERTIFICATE OF COMPLETION",
      issuer: "HCDC",
      year: "2025",
      description: "Davao Educational Tour",
      image: cert1,
    },
    {
      title: "CC105",
      issuer: "N/A",
      year: "2025",
      description: "Codechum",
      image: cert2,
    },
    {
      title: "CERTIFICATE OF COMPLETION",
      issuer: "PLDT",
      year: "2025",
      description: "Davao Educational Tour Participant",
    },
    {
      title: "CERTIFICATE OF COMPLETION",
      issuer: "PLDT",
      year: "2025",
      description: "Davao Educational Tour Participant - Philippine Long Distance Telephone Company",
    },
    {
      title:
        "CERTIFICATE OF COMPLETION",
      issuer: "VITRO",
      year: "2025",
      description: "Davao Educational Tour Participant - Philippine Long Distance Telephone Company: Vitro",
    },
    {
      title: "CERTIFICATE OF COMPLETION",
      issuer: "JAIROSOFT",
      year: "2025",
      description: "Davao Educational Tour Participant - Jairososft",
    },
    {
      title: "CERTIFICATE OF COMPLETION",
      issuer: "DCCCERC",
      year: "2025",
      description:
        "Davao Educational Tour Participant - Davao City Central Communications and Emergency Response Center",
    },
  ];

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % certifications.length);

  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + certifications.length) % certifications.length
    );

  return (
    <div className="animate-fade-in p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">
          Certifications
        </h2>

        <div className="relative bg-gradient-to-br from-portfolio-warm-light to-card rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg border border-border">

          {/* Image/Card + Navigation Arrows */}
          <div className="relative w-full h-[280px] sm:h-[400px] flex items-center justify-center">

            {/* Previous Arrow */}
            <button
              onClick={prev}
              className="absolute left-2 sm:left-4 p-2 rounded-full bg-card hover:bg-secondary transition-colors border border-border z-10"
              aria-label="Previous certification"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>

            {/* Card Display */}
            <div className="w-full h-full flex flex-col items-center justify-center">
              {certifications[currentIndex].image ? (
                <div className="w-full h-full overflow-hidden rounded-lg">
                  <img
                    src={certifications[currentIndex].image}
                    alt={certifications[currentIndex].title}
                    className="w-full h-full object-cover rounded-lg object-center"
                  />
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <Award className="w-12 h-12 sm:w-16 sm:h-16 text-accent mb-4 sm:mb-6 animate-scale-in" />

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    {certifications[currentIndex].title}
                  </h3>

                  <p className="text-accent font-semibold text-base sm:text-lg mb-1">
                    {certifications[currentIndex].issuer}
                  </p>

                  <p className="text-sm sm:text-base text-muted-foreground font-medium mb-4">
                    {certifications[currentIndex].year}
                  </p>

                  <p className="text-sm sm:text-base text-muted-foreground max-w-md px-4">
                    {certifications[currentIndex].description}
                  </p>
                </div>
              )}
            </div>

            {/* Next Arrow */}
            <button
              onClick={next}
              className="absolute right-2 sm:right-4 p-2 rounded-full bg-card hover:bg-secondary transition-colors border border-border z-10"
              aria-label="Next certification"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-accent w-6"
                    : "bg-muted hover:bg-muted-foreground"
                }`}
                aria-label={`Go to certification ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
