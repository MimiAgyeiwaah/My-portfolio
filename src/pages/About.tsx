// import { profilePicture } from '../../public/assets'
import { ArrowRight, ArrowUpRight } from "lucide-react";
import HowICraft from "../components/how-i-craft";
import { hardSkills, softSkills } from "../constants";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/scroll-to-top";
import { Separator } from "../components/ui/separator";
import SendMessageDialog from "@/components/send-email";

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
    {
      id: 1,
      image: "/assets/Toolkit/Figma.svg",
      name: "Figma",
    },
    {
      id: 2,
      image: "/assets/Toolkit/Photoshop.svg",
      name: "Photoshop",
    },
    {
      id: 3,
      image: "/assets/Toolkit/Canva.svg",
      name: "Canva",
    },
    {
      id: 4,
      image: "/assets/Toolkit/Sketch.svg",
      name: "Sketch",
    },
    {
      id: 5,
      image: "/assets/Toolkit/Mobbin.svg",
      name: "Mobbin",
    },
    {
      id: 6,
      image: "/assets/Toolkit/Notion.svg",
      name: "Notion",
    },
    {
      id: 7,
      image: "/assets/Toolkit/Slack.svg",
      name: "Slack",
    },
    {
      id: 8,
      image: "/assets/Toolkit/Trello.svg",
      name: "Trello",
    },
    {
      id: 9,
      image: "/assets/Toolkit/HTML5.svg",
      name: "HTML5",
    },
    {
      id: 9,
      image: "/assets/Toolkit/CSS3.svg",
      name: "CSS3",
    },
    {
      id: 10,
      image: "/assets/Toolkit/JavaScript.svg",
      name: "JavaScript",
    },
  ];

  const howICraft = [
    {
      question: "1) Research & Discovery",
      answer:
        "I start by understanding the problem, target users, and business goals. This includes conducting user research, analyzing competitors, and gathering insights to create a strong foundation.",
    },
    {
      question: "2) Ideation & Wireframing",
      answer:
        "Brainstorming and sketching ideas to define the structure and user flow. I create wireframes to map out the layout and functionality before diving into visuals.",
    },

    {
      question: "3) UI Design & Prototyping",
      answer:
        "I bring ideas to life with high-fidelity designs, focusing on color, typography, and interactions. Prototyping helps visualize user interactions before development.",
    },
    {
      question: "4) Testing & Iteration",
      answer:
        "I conduct usability tests and gather feedback to refine the design. Adjustments are made to enhance the user experience based on real user insights.",
    },
    {
      question: "5) Handoff & Implementation",
      answer:
        "I collaborate with developers, ensuring smooth implementation by providing design specifications, assets, and support to maintain design integrity.",
    },
  ];

  const services = [
    {
      title: "UI/UX Design",
      description: "10+ Projects",
      link: "/projects/1",
    },
    {
      title: "Graphic Design",
      description: "10+ Projects",
      link: "/projects/6",
    },
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
    <div className="w-full relative h-[calc(100dvh-100px)] flex flex-col px-[0.5rem] sm:px-[1rem] md:px-[5rem] xl:px-[5rem] bg-background">
      <section className="w-full h-full flex min-[1001px]:flex-row flex-col space-x-10 gap-[2rem] min-[1714px]:gap-[4rem] items-start px-[1rem] min-[1001px]:pt-[4rem] min-[1714px]:px-[10rem]">
        <div className="min-w-full min-[1001px]:min-w-[300px] min-[1714px]:min-w-[400px] min-[700px]:gap-[2rem] min-[1001px]:min-h-[400px] flex flex-col items-start justify-between">
          <ul className="flex sm:flex-col sm:w-auto w-[90dvw] overflow-x-auto gap-6 sm:gap-4 sm:text-black text-gray-500 dark:text-white text-nowrap">
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
        <Separator
          orientation="vertical"
          className="bg-gray-100 dark:bg-secondary-foreground"
        />
        <div
          ref={contentRef}
          id="about-content-scroll"
          className="w-full flex-1 overflow-y-auto h-full flex flex-col items-start gap-8 transition-all duration-300 scroll-smooth scrollbar-hidden"
        >
          <section className="w-full flex min-[470px]:flex-row flex-col items-center gap-5">
            <div className="w-full min-[400px]:w-[319px] h-[180px] drop-shadow-lg shadow-primary/30 rounded-3xl relative overflow-hidden flex items-center justify-center">
              <img
                src={"assets/profilePicture.svg"}
                alt=""
                className="w-full object-contain absolute top-0 left-0"
              />
            </div>
            <span className="text-[40px] font-[300] w-[200px] leading-[50px] min-[470px]:text-left text-center">
              Miriam <span className="font-[600]">Agyeiwaah Asante</span>
            </span>
          </section>
          <div
            ref={sectionRefs.journey}
            className="space-y-6 dark:text-gray-500"
          >
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

          <Separator
            orientation="horizontal"
            className="bg-gray-100 dark:bg-secondary-foreground  mt-12 mb-5 "
          />

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
                className="p-[1px] relative cursor-pointer rounded-[3rem] bg-gradient-to-r from-primary via-[#C6445D] via-[#F9A768] via-[#C6445D] to-primary dark:from-primary dark:via-[#C6445D] dark:via-[#F9A768] dark:via-[#C6445D] dark:to-primary "
              >
                <div className="bg-white dark:bg-background rounded-[3rem] px-4 py-2 flex items-center justify-center sm:text-base text-sm">
                  {skill}
                </div>
                <div className="w-full h-full hover:bg-primary/10 absolute top-0 left-0 rounded-[3rem]" />
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
            {softSkills.map((skill, idx) => (
              <div
                key={idx}
                className="p-[1px] relative cursor-pointer rounded-[3rem] bg-gradient-to-r from-primary via-[#C6445D] via-[#F9A768] via-[#C6445D] to-primary"
              >
                <div className="bg-white dark:bg-background rounded-[3rem] px-4 py-2 flex items-center justify-center sm:text-base text-sm">
                  {skill}
                </div>
                <div className="w-full h-full hover:bg-primary/10 absolute top-0 left-0 rounded-[3rem]" />
              </div>
            ))}
          </section>

          <Separator
            orientation="horizontal"
            className="bg-gray-100 dark:bg-secondary-foreground  mt-12 mb-5 "
          />

          {/* Toolkit */}
          <br />
          <div
            ref={sectionRefs.tools}
            className="flex flex-col items-start gap-1"
          >
            <b className="text-[28px]">My Creative Toolkit</b>
            <hr className="w-3/5 border-2 mb-4 border-primary" />
          </div>
          <section className="w-full flex items-center gap-8 flex-wrap">
            {toolkit.map((tool, index) => (
              <div
                key={tool.id}
                className="group hover:bg-primary/10 relative w-24 h-24 flex items-center justify-center border-[.5px] border-gray-300 p-0 m-0 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-foreground hover:bg-primary-foreground/20 cursor-pointer"
              >
                <img
                  src={tool.image}
                  alt={`${index}`}
                  className="object-cover transition-transform duration-300 group-hover:scale-70"
                />
                <p className="absolute bottom-0 left-0 w-full  text-sm text-gray-700 text-center py-1 transform translate-y-full group-hover:translate-y-1 transition-transform duration-300">
                  {tool.name}
                </p>
              </div>
            ))}
          </section>

          <Separator
            orientation="horizontal"
            className="bg-gray-100 dark:bg-secondary-foreground  mt-12 mb-5 "
          />

          {/* How I Craft Experiences */}
          <br />
          <div
            ref={sectionRefs.process}
            className="flex flex-col items-start gap-1"
          >
            <b className="text-[28px]">How I Craft Experiences</b>
            <hr className="w-3/5 border-2 border-primary" />
          </div>
          <HowICraft howICraft={howICraft} />

          <Separator
            orientation="horizontal"
            className="bg-gray-100 dark:bg-secondary-foreground  mt-4 mb-2 "
          />

          {/* Services Section  */}
          <br />
          <div
            ref={sectionRefs.services}
            className="flex flex-col items-start gap-1 "
          >
            <b className="text-[28px]">What I Can Do for You</b>
            <hr className="w-2/5 border-2 border-primary" />
          </div>
          <section className="w-full">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="flex items-center hover:bg-gray-400/10 transition-all duration-300 justify-between space-y-4 border-b border-gray-200 pb-4 gap-1 cursor-pointer"
              >
                <span className="text-lg pt-4 m-1 pl-2">{service.title}</span>

                <div className="flex items-center gap-1 space-x-2 m-2">
                  <p className="text-md text-gray-500">{service.description}</p>
                  <ArrowUpRight className="w-5 h-5 text-sm text-gray-400" />
                </div>
              </Link>
            ))}
          </section>

          <Separator
            orientation="horizontal"
            className="bg-gray-100 dark:bg-secondary-foreground mt-12 mb-5 "
          />

          {/* Contact Section  */}
          <br />
          <section className="">
            <div
              ref={sectionRefs.contact}
              className="flex flex-col items-start gap-1 mb-8"
            >
              <b className="text-[28px]">Get In Touch</b>
              <hr className="w-2/12 border-2 border-primary" />
            </div>
            <section className="w-full">
              <p>
                Let’s create something amazing together. Reach out for
                collaborations, <br />
                <span className="">question, or just to say hello.</span>
              </p>

              <SendMessageDialog>
                <button className=" group flex mt-12 hover:bg-primary cursor-pointer items-end justify-between p-1 rounded-md w-40 h-16 gap-1  bg-[#21212114] dark:bg-secondary hover:text-white">
                  <span className="text-gray-500 group-hover:text-white transition-all duration-300 p-1">
                    Let’s Talk
                  </span>
                  <div className="h-full flex flex-col items-end">
                    <span className="bg-black/70 dark:bg-black/30 group-hover:bg-white transition-all duration-300 rounded-full p-0.5 m-1">
                      <ArrowRight className="size-4 text-sm text-gray-200 group-hover:text-black group-hover:dark:text-gray-400 -rotate-45" />
                    </span>
                  </div>
                </button>
              </SendMessageDialog>
            </section>

            {/* social links */}
            <div className="flex items-center justify-start w-full gap-1 space-y-2 space-x-14 mt-30">
              <Link
                to={"https://www.linkedin.com/in/miriam-asante-909851243"}
                className="group hover:bg-primary transition-all duration-300 rounded-full w-10 h-10 bg-primary/10 flex justify-center items-center"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  // className="group-hover:fill-white transition-all duration-300"
                >
                  <path
                    d="M0 1.85859C0 1.31985 0.191447 0.87541 0.574324 0.525253C0.957202 0.175079 1.45496 0 2.06757 0C2.66925 0 3.15604 0.17238 3.52799 0.517172C3.91087 0.872727 4.10232 1.33602 4.10232 1.90707C4.10232 2.42424 3.91635 2.85521 3.5444 3.2C3.16152 3.55556 2.6583 3.73333 2.03475 3.73333H2.01834C1.41666 3.73333 0.929864 3.55556 0.557915 3.2C0.185966 2.84444 0 2.3973 0 1.85859ZM0.21332 16V5.20404H3.85618V16H0.21332ZM5.87452 16H9.51737V9.97172C9.51737 9.5946 9.56114 9.30369 9.64865 9.09899C9.8018 8.73265 10.0343 8.42289 10.346 8.1697C10.6578 7.91649 11.0489 7.7899 11.5193 7.7899C12.7445 7.7899 13.3571 8.60336 13.3571 10.2303V16H17V9.8101C17 8.21548 16.6171 7.00606 15.8514 6.18182C15.0856 5.35758 14.0737 4.94545 12.8156 4.94545C11.4044 4.94545 10.305 5.54343 9.51737 6.73939V6.77172H9.50097L9.51737 6.73939V5.20404H5.87452C5.89639 5.54882 5.90734 6.62086 5.90734 8.4202C5.90734 10.2195 5.89639 12.7461 5.87452 16Z"
                    fill="#8B5CF6"
                    className="group-hover:fill-white transition-all duration-300"
                  />
                </svg>
              </Link>
              <Link
                to={"https://www.behance.net/MzMimi_designs"}
                className="group hover:bg-primary transition-all duration-300 rounded-full w-10 h-10 bg-primary/10 flex justify-center items-center"
              >
                <svg
                  width="21"
                  height="14"
                  viewBox="0 0 21 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.20455 5.79615C6.71087 5.79615 7.19645 5.5926 7.55448 5.23027C7.9125 4.86794 8.11364 4.37651 8.11364 3.8641C8.11364 3.35169 7.9125 2.86027 7.55448 2.49794C7.19645 2.13561 6.71087 1.93205 6.20455 1.93205H1.90909V5.79615H6.20455ZM7.15909 7.7282H1.90909V11.5923H7.15909C7.66541 11.5923 8.151 11.3888 8.50902 11.0264C8.86705 10.6641 9.06818 10.1727 9.06818 9.66025C9.06818 9.14784 8.86705 8.65642 8.50902 8.29409C8.151 7.93176 7.66541 7.7282 7.15909 7.7282ZM9.12832 6.34872C9.84378 6.7841 10.3985 7.4448 10.7076 8.22965C11.0167 9.01449 11.0631 9.88023 10.8397 10.6943C10.6163 11.5084 10.1354 12.2259 9.47063 12.737C8.80589 13.2482 7.99394 13.5247 7.15909 13.5244H0V1.70022e-08H6.20455C6.93158 -6.89919e-05 7.64353 0.209934 8.25667 0.605319C8.86981 1.0007 9.35867 1.56503 9.66576 2.23195C9.97285 2.89888 10.0854 3.64067 9.99021 4.37011C9.895 5.09956 9.59598 5.78633 9.12832 6.34969M13.8409 0.966025H19.0909V2.41506H13.8409V0.966025ZM21 9.17724H13.8409V9.41875C13.8407 10.0155 14.039 10.5949 14.4039 11.0637C14.7688 11.5325 15.2791 11.8632 15.8524 12.0027C16.4257 12.1422 17.0287 12.0822 17.5643 11.8325C18.0998 11.5828 18.5367 11.1579 18.8045 10.6263H20.8415C20.5507 11.6969 19.8863 12.6246 18.9714 13.2374C18.0565 13.8503 16.9532 14.1068 15.8657 13.9594C14.7783 13.812 13.7805 13.2707 13.0572 12.4359C12.3338 11.601 11.934 10.5291 11.9318 9.41875V7.96971C11.9318 6.75273 12.4095 5.5856 13.2598 4.72507C14.1101 3.86453 15.2634 3.38109 16.4659 3.38109C17.6684 3.38109 18.8217 3.86453 19.672 4.72507C20.5223 5.5856 21 6.75273 21 7.96971V9.17724ZM18.9916 7.24519C18.8353 6.68923 18.5042 6.2 18.0484 5.85166C17.5926 5.50332 17.0371 5.31486 16.4659 5.31486C15.8948 5.31486 15.3392 5.50332 14.8834 5.85166C14.4276 6.2 14.0965 6.68923 13.9402 7.24519H18.9916Z"
                    fill="#8B5CF6"
                    className="group-hover:fill-white transition-all duration-300"
                  />
                </svg>
              </Link>

              <Link
                to={"https://wa.me/233557018496"}
                className="group hover:bg-primary transition-all duration-300 rounded-full w-10 h-10 bg-primary/10 flex justify-center items-center"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9 18C7.46816 18.0022 5.96132 17.6118 4.62331 16.866L4.34881 16.7058L1.62001 17.5086C1.47151 17.5523 1.3143 17.5575 1.16327 17.5234C1.01225 17.4894 0.872414 17.4174 0.757031 17.3142C0.641648 17.2109 0.554537 17.08 0.503956 16.9337C0.453376 16.7873 0.441002 16.6305 0.468008 16.4781L0.491408 16.38L1.29421 13.6512C0.445471 12.2484 -0.00217264 10.6396 7.92858e-06 9C7.92858e-06 4.0293 4.02931 0 9 0ZM9 1.8C7.71087 1.79977 6.44532 2.14565 5.3355 2.80153C4.22569 3.45741 3.31233 4.39924 2.69079 5.52864C2.06926 6.65805 1.76235 7.93362 1.80213 9.22214C1.8419 10.5107 2.2269 11.7649 2.91691 12.8538C3.09511 13.1346 3.17161 13.4802 3.11131 13.8231L3.07621 13.9698L2.67931 15.3207L4.03021 14.9238C4.41991 14.8086 4.8249 14.8788 5.1462 15.0831C6.0897 15.6805 7.15922 16.0503 8.27023 16.1631C9.38124 16.276 10.5033 16.1289 11.5476 15.7334C12.592 15.338 13.5301 14.705 14.2877 13.8845C15.0453 13.0641 15.6016 12.0787 15.9128 11.0062C16.224 9.93369 16.2814 8.80351 16.0805 7.70499C15.8797 6.60648 15.426 5.56974 14.7555 4.67674C14.085 3.78373 13.2159 3.05895 12.217 2.55967C11.2181 2.0604 10.1167 1.80032 9 1.8ZM6.3918 4.6656C6.49145 4.62245 6.60061 4.60598 6.70854 4.61782C6.81648 4.62965 6.91948 4.66938 7.0074 4.7331C7.461 5.0643 7.821 5.5089 8.1306 5.9427L8.4249 6.3693L8.5626 6.5718C8.64205 6.68797 8.68105 6.82706 8.67357 6.96761C8.66608 7.10815 8.61254 7.24232 8.5212 7.3494L8.4537 7.4178L7.6221 8.0352C7.58208 8.06418 7.55391 8.10668 7.54283 8.15483C7.53174 8.20299 7.53848 8.25353 7.5618 8.2971C7.7508 8.6391 8.0847 9.14939 8.4681 9.53279C8.8524 9.91619 9.3861 10.2726 9.7515 10.4823C9.8307 10.5273 9.9261 10.5129 9.9909 10.4544L10.0251 10.4139L10.566 9.59039C10.6653 9.45811 10.8119 9.36942 10.9752 9.3429C11.1385 9.31639 11.3057 9.35413 11.4417 9.44819L11.9304 9.78929C12.4164 10.1358 12.8835 10.5084 13.2534 10.9809C13.3222 11.0695 13.3659 11.175 13.38 11.2863C13.3941 11.3976 13.378 11.5106 13.3335 11.6136C12.9771 12.4452 12.0744 13.1535 11.1366 13.1193L10.9935 13.1103L10.8216 13.0941C10.7892 13.0902 10.7568 13.086 10.7244 13.0815L10.5102 13.0455C9.6786 12.8889 8.3457 12.4173 6.9642 11.0367C5.5836 9.65519 5.11201 8.3223 4.95541 7.4907L4.91941 7.2765L4.89691 7.0893L4.88521 6.9318C4.88378 6.90931 4.88258 6.88681 4.88161 6.8643C4.8474 5.9247 5.55931 5.022 6.3918 4.6656Z"
                    fill="#8B5CF6"
                    className="group-hover:fill-white transition-all duration-300"
                  />
                </svg>
              </Link>

              <Link
                to={"mailto:asantemiriam23@gmail.com"}
                className="group hover:bg-primary transition-all duration-300 rounded-full w-10 h-10 bg-primary/10 flex justify-center items-center"
              >
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-center"
                >
                  <path
                    d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                    fill="#8B5CF6"
                    className="group-hover:fill-white transition-all duration-300"
                  />
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </section>
      <ScrollToTop ref={contentRef} />
    </div>
  );
}

export default About;
