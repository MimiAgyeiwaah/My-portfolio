import { works } from "../constants";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { InView } from "../components/ui/in-view";
import { motion } from "motion/react";

function Projects() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center w-full min-h-[100dvh] pb-[2rem] px-[0.5rem] sm:px-[1rem] bg-background">
      <section className="w-full py-[2rem] lg:py-[6rem] flex flex-col items-center">
        <div className="flex flex-col items-center gap-1 mb-2">
          <motion.b
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            className="text-[40px]"
          >
            My Works
          </motion.b>
          <hr className="w-3/6 border-2 mb-4 border-primary" />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          className="text-[20px] sm:text-[30px] md:text-[40px] font-[200] lg:w-[1000px] text-center leading-[30px] sm:leading-[40px] md:leading-[50px]"
        >
          Explore a selection of my recent projects showcasing my design
          approach and problem solving skills.
        </motion.p>
      </section>
      <InView
        viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.5,
            },
          },
        }}
      >
        <section className="w-fit grid sm:grid-cols-2 gap-4 md:gap-8">
          {works.map((work, idx) => {
            console.log("work", work);
            return (
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.5,
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 100,
                      delay: 0.1 * idx,
                    },
                  },
                }}
                key={idx}
                className="mb-4"
              >
                <div
                  className="group w-full hover:cursor-pointer min-[1261px]:w-[568px] min-[1261px]:h-[434px] overflow-hidden group relative flex items-center justify-center"
                  key={idx}
                >
                  <div
                    onClick={() => navigate(`/projects/${work.id}`)}
                    className="p-3 absolute group-hover:bg-white rounded-lg group-hover:flex flex sm:hidden scale-75 group-hover:scale-100 transition-all duration-500 items-end group-hover:text-black group hover:bg-primary hover:text-white min-w-[180px] min-h-[70px] cursor-pointer sm:text-gray-600  z-10"
                  >
                    <div className="size-5 rounded-full bg-gray-700 group-hover:bg-primary hover:bg-white text-white group-hover:text-black flex items-center justify-center absolute top-3 right-3">
                      <ArrowRight className="size-4 -rotate-45 group-hover:text-white" />
                    </div>
                    <h1 className="group-hover:text-black hover:text-white">
                      {work.title}
                    </h1>
                  </div>

                  <img
                    src={work.image}
                    alt="projectPreview"
                    className="size-full object-contain group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              </motion.div>
            );
          })}
        </section>
      </InView>
    </div>
  );
}

export default Projects;
