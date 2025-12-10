export const PersonalInfo = () => {
  const personalDetails = [
    { label: "Name", value: "Ivan Dave D. Limboy" },
    { label: "Gender", value: "Male" },
    { label: "Age", value: "22" },
    { label: "Birthdate", value: "June 13, 2003" },
    { label: "Nationality", value: "Filipino" },
    { label: "Address", value: "Upper Madapo Hills, Bankerohan" },
    { label: "Street", value: "Brgy. 8-A, Purok 9-A" },
    { label: "City", value: "Davao City" },
    { label: "Zip code", value: "8000" },
    { label: "Country", value: "Philippines" },
  ];

    const traits = [
    "Stout",
    "Towering",
    "Tubby",
    "Aloof",
    "yet Affable",
    "Soft Spoken",
    "Reserved",
    "Honest",
    "Humble",
    "Patient"
  ];

  const characteristics = [
    "Analytical Thinker",
    "Detail-Oriented",
    "Meticulous",
    "Organized",
    "Team Player",
    "Responsible",
    "Problem Solver",
    "Creative",
    "Goal-oriented",
    "Self-Motivated",
  ];
  
  return (
    <div className="animate-fade-in p-4 sm:p-6 lg:p-8">
      {/* Inner container with border */}
      <div className="border border-border rounded-lg p-0 overflow-hidden bg-portfolio-warm-light shadow-inner p-0.5"
      style={{ boxShadow: "inset 0 2px 6px rgba(0, 0, 0, 0.20)"}}>
        <div className="flex flex-col md:flex-row">
          {/* Personal Details - Left Side */}
          <div className="md:w-1/2 bg-card rounded-lg p-4 sm:p-6 shadow-lg border border-border">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Personal Details</h2>
            <dl className="space-y-4">
              {personalDetails.map((detail) => (
                <div key={detail.label} className="flex items-center gap-4">
                  <dt className="text-sm font-medium text-muted-foreground">
                    {detail.label}
                  </dt>
                  <dd className="text-base text-foreground hover:font-semibold hover:text-accent transition-all">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Traits & Characteristics - Right Side */}
          <div className="md:w-1/2 bg-transparent rounded-lg p-4 sm:p-6">
          {/* Traits */}
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
            Traits
          </h2>
          <div className="flex flex-wrap gap-3 mb-6">
            {traits.map((trait, index) => (
              <span
                key={trait}
                className="px-4 py-2 bg-card rounded-full text-sm font-medium text-foreground border border-border hover:bg-accent/85 hover:text-accent-foreground transition-colors duration-200 animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {trait}
              </span>
            ))}
          </div>

          {/* Characteristics */}
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
            Characteristics
          </h2>
          <div className="flex flex-wrap gap-3">
            {characteristics.map((trait, index) => (
              <span
                key={trait}
                className="px-4 py-2 bg-card rounded-full text-sm font-medium text-foreground border border-border hover:bg-accent/85 hover:text-accent-foreground transition-colors duration-200 animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
