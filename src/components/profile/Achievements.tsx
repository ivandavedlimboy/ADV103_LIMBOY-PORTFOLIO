import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const achievements = [
    {
      title: "Academic Excellence Award",
      year: "2023",
      description: "Awarded for maintaining outstanding academic performance throughout the year",
    },
    {
      title: "Dean's Lister",
      year: "2024",
      description: "Recognized for exemplary academic achievement with a GPA of 3.5 or higher",
    },
    {
      title: "Best in Research Presentation",
      year: "2024",
      description: "Awarded for exceptional research presentation skills and innovative project",
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  return (
    <div className="animate-fade-in p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Achievements</h2>

        <div className="relative bg-gradient-to-br from-portfolio-warm-light to-card rounded-lg p-8 shadow-lg border border-border">
          {/* Achievement Card */}
          <div className="text-center min-h-[280px] flex flex-col items-center justify-center">
            <Award className="w-16 h-16 text-accent mb-6 animate-scale-in" />
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {achievements[currentIndex].title}
            </h3>
            <p className="text-accent font-semibold text-lg mb-4">
              {achievements[currentIndex].year}
            </p>
            <p className="text-muted-foreground max-w-md">
              {achievements[currentIndex].description}
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-card hover:bg-secondary transition-colors border border-border"
              aria-label="Previous achievement"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
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

            <button
              onClick={next}
              className="p-2 rounded-full bg-card hover:bg-secondary transition-colors border border-border"
              aria-label="Next achievement"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
