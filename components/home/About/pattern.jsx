"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Pattern() {
  const ref = useRef(null);
  const [revIsVisible, setRevIsVisible] = useState(false);
  const [topPosition, setTopPosition] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setRevIsVisible(entries[0].isIntersecting);
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  const handleScroll = () => {
    const scrollY = window.scrollY; // Get current scroll Y position
    if (scrollY > 800) {
      const scrollDelta = scrollY - window.scrollYPrev; // Calculate scroll delta
      const newTopPosition = Math.min(
        Math.max(-40, topPosition - scrollDelta), // Subtract scrollDelta for reversal
        40
      );
      setTopPosition(newTopPosition);
      window.scrollYPrev = scrollY; // Store previous scrollY for smooth transitions
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.scrollYPrev = window.scrollY; // Set initial scrollY for first scroll event
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.div
      ref={ref}
      className="absolute top-0 -left-8 w-full h-full z-10"
      style={{ top: `${topPosition}px`, transition: "top 2s ease-in-out" }}
    >
      <div className="w-[2px] rotate-45 absolute top-0 left-12 md:left-8 h-8 bg-[#037aad]"></div>
      <div className="w-12 mix-blend-darken h-24 bg-[#8ad6f7c7] align-bottom absolute -bottom-16 left-8 skew-x-0 skew-y-[-45deg] hidden md:block"></div>
      <div className="w-16 mix-blend-darken h-16 skew-x-[-45deg] skew-y-[45deg] bg-[#3399cc96] align-bottom absolute top-4 -right-16"></div>
      <div className="w-[3px] rotate-45 h-8 md:h-20 absolute -bottom-3 md:-bottom-14 -right-7 md:-right-8 bg-[#8ad6f7c7]"></div>
      <div className="w-[5px] rotate-45 h-16 absolute top-1/3 -left-8 bg-[#99ccff] hidden md:block"></div>
    </motion.div>
  );
}
