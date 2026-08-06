"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StickyFoodNavbar from "./stickynavbar";

export default function StickyNavbarController() {
  const [showSticky, setShowSticky] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
    const foodMain = document.getElementById("food-main");

    if (!foodMain) return;

    const rect = foodMain.getBoundingClientRect();

    setShowSticky(rect.top <= 0);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <AnimatePresence>
      {showSticky && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="fixed top-0 left-0 right-0 z-[9999]"
        >
          <StickyFoodNavbar />
        </motion.div>
      )}
    </AnimatePresence>
  );
}