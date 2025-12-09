import { ProfileSubheader } from "@/components/ProfileSubheader";
import { PersonalInfo } from "@/components/profile/PersonalInfo";
import { Contacts } from "@/components/profile/Contacts";
import { Education } from "@/components/profile/Education";
import { Achievements } from "@/components/profile/Achievements";
import { Experience } from "@/components/profile/Experience";
import { Certifications } from "@/components/profile/Certifications";
import profilePhoto from "@/assets/PROFILE.jpg";


const ProfileHero = () => {
  return (
    <div className="bg-gradient-to-br from-portfolio-warm-light via-background to-card p-4 sm:p-8 lg:p-12 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-portfolio-cool rounded-full animate-pulse opacity-20"></div>
              <img
                src={profilePhoto}
                alt="Ivan Dave Limboy"
                className="relative w-full h-full rounded-full object-cover border-4 border-card shadow-2xl animate-scale-in"
              />
            </div>
          </div>

          {/* Title Section */}
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-3 sm:mb-4 tracking-tight">
              MY PORTFOLIO
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground italic font-light">
              Ex ignoto audere melius quam ignarus manere.
            </p>
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
              <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                Aspirant
              </span>
              <span className="px-4 py-2 bg-portfolio-warm text-foreground rounded-full text-sm font-medium">
                UI/UX Designer
              </span>
              <span className="px-4 py-2 bg-card border border-border text-foreground rounded-full text-sm font-medium">
                IT Student
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="min-h-full bg-background">
      <ProfileHero />
      <ProfileSubheader />
      <div className="bg-card">
        {/* All sections displayed continuously with IDs for anchor linking */}
        <section id="personal" className="scroll-mt-16">
          <PersonalInfo />
        </section>
        
        <section id="contact" className="scroll-mt-16">
          <Contacts />
        </section>
        
        <section id="education" className="scroll-mt-16">
          <Education />
        </section>
        
        <section id="awards" className="scroll-mt-16">
          <Achievements />
        </section>
        
        <section id="experience" className="scroll-mt-16">
          <Experience />
        </section>
        
        <section id="certifications" className="scroll-mt-16">
          <Certifications />
        </section>
      </div>
    </div>
  );
};

export default Profile;
