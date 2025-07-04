// import { logo2, profilePicture } from '../../public/assets'
import { Button } from "../components/ui/button";
import { mockups, testimonial } from "../constants";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Circle,
  Download,
} from "lucide-react";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function Home() {
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);
  const [activeMockup, setActiveMockup] = React.useState(0);

  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutTextRef = useRef<HTMLParagraphElement>(null);
  const aboutTextHeaderRef = useRef<HTMLDivElement>(null);
  // Scroll tracking relative to the element
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "start center"], // start when top hits bottom, end at center
  });
  const { scrollYProgress: aboutTextProgress } = useScroll({
    target: aboutTextRef,
    offset: ["start end", "start center"], // start when top hits bottom, end at center
  });

  const { scrollYProgress: aboutTextHeaderProgress } = useScroll({
    target: aboutTextHeaderRef,
    offset: ["start end", "start center"], // start when top hits bottom, end at center
  });

  // Create smooth spring animations for X, Y, and opacity
  const rawX = useTransform(scrollYProgress, [0, 1], [-400, 0]);
  const rawY = useTransform(scrollYProgress, [0, 1], [400, 0]);
  const rawOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  const x = useSpring(rawX, { stiffness: 100, damping: 20 });
  const y = useSpring(rawY, { stiffness: 100, damping: 20 });
  const opacity = useSpring(rawOpacity, { stiffness: 50, damping: 15 });

  const rawXAboutText = useTransform(aboutTextProgress, [0, 1], [400, 0]);
  const rawYAboutText = useTransform(aboutTextProgress, [0, 1], [-400, 0]);
  const rawOpacityAboutText = useTransform(aboutTextProgress, [0.95, 1], [0, 1]);
  const rawOpacityAboutTextHeader = useTransform(aboutTextHeaderProgress, [0.95, 1], [0, 1]);
  const rawXAboutTextHeader = useTransform(aboutTextHeaderProgress, [0, 1], [-60, 10]);
  const rawYAboutTextHeader = useTransform(aboutTextHeaderProgress, [0, 1], [10, -50]);

  const xAboutTextHeader = useSpring(rawXAboutTextHeader, { stiffness: 100, damping: 20 });
  const yAboutTextHeader = useSpring(rawYAboutTextHeader, { stiffness: 100, damping: 20 });
  const opacityAboutTextHeader = useSpring(rawOpacityAboutTextHeader, {
    stiffness: 50,
    damping: 15,
  });

  const xAboutText = useSpring(rawXAboutText, { stiffness: 100, damping: 20 });
  const yAboutText = useSpring(rawYAboutText, { stiffness: 100, damping: 20 });
  const opacityAboutText = useSpring(rawOpacityAboutText, {
    stiffness: 50,
    damping: 15,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === testimonial.length - 1 ? 0 : prev + 1
      );
      setActiveMockup((prev) => (prev === mockups.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-full space-y-16 md:space-y-24 flex flex-col items-center">
      <section className="w-full space-y-14 md:space-y-18 gap-24 lg:gap-32 flex flex-col items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.2,
            ease: "circInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="flex flex-col space-y-2 mt-18 md:mt-24 items-center gap-1 text-center font-semibold transition-opacity duration-500 delay-100"
        >
          <span className="text-2xl min-[650px]:text-3xl md:text-5xl leading-px tracking-wider flex items-center text-gray-500">
            Hello, I'm
            <div className="w-28 ">
              <img
                src={"assets/logo2.svg"}
                alt="logo2"
                className="w-full h-full object-cover"
              />
            </div>
            Mimi
          </span>
          <p className="text-2xl min-[450px]:text-4xl md:text-5xl transition-transform duration-500 delay-100 leading-snug text-center tracking-wider mx-auto md:max-w-6xl">
            UI/UX & Graphic Designer creating <br /> seamless and visually
            stunning experiences
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.2,
            ease: "circInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="w-full flex flex-wrap items-center justify-center gap-4"
        >
          <Button className="min-[450px]:w-auto min-[320px]:w-[300px] hover:bg-primary/80 transition-all duration-300 cursor-pointer w-[calc(100dvw-20px)] bg-primary text-white min-[450px]:h-12 h-10 font-semibold min-[450px]:text-base text-sm">
            View My Work
            <ArrowRight />
          </Button>
          <Button
            variant={"outline"}
            className="min-[450px]:w-auto hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-pointer min-[320px]:w-[300px] w-[calc(100dvw-20px)] text-primary border border-primary min-[450px]:h-12 h-10 font-semibold min-[450px]:text-base text-sm"
          >
            Download Resume
            <Download />
          </Button>
          <Button variant={"link"} asChild className="hover:no-underline p-5">
            <Link
              to="/"
              className="text-sm font-semibold min-[650px]:flex hover:bg-primary/10 hover:text-primary hover:no-underline transition-all duration-300 cursor-pointer "
            >
              Contact Me
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* About section .... */}
      <section className="w-full py-[4rem] flex md:flex-row flex-col items-center md:gap-[3rem] px-[0.5rem] sm:px-[1rem] md:px-[5rem] lg:px-[10rem] 2xl:px-[20rem]">
        <motion.div
          ref={aboutRef}
          style={{ x, y, opacity }}
          className="md:h-[540px] md:w-[650px] w-full min-[450px]:w-[300px] h-[300px] min-[450px]:h-[250px] overflow-hidden rounded-2xl relative"
        >
          <img
            src={"assets/profilePicture.svg"}
            alt="profilepicture"
            className="w-full md:size-full object-cover md:relative absolute top-0 left-0"
          />
        </motion.div>
        <div className="w-full flex flex-col items-center md:items-start py-6 gap-4 md:text-left text-center">
          <motion.div
            ref={aboutTextHeaderRef}
            style={{ opacity: opacityAboutTextHeader, y: yAboutTextHeader, x: xAboutTextHeader }}
            className="flex flex-col items-center md:items-start gap-1"
          >
            <b className="text-[30px] sm:text-[40px]">About me</b>
            <hr className="w-2/5 border-2 border-primary" />
          </motion.div>
          <motion.p
            ref={aboutTextRef}
            style={{ opacity: opacityAboutText, y: yAboutText, x: xAboutText }}
            className="md:text-[30px] lg:text-[40px] lg:leading-[50px] font-[200]"
          >
            I’m a passionate creative with a love for intentional design,
            problem-solving, and turning ideas into meaningful digital
            experiences. Beyond design, I'm someone who values purpose, growth,
            and authenticity in everything I do.
          </motion.p>

          <Link to={`/about`}>
            <span className="flex items-center gap-2 font-semibold cursor-pointer hover:text-primary">
              Learn More{" "}
              <span>
                <ArrowRight className="size-5" />
              </span>
            </span>
          </Link>
        </div>
      </section>

      <section className="w-full h-auto py-[4rem] pt-[1rem] md:pt-[8rem] md:py-[8rem] flex lg:flex-row flex-col 2xl:gap-[5rem] lg:gap-[3rem] gap-[2rem] xl:gap-[6rem] items-center min-[750px]:px-0 px-[0.5rem] lg:pl-[5rem] xl:pl-[10rem] min-[1809px]:pl-[20rem] min-[1809px]:px-[20rem]">
        <div className="flex flex-col items-center lg:items-start gap-6 2xl:w-[558px] 2xl:min-w-[558px] sm:w-[450px] sm:min-w-[450px] lg:text-left text-center">
          <div className="w-fit flex flex-col lg:items-start items-center gap-1">
            <b className="text-[30px] sm:text-[40px]">Recent Works</b>
            <hr className="w-2/5 border-2 border-primary" />
          </div>
          <p className="md:text-[30px] lg:text-[40px] lg:leading-[50px] font-[200]">
            Explore a selection of my recent projects showcasing my design
            approach and problem solving skills.
          </p>
        </div>
        <div className="w-full min-[750px]:w-[700px] lg:w-full h-[400px] xl:h-[490px] lg:flex-1 flex items-center relative overflow-hidden rounded-r-2xl sm:rounded-r-[3rem] lg:rounded-r-none rounded-l-2xl sm:rounded-l-[3rem]">
          {mockups.map((mockup, index) => (
            <img
              key={index}
              src={mockup}
              alt="mock"
              className={`size-full absolute flex-1 object-cover ${
                activeMockup === index
                  ? ""
                  : "translate-x-[95%] rounded-l-[3rem]"
              } ${
                activeMockup === index + 1 ? "z-10" : ""
              } transition-all duration-700`}
            />
          ))}

          <div className="flex items-center justify-center absolute right-7">
            <div className="size-12 lg:size-16 bg-primary rounded-full absolute animate-ping" />
            <button
              onClick={() => {
                if (activeMockup <= 0) {
                  setActiveMockup(mockups.length - 1);
                } else {
                  setActiveMockup((prev) => prev - 1);
                }
              }}
              className="z-10 size-12 lg:size-16 bg-primary cursor-pointer hover:border-2 rounded-full border border-primary flex items-center justify-center text-white hover:text-primary"
            >
              <ChevronRight className="size-5 lg:size-8" />
            </button>
          </div>
        </div>
      </section>

      <section className="w-full md:min-h-[100dvh] py-[4rem] md:py-[8rem] px-[0.5rem] flex flex-col items-center gap-[2rem] sm:gap-[5rem] bg-primary-foreground">
        <div className="w-fit flex flex-col gap-1 items-center">
          <h1 className="font-semibold text-[30px] sm:text-[40px]">
            Client Testimonials
          </h1>
          <hr className="w-[100px] border-2 border-primary" />
          <p className="md:w-[600px] text-center text-gray-700 text-sm sm:text-base md:text-[18px] mt-3">
            Here’s what clients and collaborators have to say about working with
            me.
          </p>
        </div>
        <div className="p-6 pt-0 flex flex-col sm:gap-4 rounded-2xl bg-white lg:w-[800px] min-h-[247px] transition-all duration-500 md:text-left text-center">
          <section className="w-full flex md:flex-row flex-col items-center justify-between md:py-0 py-6">
            <aside className="flex md:flex-row flex-col items-center gap-2">
              <div className="w-[50px] h-[50px] rounded-full bg-gray-200 relative flex items-center justify-center">
                <div className="size-full rounded-full bg-primary animate-ping absolute" />
                <img
                  src={testimonial[activeTestimonial].image}
                  alt="profilepicture"
                  className="z-10 size-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold sm:text-[18px]">
                  {testimonial[activeTestimonial].name}
                </h1>
                <p className="text-sm text-gray-500">
                  {testimonial[activeTestimonial].title}
                </p>
              </div>
            </aside>
            <svg
              width="88"
              height="88"
              className="md:block hidden"
              viewBox="0 0 88 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M58.3365 45.3573H75.5332C75.2398 62.4806 71.8665 65.3039 61.3432 71.5373C60.1332 72.2706 59.7298 73.8106 60.4632 75.0573C61.1965 76.2673 62.7365 76.6706 63.9832 75.9373C76.3765 68.6039 80.7032 64.1306 80.7032 42.7906V23.0273C80.7032 16.7573 75.6065 11.6973 69.3732 11.6973H58.3732C51.9198 11.6973 47.0432 16.5739 47.0432 23.0273V34.0273C47.0065 40.4806 51.8832 45.3573 58.3365 45.3573Z"
                fill="#F0EAFE"
              />
              <path
                d="M18.6635 45.3573H35.8602C35.5668 62.4806 32.1935 65.3039 21.6702 71.5373C20.4602 72.2706 20.0568 73.8106 20.7902 75.0573C21.5235 76.2673 23.0635 76.6706 24.3102 75.9373C36.7035 68.6039 41.0302 64.1306 41.0302 42.7906V23.0273C41.0302 16.7573 35.9335 11.6973 29.7002 11.6973H18.7002C12.2102 11.6973 7.3335 16.5739 7.3335 23.0273V34.0273C7.3335 40.4806 12.2102 45.3573 18.6635 45.3573Z"
                fill="#F0EAFE"
              />
            </svg>
          </section>
          <p className="text-sm sm:text-base md:text-[18px] text-gray-700">
            {testimonial[activeTestimonial].description}
          </p>
        </div>

        <div className="flex gap-6 items-center">
          <button
            onClick={() => {
              if (activeTestimonial <= 0) {
                setActiveTestimonial(testimonial.length - 1);
              } else {
                setActiveTestimonial((prev) => prev - 1);
              }
            }}
            className="border border-primary flex items-center justify-center size-10 rounded-full hover:bg-primary-foreground cursor-pointer"
          >
            <ChevronLeft className="size-5 text-primary" />
          </button>
          <aside className="flex items-center gap-1">
            <Circle
              className={`size-2 rounded-full ${
                activeTestimonial === 0 ? "bg-primary" : "bg-primary-foreground"
              } text-primary`}
            />
            <Circle
              className={`size-2 rounded-full ${
                activeTestimonial > 0 &&
                activeTestimonial < testimonial.length - 1
                  ? "bg-primary"
                  : "bg-primary-foreground"
              } text-primary`}
            />
            <Circle
              className={`size-2 rounded-full ${
                activeTestimonial === testimonial.length - 1
                  ? "bg-primary"
                  : "bg-primary-foreground"
              } text-primary`}
            />
          </aside>
          <button
            onClick={() => {
              if (activeTestimonial >= testimonial.length - 1) {
                setActiveTestimonial(0);
              } else {
                setActiveTestimonial((prev) => prev + 1);
              }
            }}
            className="border border-primary flex items-center justify-center size-10 rounded-full hover:bg-primary-foreground cursor-pointer"
          >
            <ChevronRight className="size-5 text-primary" />
          </button>
        </div>
      </section>

      {/* Get in touch */}
      <section className="w-full md:h-[600px] py-[4rem] md:py-[8rem] pb-[3rem] px-[0.5rem] gap-[3rem] md:gap-0 flex flex-col items-center justify-between">
        <div className="w-fit flex flex-col gap-1 items-center">
          <h1 className="font-semibold text-[30px] sm:text-[40px]">
            Get In Touch
          </h1>
          <hr className="w-[80px] border-2 border-primary" />
          <p className="sm:w-[600px] text-center sm:text-base text-sm ">
            Let’s create something amazing together. Reach out for
            collaborations, question, or just to say hello.{" "}
          </p>
        </div>
        <div className="p-3 rounded-lg cursor-pointer transition-all duration-300 flex items-end relative bg-gray-200 hover:bg-primary w-[150px] h-[70px] text-gray-600 hover:text-white group">
          <div className="size-5 rounded-full bg-gray-700 text-white flex items-center justify-center absolute top-3 right-3">
            <ArrowRight className="size-4 -rotate-45" />
          </div>
          <h1>Let's Talk</h1>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-[1rem] sm:gap-[4rem]">
          <a
            href="/"
            className="size-10 flex items-center justify-center bg-primary-foreground rounded-full"
          >
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 1.85859C0.5 1.31985 0.691447 0.87541 1.07432 0.525253C1.4572 0.175079 1.95496 0 2.56757 0C3.16925 0 3.65604 0.17238 4.02799 0.517172C4.41087 0.872727 4.60232 1.33602 4.60232 1.90707C4.60232 2.42424 4.41635 2.85521 4.0444 3.2C3.66152 3.55556 3.1583 3.73333 2.53475 3.73333H2.51834C1.91666 3.73333 1.42986 3.55556 1.05792 3.2C0.685966 2.84444 0.5 2.3973 0.5 1.85859ZM0.71332 16V5.20404H4.35618V16H0.71332ZM6.37452 16H10.0174V9.97172C10.0174 9.5946 10.0611 9.30369 10.1486 9.09899C10.3018 8.73265 10.5343 8.42289 10.846 8.1697C11.1578 7.91649 11.5489 7.7899 12.0193 7.7899C13.2445 7.7899 13.8571 8.60336 13.8571 10.2303V16H17.5V9.8101C17.5 8.21548 17.1171 7.00606 16.3514 6.18182C15.5856 5.35758 14.5737 4.94545 13.3156 4.94545C11.9044 4.94545 10.805 5.54343 10.0174 6.73939V6.77172H10.001L10.0174 6.73939V5.20404H6.37452C6.39639 5.54882 6.40734 6.62086 6.40734 8.4202C6.40734 10.2195 6.39639 12.7461 6.37452 16Z"
                fill="#8B5CF6"
              />
            </svg>
          </a>
          <a
            href="/"
            className="size-10 flex items-center justify-center bg-primary-foreground rounded-full"
          >
            <svg
              width="22"
              height="14"
              viewBox="0 0 22 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.45455 5.79615C6.96087 5.79615 7.44645 5.5926 7.80448 5.23027C8.1625 4.86794 8.36364 4.37651 8.36364 3.8641C8.36364 3.35169 8.1625 2.86027 7.80448 2.49794C7.44645 2.13561 6.96087 1.93205 6.45455 1.93205H2.15909V5.79615H6.45455ZM7.40909 7.7282H2.15909V11.5923H7.40909C7.91541 11.5923 8.401 11.3888 8.75902 11.0264C9.11705 10.6641 9.31818 10.1727 9.31818 9.66025C9.31818 9.14784 9.11705 8.65642 8.75902 8.29409C8.401 7.93176 7.91541 7.7282 7.40909 7.7282ZM9.37832 6.34872C10.0938 6.7841 10.6485 7.4448 10.9576 8.22965C11.2667 9.01449 11.3131 9.88023 11.0897 10.6943C10.8663 11.5084 10.3854 12.2259 9.72063 12.737C9.05589 13.2482 8.24394 13.5247 7.40909 13.5244H0.25V1.70022e-08H6.45455C7.18158 -6.89919e-05 7.89353 0.209934 8.50667 0.605319C9.11981 1.0007 9.60867 1.56503 9.91576 2.23195C10.2229 2.89888 10.3354 3.64067 10.2402 4.37011C10.145 5.09956 9.84598 5.78633 9.37832 6.34969M14.0909 0.966025H19.3409V2.41506H14.0909V0.966025ZM21.25 9.17724H14.0909V9.41875C14.0907 10.0155 14.289 10.5949 14.6539 11.0637C15.0188 11.5325 15.5291 11.8632 16.1024 12.0027C16.6757 12.1422 17.2787 12.0822 17.8143 11.8325C18.3498 11.5828 18.7867 11.1579 19.0545 10.6263H21.0915C20.8007 11.6969 20.1363 12.6246 19.2214 13.2374C18.3065 13.8503 17.2032 14.1068 16.1157 13.9594C15.0283 13.812 14.0305 13.2707 13.3072 12.4359C12.5838 11.601 12.184 10.5291 12.1818 9.41875V7.96971C12.1818 6.75273 12.6595 5.5856 13.5098 4.72507C14.3601 3.86453 15.5134 3.38109 16.7159 3.38109C17.9184 3.38109 19.0717 3.86453 19.922 4.72507C20.7723 5.5856 21.25 6.75273 21.25 7.96971V9.17724ZM19.2416 7.24519C19.0853 6.68923 18.7542 6.2 18.2984 5.85166C17.8426 5.50332 17.2871 5.31486 16.7159 5.31486C16.1448 5.31486 15.5892 5.50332 15.1334 5.85166C14.6776 6.2 14.3465 6.68923 14.1902 7.24519H19.2416Z"
                fill="#8B5CF6"
              />
            </svg>
          </a>
          <a
            href="/"
            className="size-10 flex items-center justify-center bg-primary-foreground rounded-full"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.05845 5.9686C1.10276 5.0004 1.25436 4.37596 1.45938 3.84591L1.46214 3.83859C1.6653 3.29922 1.98357 2.8106 2.39478 2.40674L2.40055 2.40107L2.40622 2.3953C2.81041 1.98356 3.2992 1.66561 3.8381 1.46298L3.8474 1.45942C4.37624 1.25376 4.99946 1.10273 5.96847 1.05843M1.05845 5.9686C1.01187 7.00309 1 7.32376 1 10.0059C1 12.6888 1.01122 13.0087 1.05843 14.0434M1.05845 5.9686L1.05845 6.22955M1.46298 16.1738C1.66561 16.7127 1.98356 17.2015 2.3953 17.6057L2.40106 17.6113L2.40672 17.6171C2.8106 18.0283 3.29923 18.3466 3.83861 18.5497L3.84666 18.5528C4.37598 18.7581 4.99951 18.9091 5.96847 18.9534M1.46298 16.1738L1.45942 16.1645C1.25377 15.6356 1.10273 15.0124 1.05843 14.0434M1.46298 16.1738L1.45083 16.1098M1.05843 14.0434L1.07429 14.1269M1.05843 14.0434L1.05843 13.7818M1.45083 16.1098L1.07429 14.1269M1.45083 16.1098C1.29091 15.6873 1.12624 15.0978 1.07429 14.1269M1.45083 16.1098C1.45644 16.1246 1.46204 16.1392 1.46764 16.1536C1.67045 16.7004 1.99179 17.1954 2.40856 17.6032C2.81621 18.0199 3.31108 18.3412 3.85763 18.544C4.29625 18.7149 4.91429 18.8934 5.96832 18.9417C7.03202 18.9901 7.36065 19 10.0059 19C12.6512 19 12.9801 18.9901 14.0438 18.9417C15.0992 18.8933 15.7165 18.7138 16.1535 18.5443C16.7004 18.3416 17.1956 18.0202 17.6033 17.6032C18.02 17.1956 18.3412 16.7007 18.544 16.1542C18.7149 15.7156 18.8934 15.0976 18.9417 14.0435C18.9901 12.9798 19 12.6506 19 10.0059C19 7.36131 18.9901 7.03174 18.9417 5.96805C18.8931 4.9072 18.7119 4.28896 18.5416 3.8515C18.319 3.27674 18.0366 2.84204 17.6026 2.40805C17.1695 1.97578 16.736 1.69328 16.1608 1.47041C15.7218 1.29877 15.1031 1.11871 14.0438 1.07017C13.9517 1.06597 13.8651 1.06207 13.782 1.05844M1.07429 14.1269C1.07283 14.0995 1.07145 14.0718 1.07017 14.0438C1.06597 13.9516 1.06206 13.8649 1.05843 13.7818M5.96847 1.05843C7.0032 1.01122 7.32376 1 10.0059 1C12.6881 1 13.0085 1.01186 14.043 1.05844M5.96847 1.05843L6.23009 1.05843M14.043 1.05844L13.782 1.05844M14.043 1.05844C15.0113 1.10273 15.6359 1.25431 16.166 1.45935L16.1733 1.46214C16.7127 1.6653 17.2013 1.98357 17.6051 2.39478L17.6107 2.40049L17.6165 2.4061C18.0277 2.81 18.346 3.29875 18.549 3.83827L18.5524 3.8474C18.7581 4.37624 18.9091 4.99946 18.9534 5.96847M6.23009 1.05843L13.782 1.05844M6.23009 1.05843C7.10627 1.02012 7.59055 1.01187 10.0059 1.01187C12.4215 1.01187 12.9057 1.02012 13.782 1.05844M6.23009 1.05843C6.14693 1.06206 6.06025 1.06597 5.96805 1.07017C4.9127 1.11853 4.29538 1.29808 3.85832 1.4676C3.3094 1.67108 2.81261 1.99413 2.40396 2.41335C1.97402 2.84506 1.6926 3.27768 1.47044 3.85101C1.29879 4.29003 1.1187 4.90897 1.07015 5.96832C1.06597 6.06023 1.06208 6.14665 1.05845 6.22955M18.9534 14.0434C18.9091 15.0124 18.7581 15.6359 18.5528 16.1652L18.5497 16.1733C18.3466 16.7127 18.0283 17.2013 17.6171 17.6051L17.6113 17.6108L17.6057 17.6166C17.2015 18.0283 16.7127 18.3463 16.1738 18.5489L16.1645 18.5524C15.6356 18.7581 15.0124 18.9091 14.0434 18.9534M1.05843 13.7818C1.02012 12.9056 1.01187 12.4213 1.01187 10.0059C1.01187 7.58981 1.02011 7.10621 1.05845 6.22955M1.05843 13.7818L1.05845 6.22955M8.40417 13.8729C8.912 14.0833 9.45628 14.1916 10.0059 14.1916C11.116 14.1916 12.1807 13.7506 12.9656 12.9656C13.7506 12.1807 14.1916 11.116 14.1916 10.0059C14.1916 8.89584 13.7506 7.83121 12.9656 7.04625C12.1807 6.26129 11.116 5.82031 10.0059 5.82031C9.45628 5.82031 8.91199 5.92857 8.40417 6.13892C7.89635 6.34927 7.43493 6.65758 7.04626 7.04625C6.65759 7.43492 6.34927 7.89634 6.13893 8.40416C5.92858 8.91199 5.82032 9.45627 5.82032 10.0059C5.82032 10.5556 5.92858 11.0999 6.13893 11.6077C6.34927 12.1155 6.65759 12.5769 7.04626 12.9656C7.43493 13.3543 7.89635 13.6626 8.40417 13.8729ZM7.03693 7.03692C7.82436 6.24949 8.89235 5.80712 10.0059 5.80712C11.1195 5.80712 12.1875 6.24949 12.9749 7.03692C13.7624 7.82435 14.2048 8.89234 14.2048 10.0059C14.2048 11.1195 13.7624 12.1875 12.9749 12.9749C12.1875 13.7624 11.1195 14.2047 10.0059 14.2047C8.89234 14.2047 7.82436 13.7624 7.03693 12.9749C6.2495 12.1875 5.80713 11.1195 5.80713 10.0059C5.80713 8.89234 6.2495 7.82435 7.03693 7.03692ZM16.5691 4.82954C16.5691 5.14827 16.4425 5.45395 16.2171 5.67933C15.9917 5.90471 15.686 6.03132 15.3673 6.03132C15.0486 6.03132 14.7429 5.90471 14.5175 5.67933C14.2921 5.45395 14.1655 5.14827 14.1655 4.82954C14.1655 4.51081 14.2921 4.20513 14.5175 3.97975C14.7429 3.75438 15.0486 3.62776 15.3673 3.62776C15.686 3.62776 15.9917 3.75438 16.2171 3.97975C16.4425 4.20513 16.5691 4.51081 16.5691 4.82954Z"
                stroke="#8B5CF6"
                stroke-width="1.6"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="/"
            className="size-10 flex items-center justify-center bg-primary-foreground rounded-full"
          >
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.75 0C14.7207 0 18.75 4.0293 18.75 9C18.75 13.9707 14.7207 18 9.75 18C8.21816 18.0022 6.71132 17.6118 5.37331 16.866L5.09881 16.7058L2.37001 17.5086C2.22151 17.5523 2.0643 17.5575 1.91327 17.5234C1.76225 17.4894 1.62241 17.4174 1.50703 17.3142C1.39165 17.2109 1.30454 17.08 1.25396 16.9337C1.20338 16.7873 1.191 16.6305 1.21801 16.4781L1.24141 16.38L2.04421 13.6512C1.19547 12.2484 0.747827 10.6396 0.750008 9C0.750008 4.0293 4.77931 0 9.75 0ZM9.75 1.8C8.46087 1.79977 7.19532 2.14565 6.0855 2.80153C4.97569 3.45741 4.06233 4.39924 3.44079 5.52864C2.81926 6.65805 2.51235 7.93362 2.55213 9.22214C2.5919 10.5107 2.9769 11.7649 3.66691 12.8538C3.84511 13.1346 3.92161 13.4802 3.86131 13.8231L3.82621 13.9698L3.42931 15.3207L4.78021 14.9238C5.16991 14.8086 5.5749 14.8788 5.8962 15.0831C6.8397 15.6805 7.90922 16.0503 9.02023 16.1631C10.1312 16.276 11.2533 16.1289 12.2976 15.7334C13.342 15.338 14.2801 14.705 15.0377 13.8845C15.7953 13.0641 16.3516 12.0787 16.6628 11.0062C16.974 9.93369 17.0314 8.80351 16.8305 7.70499C16.6297 6.60648 16.176 5.56974 15.5055 4.67674C14.835 3.78373 13.9659 3.05895 12.967 2.55967C11.9681 2.0604 10.8667 1.80032 9.75 1.8ZM7.1418 4.6656C7.24145 4.62245 7.35061 4.60598 7.45854 4.61782C7.56648 4.62965 7.66948 4.66938 7.7574 4.7331C8.211 5.0643 8.571 5.5089 8.8806 5.9427L9.1749 6.3693L9.3126 6.5718C9.39205 6.68797 9.43105 6.82706 9.42357 6.96761C9.41608 7.10815 9.36254 7.24232 9.2712 7.3494L9.2037 7.4178L8.3721 8.0352C8.33208 8.06418 8.30391 8.10668 8.29283 8.15483C8.28174 8.20299 8.28848 8.25353 8.3118 8.2971C8.5008 8.6391 8.8347 9.14939 9.2181 9.53279C9.6024 9.91619 10.1361 10.2726 10.5015 10.4823C10.5807 10.5273 10.6761 10.5129 10.7409 10.4544L10.7751 10.4139L11.316 9.59039C11.4153 9.45811 11.5619 9.36942 11.7252 9.3429C11.8885 9.31639 12.0557 9.35413 12.1917 9.44819L12.6804 9.78929C13.1664 10.1358 13.6335 10.5084 14.0034 10.9809C14.0722 11.0695 14.1159 11.175 14.13 11.2863C14.1441 11.3976 14.128 11.5106 14.0835 11.6136C13.7271 12.4452 12.8244 13.1535 11.8866 13.1193L11.7435 13.1103L11.5716 13.0941C11.5392 13.0902 11.5068 13.086 11.4744 13.0815L11.2602 13.0455C10.4286 12.8889 9.0957 12.4173 7.7142 11.0367C6.3336 9.65519 5.86201 8.3223 5.70541 7.4907L5.66941 7.2765L5.64691 7.0893L5.63521 6.9318C5.63378 6.90931 5.63258 6.88681 5.63161 6.8643C5.5974 5.9247 6.30931 5.022 7.1418 4.6656Z"
                fill="#8B5CF6"
              />
            </svg>
          </a>
          <a
            href="/"
            className="size-10 flex items-center justify-center bg-primary-foreground rounded-full"
          >
            <svg
              width="21"
              height="16"
              viewBox="0 0 21 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5 2C20.5 0.9 19.6 0 18.5 0H2.5C1.4 0 0.5 0.9 0.5 2V14C0.5 15.1 1.4 16 2.5 16H18.5C19.6 16 20.5 15.1 20.5 14V2ZM18.5 2L10.5 7L2.5 2H18.5ZM18.5 14H2.5V4L10.5 9L18.5 4V14Z"
                fill="#8B5CF6"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
