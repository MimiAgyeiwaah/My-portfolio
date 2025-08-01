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
import { AnimatedGroup } from "../components/ui/animated-group";

function Home() {
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);
  const [activeMockup, setActiveMockup] = React.useState(0);

  const mainContentRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutTextRef = useRef<HTMLParagraphElement>(null);
  const aboutTextHeaderRef = useRef<HTMLDivElement>(null);
  const recentWorksHeaderRef = useRef<HTMLDivElement>(null);
  const recentWorksTextRef = useRef<HTMLParagraphElement>(null);
  const recentWorksMockupRef = useRef<HTMLDivElement>(null);
  const testimonialSectionRef = useRef<HTMLElement>(null);
  // const testimonialHeaderRef = useRef<HTMLDivElement>(null);
  // const testimonialCardRef = useRef<HTMLDivElement>(null);

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

  const { scrollYProgress: recentWorksHeaderProgress } = useScroll({
    target: recentWorksHeaderRef,
    offset: ["start end", "start center"], // start when top hits bottom, end at center
  });

  const { scrollYProgress: recentWorksTextProgress } = useScroll({
    target: recentWorksTextRef,
    offset: ["start end", "start center"], // start when top hits bottom, end at center
  });

  const { scrollYProgress: recentWorksMockupProgress } = useScroll({
    target: recentWorksMockupRef,
    offset: ["start end", "start center"],
  });

  const { scrollYProgress: testimonialCardProgress } = useScroll({
    target: testimonialSectionRef,
    offset: ["start 60%", "start 20%"], // start when top of section hits 60% of viewport, end at center
  });

  const { scrollYProgress: testimonialHeaderProgress } = useScroll({
    target: testimonialSectionRef,
    offset: ["start 60%", "start 40%"], // start when top of section hits 60% of viewport, end at center
  });

  // Create smooth spring animations for X, Y, and opacity
  const rawYTestimonialHeader = useTransform(
    testimonialHeaderProgress,
    [0, 0.4],
    [-150, 0]
  );
  const rawOpacityTestimonialHeader = useTransform(
    testimonialHeaderProgress,
    [0, 0.4],
    [0, 1]
  );

  const yTestimonialHeader = useSpring(rawYTestimonialHeader, {
    stiffness: 100,
    damping: 20,
  });
  const opacityTestimonialHeader = useSpring(rawOpacityTestimonialHeader, {
    stiffness: 50,
    damping: 15,
  });
  // About Transform Animations
  const rawX = useTransform(scrollYProgress, [0, 1], [-400, 0]);
  const rawY = useTransform(scrollYProgress, [0, 1], [400, 0]);
  const rawOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  // About Spring Animations
  const x = useSpring(rawX, { stiffness: 100, damping: 20 });
  const y = useSpring(rawY, { stiffness: 100, damping: 20 });
  const opacity = useSpring(rawOpacity, { stiffness: 50, damping: 15 });

  // About Text Transform Animations
  const rawXAboutText = useTransform(aboutTextProgress, [0, 1], [400, 0]);
  const rawYAboutText = useTransform(aboutTextProgress, [0, 1], [-400, 0]);
  const rawOpacityAboutText = useTransform(
    aboutTextProgress,
    [0.95, 1],
    [0, 1]
  );
  const rawOpacityAboutTextHeader = useTransform(
    aboutTextHeaderProgress,
    [0.95, 1],
    [0, 1]
  );
  const rawXAboutTextHeader = useTransform(
    aboutTextHeaderProgress,
    [0, 1],
    [-60, 10]
  );
  const rawYAboutTextHeader = useTransform(
    aboutTextHeaderProgress,
    [0, 1],
    [10, -20]
  );

  // Recent Works Header Transform Animations
  const rawXRecentWorksHeader = useTransform(
    recentWorksHeaderProgress,
    [0, 1],
    [0, 0]
  );
  const rawYRecentWorksHeader = useTransform(
    recentWorksHeaderProgress,
    [0, 1],
    [-60, 0]
  );

  // Recent Works Text Transform Animations
  const rawXRecentWorksText = useTransform(
    recentWorksTextProgress,
    [0, 1],
    [-400, 0]
  );
  const rawYRecentWorksText = useTransform(
    recentWorksTextProgress,
    [0, 1],
    [0, 0]
  );
  // const rawOpacityRecentWorksText = useTransform(recentWorksTextProgress, [0.95, 1], [0, 1]);

  // Recent Works Mockup Transform Animations
  const rawXRecentWorksMockup = useTransform(
    recentWorksMockupProgress,
    [0, 1],
    [400, 0]
  );
  const rawYRecentWorksMockup = useTransform(
    recentWorksMockupProgress,
    [0, 1],
    [0, 0]
  );
  const rawOpacityRecentWorksMockup = useTransform(
    recentWorksMockupProgress,
    [0.95, 1],
    [0, 1]
  );

  // Testimonial Card Animation
  const rawYTestimonialCard = useTransform(
    testimonialCardProgress,
    [0.5, 0.85],
    [-350, 0]
  );
  const rawOpacityTestimonialCard = useTransform(
    testimonialCardProgress,
    [0.5, 0.85],
    [0, 1]
  );

  // About Text Header Transform Animations
  const xAboutTextHeader = useSpring(rawXAboutTextHeader, {
    stiffness: 100,
    damping: 20,
  });
  const yAboutTextHeader = useSpring(rawYAboutTextHeader, {
    stiffness: 100,
    damping: 20,
  });
  const opacityAboutTextHeader = useSpring(rawOpacityAboutTextHeader, {
    stiffness: 50,
    damping: 15,
  });

  // Recent Works Header Spring Animations
  const xRecentWorksHeader = useSpring(rawXRecentWorksHeader, {
    stiffness: 100,
    damping: 20,
  });
  const yRecentWorksHeader = useSpring(rawYRecentWorksHeader, {
    stiffness: 100,
    damping: 20,
  });

  // Recent Works Text Spring Animations
  const xRecentWorksText = useSpring(rawXRecentWorksText, {
    stiffness: 100,
    damping: 20,
  });
  const yRecentWorksText = useSpring(rawYRecentWorksText, {
    stiffness: 100,
    damping: 20,
  });
  // const opacityRecentWorksText = useSpring(rawOpacityRecentWorksText, {
  //   stiffness: 50,
  //   damping: 15,
  // });

  // Recent Works Mockup Spring Animations
  const xRecentWorksMockup = useSpring(rawXRecentWorksMockup, {
    stiffness: 100,
    damping: 20,
  });
  const yRecentWorksMockup = useSpring(rawYRecentWorksMockup, {
    stiffness: 100,
    damping: 20,
  });
  const opacityRecentWorksMockup = useSpring(rawOpacityRecentWorksMockup, {
    stiffness: 50,
    damping: 15,
  });

  // Testimonial Card Spring Animation
  const yTestimonialCard = useSpring(rawYTestimonialCard, {
    stiffness: 100,
    damping: 15,
  });
  const opacityTestimonialCard = useSpring(rawOpacityTestimonialCard, {
    stiffness: 50,
    damping: 15,
  });

  // About Text Spring Animations
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
    <div
      ref={mainContentRef}
      className="w-full min-h-full space-y-16 md:space-y-24 flex flex-col items-center font-montserrat bg-background"
    >
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
          <span className="text-2xl md:text-4xl lg:text-5xl leading-px flex items-center text-gray-500">
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
          <p className="text-2xl md:text-4xl lg:text-5xl transition-transform duration-500 delay-100 md:leading-14 text-center mx-auto md:max-w-7xl">
            UI/UX & Graphic Designer creating <br className="hidden md:block" />
            seamless and visually stunning experiences
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
          <Button
            variant={"link"}
            asChild
            className="hover:no-underline px-10 py-6 font-semibold min-[450px]:text-base text-sm"
          >
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
            style={{
              opacity: opacityAboutTextHeader,
              y: yAboutTextHeader,
              x: xAboutTextHeader,
            }}
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
            I'm a passionate creative with a love for intentional design,
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
          <motion.div
            ref={recentWorksHeaderRef}
            style={{ y: yRecentWorksHeader, x: xRecentWorksHeader }}
            className="w-fit flex flex-col lg:items-start items-center gap-1"
          >
            <b className="text-[30px] sm:text-[40px]">Recent Works</b>
            <hr className="w-2/5 border-2 border-primary" />
          </motion.div>
          <motion.p
            ref={recentWorksTextRef}
            style={{ y: yRecentWorksText, x: xRecentWorksText }}
            transition={{
              duration: 0.2,
              delay: 0.2,
            }}
            className="md:text-[30px] lg:text-[40px] lg:leading-[50px] font-[200]"
          >
            Explore a selection of my recent projects showcasing my design
            approach and problem solving skills.
          </motion.p>
        </div>
        <motion.div
          ref={recentWorksMockupRef}
          style={{
            y: yRecentWorksMockup,
            x: xRecentWorksMockup,
            opacity: opacityRecentWorksMockup,
          }}
          className="w-full min-[750px]:w-[700px] lg:w-full h-[400px] xl:h-[490px] lg:flex-1 flex items-center relative overflow-hidden rounded-r-2xl sm:rounded-r-[3rem] lg:rounded-r-none rounded-l-2xl sm:rounded-l-[3rem]"
        >
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
        </motion.div>
      </section>

      <section
        ref={testimonialSectionRef}
        className="w-full md:min-h-[100dvh] py-[4rem] md:py-[8rem] px-[0.5rem] flex flex-col items-center gap-[2rem] sm:gap-[5rem] bg-primary-foreground"
      >
        <motion.div
          // ref={testimonialHeaderRef}
          style={{ y: yTestimonialHeader, opacity: opacityTestimonialHeader }}
          transition={{
            duration: 0.1,
            delay: 3.2,
          }}
          className="w-fit flex flex-col gap-1 items-center"
        >
          <h1 className="font-semibold text-[30px] sm:text-[40px]">
            Client Testimonials
          </h1>
          <hr className="w-[100px] border-2 border-primary" />
          <p className="md:w-[600px] text-center text-gray-700 text-sm sm:text-base md:text-[18px] mt-3">
            Here's what clients and collaborators have to say about working with
            me.
          </p>
        </motion.div>
        <motion.div
          // ref={testimonialCardRef}
          style={{ y: yTestimonialCard, opacity: opacityTestimonialCard }}
          transition={{
            duration: 1,
            delay: 5.0,
            ease: "circIn",
          }}
          className="p-6 pt-0 flex flex-col sm:gap-4 rounded-2xl shadow-lg bg-white lg:w-[800px] min-h-[247px] md:text-left text-center"
        >
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
        </motion.div>

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
      <section className="w-full px-[0.5rem] gap-y-6 md:gap-0 flex flex-col items-center justify-between h-full space-y-20 mt-20">
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -300, opacity: 0 }}
          transition={{
            delay: 1.0,
            ease: "circInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="w-fit flex flex-col gap-1 items-center space-y-1"
        >
          <h1 className="font-semibold text-[30px] sm:text-[40px]">
            Get In Touch
          </h1>
          <hr className="w-[80px] border-2 border-primary" />
          <p className="sm:w-[600px] text-center sm:text-base text-sm ">
            Let's create something amazing together. Reach out for
            collaborations, question, or just to say hello.{" "}
          </p>
        </motion.div>
        <motion.a
          whileInView={{ y: 0, x: 0, opacity: 1 }}
          initial={{ y: -200, x: -200, opacity: 0 }}
          transition={{
            delay: 2.0,
            ease: "circInOut",
            type: "spring",
            stiffness: 100,
          }}
          href="/contact"
          className=" group flex mt-12 hover:bg-primary  items-end justify-between p-1 rounded-md w-40 h-16 gap-1  bg-[#21212114] hover:text-white"
        >
          <span className="text-gray-500 group-hover:text-white transition-all duration-300 p-1">
            Let’s Talk
          </span>
          <div className="h-full flex flex-col items-end">
            <span className="bg-black/70 group-hover:bg-white transition-all duration-300 rounded-full p-0.5 m-1">
              <ArrowRight className="size-4 text-sm text-gray-100 group-hover:text-black -rotate-45" />
            </span>
          </div>
        </motion.a>

        {/* <div > */}
        <AnimatedGroup
          // className='grid h-full grid-cols-2 gap-8 p-12 md:grid-cols-3 lg:grid-cols-4'
          className="flex items-start justify-center w-full gap-1 space-y-12 md:space-x-14 space-x-8 mt-5 "
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            },
            item: {
              hidden: {
                opacity: 0,
                filter: "blur(12px)",
                y: -60,
                rotateX: 90,
              },
              visible: {
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                rotateX: 0,
                transition: {
                  type: "spring",
                  bounce: 0.3,
                  duration: 1,
                  delay: 0.1,
                },
              },
            },
          }}
        >
          <Link
            to={"#"}
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
            to={"#"}
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
            to={"#"}
            className="group hover:bg-primary transition-all duration-300 rounded-full w-10 h-10 bg-primary/10 flex justify-center items-center"
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
                className="group-hover:stroke-white transition-all duration-300"
              />
            </svg>
          </Link>

          <Link
            to={"#"}
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
            to={"#"}
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
        </AnimatedGroup>
      </section>
    </div>
  );
}

export default Home;
