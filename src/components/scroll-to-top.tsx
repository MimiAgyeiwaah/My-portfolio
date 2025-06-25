import { ArrowUp } from "lucide-react";
import { forwardRef, useEffect, useState, RefObject } from "react";

export interface ScrollToTopProps {
  ref: RefObject<HTMLDivElement | null>;
}

const ScrollToTop = forwardRef<HTMLDivElement, ScrollToTopProps>(
  (_props, ref) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const element = (ref as RefObject<HTMLDivElement | null>)?.current;
      if (!element) return;

      const toggleVisibility = () => {
        setVisible(element.scrollTop > 200);
      };

      element.addEventListener("scroll", toggleVisibility);

      return () => {
        element.removeEventListener("scroll", toggleVisibility);
      };
    }, [ref]);

    const scrollToTop = () => {
      const element = (ref as RefObject<HTMLDivElement | null>)?.current;
      if (element) {
        element.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    return (
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-primary text-white text-xl shadow-md flex items-center justify-center transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        } hover:bg-primary/80`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="size-5" />
      </button>
    );
  }
);

ScrollToTop.displayName = "ScrollToTop"; // 🛑 Required when using forwardRef in React

export default ScrollToTop;
