"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  delay?: number;
  staggerChildren?: number;
  className?: string;
}

export default function StaggerContainer({
  children,
  delay = 0,
  staggerChildren = 0.15,
  className = "",
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: staggerChildren,
          },
        },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      style={{ willChange: "transform, opacity" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
