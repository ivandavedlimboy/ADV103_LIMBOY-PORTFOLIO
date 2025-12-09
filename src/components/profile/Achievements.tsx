import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import gallery1 from "@/assets/a1.jpeg";
import gallery2 from "@/assets/a2.jpg";
import gallery3 from "@/assets/a3.jpg";
import gallery4 from "@/assets/a4.jpg";
import gallery5 from "@/assets/a5.jpg";
import gallery6 from "@/assets/a6.jpg";
import gallery7 from "@/assets/a7.jpg";

export const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const achievements = [
    { title: "N/A", year: "N/A", description: "N/A", image: gallery2 },
    { title: "N/A", year: "N/A", description: "N/A", image: gallery1 },
    { title: "N/A", year: "N/A", description: "N/A", image: gallery5 },
    { title: "N/A", year: "N/A", description: "N/A", image: gallery6 },
    { title: "N/A", year: "N/A", description: "N/A", image: gallery4 },
    { title: "N/A", year: "N/A", description: "N/A", image: gallery7 },
    { title: "N/A", year: "N/A", description: "N/A", image: gallery3 },
    { title: "Dean’s Listerns ", year: "2024", description: "Bachelor of Science Major in Information Technology    - Fisrt year", image: null },
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % achievements.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);

  return (
    <div className="animate-fade-in p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">
          Achievements
        </h2>

        <div className="relative bg-gradient-to-br from-portfolio-warm-light to-card rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg border border-border">

          {/* Image/Card + Navigation Arrows */}
          <div className="relative w-full h-[360px] sm:h-[420px] flex items-center justify-center">

            {/* Previous Arrow */}
            <button
              onClick={prev}
              className="absolute left-2 sm:left-4 p-2 rounded-full bg-card hover:bg-secondary transition-colors border border-border z-10"
              aria-label="Previous achievement"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>

            {/* Achievement Card */}
            <div className="w-full h-full flex flex-col items-center justify-center">
              {achievements[currentIndex].image ? (
                <div className="w-full h-full overflow-hidden rounded-lg">
                  <img
                    src={achievements[currentIndex].image}
                    alt={achievements[currentIndex].title}
                    className="w-full h-full object-cover object-center rounded-lg"
                  />
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <Award className="w-12 h-12 sm:w-16 sm:h-16 text-accent mb-4 sm:mb-6 animate-scale-in" />
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    {achievements[currentIndex].title}
                  </h3>
                  <p className="text-accent font-semibold text-base sm:text-lg mb-1">
                    {achievements[currentIndex].year}
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground max-w-md px-4">
                    {achievements[currentIndex].description}
                  </p>
                </div>
              )}
            </div>

            {/* Next Arrow */}
            <button
              onClick={next}
              className="absolute right-2 sm:right-4 p-2 rounded-full bg-card hover:bg-secondary transition-colors border border-border z-10"
              aria-label="Next achievement"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-accent w-6"
                    : "bg-muted hover:bg-muted-foreground"
                }`}
                aria-label={`Go to achievement ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
