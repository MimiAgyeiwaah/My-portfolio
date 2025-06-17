// import { profilePicture } from '../../public/assets'
import { hardSkills } from "../constants";
import { useEffect, useRef, useState } from "react";

function About() {
  const [activeSection, setActiveSection] = useState<string>("journey");
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRefs = {
    journey: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    tools: useRef<HTMLDivElement>(null),
    process: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const toolkit = [
    "/assets/Toolkit/Figma.svg",
    "/assets/Toolkit/Photoshop.svg",
    "/assets/Toolkit/Canva.svg",
    "/assets/Toolkit/Sketch.svg",
    "/assets/Toolkit/Mobbin.svg",
    "/assets/Toolkit/Notion.svg",
    "/assets/Toolkit/Slack.svg",
    "/assets/Toolkit/Trello.svg",
    "/assets/Toolkit/HTML5.svg",
    "/assets/Toolkit/CSS3.svg",
    "/assets/Toolkit/JavaScript.svg",
  ];

  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs[sectionId as keyof typeof sectionRefs].current;
    if (section) {
      if (sectionId === "journey") {
        contentRef.current?.scrollTo({
          top: section.offsetTop - 360,
          behavior: "smooth",
        });
      } else {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
      }

      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = (contentRef.current?.scrollTop || 0) + 150; // Offset for better UX

      // Check which section is in view
      Object.entries(sectionRefs).forEach(([sectionId, ref]) => {
        const section = ref.current;
        if (section) {
          const { offsetTop, offsetHeight } = section;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    contentRef.current?.addEventListener("resize", handleScroll);
    contentRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      contentRef.current?.removeEventListener("resize", handleScroll);
      contentRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, sectionRefs]);

  return (
    <div className="w-full h-[calc(100dvh-100px)] flex flex-col px-[0.5rem] sm:px-[1rem] md:px-[5rem] xl:px-[10rem] bg-white">
      <section className="w-full h-full flex min-[1001px]:flex-row flex-col gap-[2rem] min-[1714px]:gap-[4rem] items-start px-[1rem] min-[1001px]:pt-[4rem] min-[1714px]:px-[10rem]">
        <div className="min-w-full min-[1001px]:min-w-[400px] min-[1714px]:min-w-[500px] min-[700px]:gap-[2rem] min-[1001px]:min-h-[400px] flex flex-col items-start justify-between">
          <ul className="flex sm:flex-col sm:w-auto w-[90dvw] overflow-x-auto gap-6 sm:gap-4 sm:text-black text-gray-500 text-nowrap">
            <li
              onClick={() => scrollToSection("journey")}
              className={`cursor-pointer transition-all duration-300 hover:text-primary hover:font-semibold ${
                activeSection === "journey" ? "text-primary font-semibold" : ""
              }`}
            >
              My Journey
            </li>
            <li
              onClick={() => scrollToSection("skills")}
              className={`cursor-pointer transition-all duration-300 hover:text-primary hover:font-semibold ${
                activeSection === "skills" ? "text-primary font-semibold" : ""
              }`}
            >
              Skills & Expertise
            </li>
            <li
              onClick={() => scrollToSection("tools")}
              className={`cursor-pointer transition-all duration-300 hover:text-primary hover:font-semibold ${
                activeSection === "tools" ? "text-primary font-semibold" : ""
              }`}
            >
              Tools & Software
            </li>
            <li
              onClick={() => scrollToSection("process")}
              className={`cursor-pointer transition-all duration-300 hover:text-primary hover:font-semibold ${
                activeSection === "process" ? "text-primary font-semibold" : ""
              }`}
            >
              Design Process
            </li>
            <li
              onClick={() => scrollToSection("services")}
              className={`cursor-pointer transition-all duration-300 hover:text-primary hover:font-semibold ${
                activeSection === "services" ? "text-primary font-semibold" : ""
              }`}
            >
              Services
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className={`cursor-pointer transition-all duration-300 hover:text-primary hover:font-semibold ${
                activeSection === "contact" ? "text-primary font-semibold" : ""
              }`}
            >
              Contact & Social media platforms
            </li>
          </ul>
        </div>
        <div
          ref={contentRef}
          className="w-full flex-1 overflow-y-auto h-full flex flex-col items-start gap-8 transition-all duration-300"
        >
          <section className="w-full flex min-[470px]:flex-row flex-col items-center gap-5">
            <div className="w-full min-[400px]:w-[319px] h-[180px] rounded-3xl relative overflow-hidden flex items-center justify-center">
              <img
                src={"assets/profilePicture.svg"}
                alt=""
                className="w-full object-contain absolute top-0 left-0 "
              />
            </div>
            <span className="text-[40px] font-[200] w-[200px] leading-[50px] min-[470px]:text-left text-center">
              Miriam <span className="font-[600]">Agyeiwaah Asante</span>
            </span>
          </section>
          <div ref={sectionRefs.journey}>
            <p>
              My journey as a UI/UX & Graphic Designer started with a passion
              for creativity and problem-solving. Guided into the tech space, I
              embraced design, turning ideas into intuitive experiences.
            </p>
            <p>
              My design ethos is based on the idea that each and every pixel
              counts. Every choice, from the placement of a button that directs
              a user's journey to the color selection that conjures a particular
              emotion, is deliberate. Design is not just what it looks like;
              it's about how it works.
            </p>
            <p>
              My goal is to provide users with an experience they didn't realize
              they were craving. Come along with me as I transform everyday
              events into remarkable designs. Not only should we design, but
              also mold experiences, arouse feelings, and above all design
              dreams.
            </p>
          </div>

          {/* What I Bring to the Table .... */}
          <br />
          <div
            ref={sectionRefs.skills}
            className="flex flex-col items-start gap-1"
          >
            <b className="text-[28px]">What I Bring to the Table</b>
            <hr className="w-2/5 border-2 border-primary" />
          </div>
          <section className="w-full flex items-center gap-5 flex-wrap">
            {hardSkills.map((skill, idx) => (
              <div
                key={idx}
                className="w-fit sm:text-base text-sm px-4 py-2 flex items-center justify-center rounded-[3rem] bg-white border border-primary-foreground"
              >
                {skill}
              </div>
            ))}
          </section>

          {/* Soft Skills .... */}
          <br />
          <div className="flex flex-col items-start gap-1">
            <b className="text-[28px]">Soft Skills</b>
            <hr className="w-3/5 border-2 border-primary" />
          </div>
          <section className="w-full flex items-center gap-5 flex-wrap">
            {hardSkills.slice(6).map((skill, idx) => (
              <div
                key={idx}
                className="w-fit sm:text-base text-sm px-4 py-2 flex items-center justify-center rounded-[3rem] bg-white border border-primary-foreground"
              >
                {skill}
              </div>
            ))}
          </section>

          {/* Toolkit */}
          <br />
          <div
            ref={sectionRefs.tools}
            className="flex flex-col items-start gap-1"
          >
            <b className="text-[28px]">My Creative Toolkit</b>
            <hr className="w-3/5 border-2 border-primary" />
          </div>
          <section className="w-full flex items-center gap-5 flex-wrap">
            {toolkit.map((tool, index) => {
              return (
                <div
                  key={index}
                  className="w-fit h-fit hover:scale-110 transition-all duration-300 hover:cursor-pointer p-0 m-0 hover:shadow-lg rounded-lg hover:shadow-primary-foreground hover:bg-primary-foreground/20"
                >
                  <img
                    src={tool}
                    alt={`${index}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              );
            })}
          </section>
          {/* How I Craft Experiences */}
          <br />
          <div
            ref={sectionRefs.process}
            className="flex flex-col items-start gap-1"
          >
            <b className="text-[28px]">How I Craft Experiences</b>
            <hr className="w-3/5 border-2 border-primary" />
          </div>
          <section>
            <ol className="flex sm:flex-col sm:w-auto w-[90dvw] overflow-x-auto gap-6 sm:gap-4 sm:text-black text-gray-500 text-nowrap">
              <li>1) Research & Discovery</li>
              <li>2) Ideation & Wireframing</li>
              <li>3) UI Design & Prototyping</li>
              <li>4) Testing & Iteration</li>
              <li>5) Handoff & Implementation</li>
            </ol>
          </section>

          {/* Services Section (placeholder) */}
          <br />
          <div
            ref={sectionRefs.services}
            className="flex flex-col items-start gap-1"
          >
            <b className="text-[28px]">Services</b>
            <hr className="w-2/5 border-2 border-primary" />
          </div>
          <section className="w-full">
            <p>More information about services coming soon...</p>
          </section>

          {/* Contact Section (placeholder) */}
          <br />
          <div
            ref={sectionRefs.contact}
            className="flex flex-col items-start gap-1"
          >
            <b className="text-[28px]">Contact & Social Media</b>
            <hr className="w-2/5 border-2 border-primary" />
          </div>
          <section className="w-full">
            <p>Connect with me on social media or reach out directly...</p>
          </section>
        </div>
      </section>
    </div>
  );
}

export default About;
