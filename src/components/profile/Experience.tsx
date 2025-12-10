export const Experience = () => {
  const experiences = [
    {
      role: "Call Center Agent",
      organization: "iQor Philippines",
      year: "2021",
      description: "Contractual WFH employee assigned to Potpouri",
    },
    {
      role: "Call Center Agent",
      organization: "Concentrix",
      year: "2022",
      description: "Contractual onsite employee assigned to Handy",
    },
    {
      role: "Developer",
      organization: "Simple Dough",
      year: "2025",
      description: "A member of a school project - Created modern UI/UX designs and implemented them using React and Tailwind CSS, and formed the structured relational database using supabase",
    },
    {
      role: "Co-Author",
      year: "2025",
      description: "Co-Author of a school research project: Security Vulnerabilities in Public Wi-Fi Networks: An Experimental Analysis of Risk Exposure",
    },
    {
      role: "Participant",
      year: "2025",
      description: "Participated amongst my fellow students on attending the one-day Educational Tour held by Holy Cross of Davao college in Davao city",
    },
  ];

  const itSkills = [
    { skill: "Figma/Wireframing", level: 88 },
    { skill: "HTML & CSS", level: 88 },
    { skill: "JavaScript", level: 83 },
    { skill: "React.js", level: 85 },
    { skill: "React-Native", level: 82 },
    { skill: "GitHub", level: 89 },
    { skill: "SQL & NoSQL", level: 86 },
    { skill: "Cloud Basics", level: 85 },
    { skill: "Django", level: 82 },
    { skill: "Office Productivity Tools", level: 89 },
  ];

  return (
    <div className="animate-fade-in p-4 sm:p-6 lg:p-8">
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {/* Experience */}
        <div className="bg-card rounded-lg p-4 sm:p-6 border border-border">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-l-4 border-accent pl-4 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-bold text-foreground text-lg">{exp.role}</h3>
                <p className="text-muted-foreground font-medium">{exp.organization}</p>
                <p className="text-sm text-accent mt-1">{exp.year}</p>
                <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* IT Skills */}
        <div className="bg-background rounded-lg p-4 sm:p-6 border border-border">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">IT Skills</h2>
          <div className="space-y-6">
            {itSkills.map((item, index) => (
              <div
                key={item.skill}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground">{item.skill}</span>
                </div>
                <div className="h-3 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-portfolio-cool to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${item.level}%`,
                      animationDelay: `${index * 0.15}s`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
