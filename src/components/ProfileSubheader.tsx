import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "personal", label: "Personal Info", path: "/profile/personal" },
  { id: "contact", label: "Contact Me", path: "/profile/contact" },
  { id: "education", label: "Education", path: "/profile/education" },
  { id: "awards", label: "Awards", path: "/profile/awards" },
  { id: "experience", label: "Experience", path: "/profile/experience" },
  { id: "certifications", label: "Certifications", path: "/profile/certifications" },
];

export const ProfileSubheader = () => {
  const location = useLocation();

  return (
    <div className="bg-background border-b border-border">
      <div className="flex items-end overflow-x-auto scrollbar-hide">
        {tabs.map((tab, index) => {
          const isActive = location.pathname === tab.path;

          return (
            <Link
              key={tab.id}
              to={tab.path}
              className={cn(
                "relative px-6 py-3 text-sm font-medium whitespace-nowrap transition-all duration-200",
                "border-r border-border",
                isActive
                  ? "bg-card text-foreground border-b-2 border-b-accent"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground",
                index === 0 && "rounded-tl-lg",
                "folder-tab"
              )}
              style={{
                clipPath: isActive
                  ? "polygon(0 0, calc(100% - 8px) 0, 100% 100%, 0 100%)"
                  : "polygon(0 0, calc(100% - 8px) 0, 100% 100%, 0 100%)",
              }}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
