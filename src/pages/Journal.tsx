import { useState } from "react";
import J911 from "@/assets/Journal911.jpeg";
import PLDT from "@/assets/JournalPLDT.jpeg";
import VITRO from "@/assets/JournalVitro.jpeg";
import JAIRO from "@/assets/JournalJairosoft.jpeg";

interface JournalEntry {
  id: string;
  title: string;
  date: string;
  content: React.ReactNode;
}

const Journal = () => {
  const [selectedJournal, setSelectedJournal] = useState<string | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null); // fixed missing state

  const journals: JournalEntry[] = [
    {
      id: "pldt",
      title: "PLDT INC",
      date: "November 14, 2025",
      content: (
        <div className="space-y-6">
          <img
            src={PLDT}
            alt="PLDT Visit"
            onClick={() => setModalImage(PLDT)}
            className="float-right w-1/2 ml-6 mb-4 rounded-lg shadow-md object-cover cursor-pointer hover:opacity-90 transition"
          />
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              PLDT is a well known name, the first thing that comes to everyone's mind when we talk about Internet service providers. 
              A prominent figure of their industry among its competitors like globe and converge and many more, given their claim with their motto of #1. 
              We can also observe the growth that it took, starting from the Philippine Long Distance Telephone provider hence the coined name, Philippine Long Distance Telephone
              derivative from the company’s original purpose when it was founded in 1928. Now it has become a wide diversified conglomerate, encompassing Utilities, Media,
              Infrastructure, Healthcare fields in their entire enterprise, encompassing a wide range of services they offer.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              The Philippines is behind in technological advancements. What most people believe to be the case, however it was mentioned that it was not the case said the pldt.
              Explaining the reason for the observed poor connectivity is due to the shared Digital Subscriber Line (DSL) of the users being congested with data usage,
              as explained in the traffic analogy, when the road becomes jammed when too many vehicles try to pass at once. his congestion limits the available bandwidth for each user,
              resulting in slower internet speeds despite the underlying infrastructure being capable of higher performance. Apart from DSL, PLDT offers ISA (Individual Service Access or Integrated Services Access),
              a private line not affected from the mentioned congestion as they are a private line.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              This enterprise mostly hires IT staff for networking roles and is widely regarded as the most recommended destination if you opt to pursue the networking path in your future’s job aspiration.
              However, aside from networking, they also offer opportunities in software development within their enterprise, particularly in Multisys.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "vitro",
      title: "VITRO",
      date: "November 14, 2025",
      content: (
        <div className="space-y-6">
          <img
            src={VITRO}
            alt="PLDT Visit"
            onClick={() => setModalImage(VITRO)}
            className="float-right w-1/2 ml-6 mb-4 rounded-lg shadow-md object-cover cursor-pointer hover:opacity-90 transition"
          />
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              VITRO is the data center subsidiary of PLDT, offering several services including colocation, networking and connectivity, disaster and recovery seats and remote hands.
              The basic components used for their service are cooling system, power management system, racks, security system, environmental monitoring system, which they provide.
              Clients, however, must supply their own servers, storage systems, and networking equipment. VITRO operates and maintains PLDT’s data center infrastructure, providing secure,
              reliable, and scalable services to business and corporate clients. It also serves as the central data center in the Philippines, through which all data passes and which supports
              connectivity for most ISPs in the country in addition to PLDT.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              The VITRO building was formerly the Innov Lab, which was converted into a data center during the pandemic. VITRO data centers have a combined total capacity of 28 megawatts,
              not including the main branch in Sta. Rosa. In this educational tour, we were given the opportunity to tour inside their facility. We were able to observe the layout of their racks
              arrayed in line, with the hot side on the outside while the cool side is side by side in between two arrays trapping the temperature inside, maintaining the ideal 19 - 27 degrees temperature.
              As we enter this section we can feel the cool air rising from the bottom, through the vents where the electricals are also placed. The electronics are also color-coded, the part with blue insulator
              is their primary, and opposite to it is the part where the secondary for back up with the blue insulator is placed. While the electronics are placed below the data cables are connected at the top of the racks,
              securely covered with vent covers. We were also able to see their USPS in both of module 1 and 2.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              VITRO is a good place for networking careers, offering practical experience with enterprise systems and network management. Certifications such as CCNA, CompTIA Network+, and CDCP are required.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "jairosoft",
      title: "Jairosoft",
      date: "November 14, 2025",
      content: (
        <div className="space-y-6">
          <img
            src={JAIRO}
            alt="PLDT Visit"
            onClick={() => setModalImage(JAIRO)}
            className="float-right w-1/2 ml-6 mb-4 rounded-lg shadow-md object-cover cursor-pointer hover:opacity-90 transition"
          />
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Jairosoft is an AI first IT services company. A company that does not discourage the use of AI technology, instead they are AI pro, allowing the IT staffs to utilize the AI and make it serve as an aid to their work,
              as what it was designed to do. Only keep in mind that AI are but tools to utilize and must learn to use it accordingly. It is still paramount to conduct the flow of your own current, yourself and delineate every process
              to what you envision. To achieve this it is mandatory to have a tight grasp of the basics to have a clear understanding of every step you take, and be a better overseer of your project. 
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              This particularly piqued my interest given I also use AI assistance for my activities and projects. I feel relieved that my methods are not stunting my growth, although admittedly my progress might be considered to be tad slow,
              I can still see movement. As long as I use it safely and wisely, and use it as a means of assistance and not as some sort of generator, there is confidence that I am able to learn, and improve. With diligent learning and practice
              I can succeed. I must and will try to
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              They offer training, including but not limited to helping new users on how to properly use bubble ai, a no code software development, allowing the developers to structure the projects UI and UX, configuring components through a figma-like procedure.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Jairosoft has a clear vision of the future, not only are they AI pro, which what most predicts to be the future of the industry, they are also ever ready to make turns to every shift of the trend line, for they implement agile methodologies.
              They have agile teams and use agile tools which works best in today's time,  to keep up with the ever changing and fast pacing industry. In comparison to the traditional waterfall method, where every step is sequential but secluded to itself,
              and every step must wait for the budget procedures and such, it would consume time, and also not amendable to changes. Agile methods is able to provide deliverables promptly, notwithstanding the quality, whilst ensuring the satisfaction of the client is met,
              and amendable for changes if needed be.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "davao-911",
      title: "Davao City Central Communications and Emergency Response Center",
      date: "November 14, 2025",
      content: (
        <div className="space-y-6">
          <img
            src={J911}
            alt="PLDT Visit"
            onClick={() => setModalImage(J911)}
            className="float-right w-1/2 ml-6 mb-4 rounded-lg shadow-md object-cover cursor-pointer hover:opacity-90 transition"
          />
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              The Davao City Central Communications and Emergency Response Center is an integral importance of the safety of our city. Dvao city is the only city that uses this hotline, 911, apart from the USA and CANADA. Taking pride in such honor they have covered the surveillance
              of every disaster that may come, not only do they monitor the streets and the main road, they also administer seismological  and astronomical monitoring, through various websites such as windy.net, hazard hunter, and pagasa.dost. The Eagle is what they call this Operation Center,
              Inside is a wide screen to display the footage of their live cameras. This “Local PAG-ASA” has a river monitoring system, with the cameras installed to watch out from floodings and has set the color coded margin to track the water level. They have a coastal area monitoring system,
              to watch out from tsunamis. Their cameras are sim-to-sim, wireless and have floodlights, they have 5 satellite stations, they have command and communication vehicles capable of operating what the main center could, and various vehicles ready for deployment when needed each for its dedicated purpose, with around 40 personnel on the list.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I have learned the great importance of surveillance and operating systems, and their vital roles in preemptive safety and security measures. They have shown us a neat and well organized website that their company made, that tracks down the emergency records which suits well with the procedures that they practice.
              The website records the calls in emergency by type and has appropriate response buttons for handling it, like deploying the nearest available emergency vehicle available. The website was clean, intuitive and well functioning, which piqued my interest in pursuing a similar idea for a possible capstone project,
              particularly in terms of its relevance and impact, academic rigor, and creativity and innovation.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const handleJournalClick = (id: string) => {
    setSelectedJournal(selectedJournal === id ? null : id);
  };

  const selectedEntry = journals.find((j) => j.id === selectedJournal);

  return (
    <div className="h-full bg-background flex flex-col overflow-hidden transition-colors duration-300 ease-in-out">
      {/* Header */}
      <div className="bg-background py-6 px-6 flex-shrink-0 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-1 sm:mb-3">
          Journal
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground italic">
          Thoughts, Learnings, and Reflections
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden gap-4 px-4 pt-4 pb-1">
        {/* Journal List */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            selectedJournal
              ? "md:w-1/4 h-20 md:h-full overflow-y-auto"
              : "w-full h-full overflow-y-auto"
          } bg-background [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
        >
          <div className="p-4 space-y-3">
            {journals.map((journal) => (
              <button
                key={journal.id}
                onClick={() => handleJournalClick(journal.id)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                  selectedJournal === journal.id
                    ? "bg-primary/10 border-2 border-primary shadow-md"
                    : "bg-card hover:bg-card/80 border-2 border-border/50 shadow-sm"
                }`}
              >
                <h3 className="font-semibold text-foreground truncate mb-1">
                  {journal.title}
                </h3>
                <p className="text-sm text-accent">{journal.date}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Content Container */}
        {selectedJournal && selectedEntry && (
          <div className="flex-1 bg-card rounded-xl shadow-lg overflow-y-auto py-3">
            <div className="px-8 max-w-3xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2 lg:mt-12 md:mt-6">
                  {selectedEntry.title}
                </h2>
                <time className="text-sm text-accent font-medium">
                  {selectedEntry.date}
                </time>
              </div>
              <div className="prose prose-lg max-w-none">{selectedEntry.content}</div>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setModalImage(null)}
              className="absolute -top-12 right-0 text-white text-6xl font-bold hover:opacity-80"
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Expanded view"
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Journal;
