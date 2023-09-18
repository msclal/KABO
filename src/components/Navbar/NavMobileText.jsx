import React from "react";
import { motion } from "framer-motion";

export default function MobileNavText({ children, className }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          ease: [1, 0.55, 0.45, 1],
          delay: 1.0,
        },
      }}
      exit={{
        opacity: 0,
        transition: { ease: [0, 0.55, 0.45, 1], duration: 0.5 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
