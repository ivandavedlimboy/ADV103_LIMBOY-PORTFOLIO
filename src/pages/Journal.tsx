import { BookOpen } from "lucide-react";

const Journal = () => {
  const entries = [
    {
      date: "November 15, 2024",
      title: "Reflections on Learning React",
      content:
        "Today I've been diving deeper into React hooks and the component lifecycle. The more I learn, the more I appreciate the elegance of React's design patterns. Building this portfolio has been an incredible learning experience.",
    },
    {
      date: "November 10, 2024",
      title: "Design Philosophy",
      content:
        "I've been thinking a lot about design lately. The best interfaces are invisible - they simply work. My goal is to create experiences that feel natural and intuitive, where technology fades into the background.",
    },
    {
      date: "November 5, 2024",
      title: "Journey into Web Development",
      content:
        "Starting this journey in web development has been transformative. Every project teaches me something new, and every challenge makes me a better developer. The community is incredibly supportive, and I'm grateful for all the resources available.",
    },
    {
      date: "October 28, 2024",
      title: "The Power of Continuous Learning",
      content:
        "In tech, standing still means falling behind. I've committed to learning something new every day, whether it's a new framework, design pattern, or development tool. The journey never ends, and that's what makes it exciting.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-portfolio-warm-light to-card p-12 border-b border-border">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <BookOpen className="w-16 h-16 text-accent mx-auto mb-4" />
          <h1 className="text-5xl font-bold text-foreground mb-4">Journal</h1>
          <p className="text-xl text-muted-foreground italic">
            Thoughts, reflections, and learnings along the way
          </p>
        </div>
      </div>

      {/* Journal Entries */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="space-y-8">
          {entries.map((entry, index) => (
            <article
              key={index}
              className="bg-card rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-200 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <time className="text-sm text-accent font-medium">{entry.date}</time>
              <h2 className="text-2xl font-bold text-foreground mt-2 mb-4">
                {entry.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{entry.content}</p>
            </article>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-3 bg-muted rounded-full">
            <p className="text-sm text-muted-foreground italic">
              More entries coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
