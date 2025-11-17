import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    {
      title: "React Developer Certification",
      issuer: "Meta",
      year: "2024",
      description: "Advanced React development including hooks, context, and performance optimization",
    },
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      year: "2023",
      description: "Comprehensive certification covering frontend and backend development",
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Google",
      year: "2023",
      description: "User interface and user experience design principles and best practices",
    },
    {
      title: "Cloud Computing Essentials",
      issuer: "AWS",
      year: "2024",
      description: "Fundamentals of cloud computing and AWS services",
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  return (
    <div className="animate-fade-in p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">Certifications</h2>

        <div className="relative">
          {/* Main Certificate Display */}
          <div className="bg-gradient-to-br from-card to-portfolio-warm-light rounded-lg p-6 sm:p-8 lg:p-10 shadow-xl border-2 border-accent/20 min-h-[280px] sm:min-h-[320px] flex flex-col justify-center">
            <div className="text-center">
              <Award className="w-16 h-16 sm:w-20 sm:h-20 text-accent mb-4 sm:mb-6 mx-auto animate-scale-in" />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                {certifications[currentIndex].title}
              </h3>
              <p className="text-lg sm:text-xl text-accent font-semibold mb-2">
                {certifications[currentIndex].issuer}
              </p>
              <p className="text-sm sm:text-base text-muted-foreground font-medium mb-4">
                {certifications[currentIndex].year}
              </p>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
                {certifications[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 border border-border shadow-sm"
              aria-label="Previous certification"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-accent w-8 h-3 rounded-full"
                      : "bg-muted hover:bg-muted-foreground w-3 h-3 rounded-full"
                  }`}
                  aria-label={`Go to certification ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-200 border border-border shadow-sm"
              aria-label="Next certification"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
