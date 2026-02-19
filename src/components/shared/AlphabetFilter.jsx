"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AlphabetFilter({ onSelect, active }) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  letters.unshift("ALL")

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-2 mb-5"
    >
      <div className="flex flex-wrap items-center justify-center gap-1">
        {letters.map((letter, index) => (
          <React.Fragment key={letter}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelect(letter)}
              className={`
                relative w-8 h-8 md:w-10 md:h-10 rounded-lg
                text-sm md:text-base font-medium
                transition-all duration-200
                ${
                  active?.toLowerCase() === letter?.toLowerCase()
                    ? "bg-[var(--brandColor)] text-white shadow-md" 
                    : "text-gray-600 hover:bg-gray-100 hover:text-[var(--brandColor)]"
                }
              `}
            >
              {letter}
              
              {/* Active indicator dot */}
              {active === letter && (
                <motion.span
                  layoutId="activeLetter"
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[var(--brandColor)] rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
            
            {/* Add divider except after last letter */}
            {index !== letters.length - 1 && (
              <span className="text-gray-300 text-sm mx-0.5 hidden sm:inline">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
      
      {/* Active letter indicator */}
      {active && (
        <div className="text-center mt-2 text-xs text-gray-500">
          Showing results for: <span className="font-semibold text-[var(--brandColor)]">{active}</span>
        </div>
      )}
    </motion.div>
  );
}