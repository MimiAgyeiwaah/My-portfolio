// import { logo } from '../../public/assets'
import React from "react";
import { Menu, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeToggleButton from "./ui/theme-toggle-button";

function Header() {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div className="w-full min-h-[80px] sticky top-0 z-20 bg-background flex items-center justify-between px-[0.5rem] sm:px-[1rem] md:px-[5rem] xl:px-[10rem]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: "circInOut",
          type: "spring",
          stiffness: 100,
        }}
        className="flex items-center gap-3"
      >
        <Link to="/" className="flex items-center gap-3">
          <img
            src={"/assets/logo.svg"}
            alt="logo"
            className="w-16 sm:w-20 dark:invert"
          />
        </Link>
      </motion.div>
      <motion.aside
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: "circInOut",
          type: "spring",
          stiffness: 100,
        }}
        className="flex items-center gap-3 relative h-full text-white "
      >
        <div
          className={`absolute top-0 right-0 w-[283px] h-[330px] z-10 flex flex-col justify-between transition-all duration-500 bg-primary dark:bg-secondary ${
            showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center justify-between p-2">
            <ThemeToggleButton
              variant="circle-blur"
              start="top-right"
              // variant="gif"
              // url="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3JwcXdzcHd5MW92NWprZXVpcTBtNXM5cG9obWh0N3I4NzFpaDE3byZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/WgsVx6C4N8tjy/giphy.gif"
            />

            <Plus
              onClick={() => setShowMenu(false)}
              className=" rotate-45 size-7 cursor-pointer transition-all duration-500 hover:-rotate-45 mr-1"
            />
          </div>
          <div className="flex flex-col items-start justify-center p-[2rem] gap-5 w-full">
            <Link
              onClick={() => setShowMenu(false)}
              to="/"
              className="hover:text-indigo-300 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              onClick={() => setShowMenu(false)}
              to="/about"
              className="hover:text-indigo-300 transition-all duration-300"
            >
              About
            </Link>
            <Link
              onClick={() => setShowMenu(false)}
              to="/projects"
              className="hover:text-indigo-300 transition-all duration-300"
            >
              Projects
            </Link>
          </div>
        </div>

        <button
          onClick={() => setShowMenu(true)}
          className={`group size-[44px] hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center rounded-sm bg-[#8b5cf619] cursor-pointer`}
        >
          <Menu className="size-5 text-primary group-hover:text-white" />
        </button>
      </motion.aside>
      {/* {showMenu ? <div onClick={()=>setShowMenu(false)} className="fixed top-0 left-0 w-full h-full z-0"></div> : null} */}
    </div>
  );
}

export default Header;
