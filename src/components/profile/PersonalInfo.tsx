export const PersonalInfo = () => {
  const personalDetails = [
    { label: "Name", value: "Ivan Dave D. Limboy" },
    { label: "Gender", value: "Male" },
    { label: "Age", value: "22" },
    { label: "Birthdate", value: "June 13, 2003" },
    { label: "Nationality", value: "Filipino" },
    { label: "Address", value: "Upper Madapo Hills, Purok 9-A, Brgy. 8-A, Bangkerohan, Davao City" },
  ];

  const traits = [
    "Analytical Thinker",
    "Detail-Oriented",
    "Quick Learner",
    "Team Player",
    "Problem Solver",
    "Creative",
    "Adaptable",
    "Self-Motivated",
  ];

  return (
    <div className="animate-fade-in p-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Personal Details */}
        <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">Personal Details</h2>
          <dl className="space-y-4">
            {personalDetails.map((detail) => (
              <div key={detail.label} className="flex flex-col">
                <dt className="text-sm font-medium text-muted-foreground mb-1">
                  {detail.label}
                </dt>
                <dd className="text-base text-foreground">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Traits & Characteristics */}
        <div className="bg-portfolio-warm-light rounded-lg p-6 shadow-sm border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">Traits & Characteristics</h2>
          <div className="flex flex-wrap gap-3">
            {traits.map((trait, index) => (
              <span
                key={trait}
                className="px-4 py-2 bg-card rounded-full text-sm font-medium text-foreground border border-border hover:bg-accent hover:text-accent-foreground transition-colors duration-200 animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
