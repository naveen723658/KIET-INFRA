"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Hero() {
  const [[page, direction], setPage] = useState([0, 0]);

  const images = ["/hero/1.png", "/hero/2.png", "/hero/3.png", "/hero/4.png"];

  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [page]);
  return (
    <div className="w-full overflow-hidden flex gap-2 justify-center items-center h-56 lg:h-96">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="w-full h-full object-cover object-center"
          key={page}
          src={images[imageIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            opacity: { duration: 0.5 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
    </div>
  );
}
