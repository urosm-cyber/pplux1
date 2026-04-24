"use client";

import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { testimonials } from "../data";

/**
 * Client island — manages testimonial carousel state.
 * Extracted from the monolithic PerfectFitContent so the parent can be a server component.
 */
export function TestimonialsSlider() {
  const [active, setActive] = useState(0);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-[300px] flex flex-col items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            id={`testimonial-panel-${active}`}
            role="tabpanel"
            aria-label={`Pričevanje ${active + 1} od ${testimonials.length}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <blockquote>
              <p className="text-xl md:text-2xl font-heading font-light italic text-foreground/90 leading-relaxed max-w-2xl mx-auto">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <footer className="mt-8">
                <p className="text-sm font-medium tracking-widest uppercase text-tertiary">
                  {testimonials[active].name}
                </p>
                <p className="text-xs text-muted-foreground/60 tracking-widest mt-1">
                  {testimonials[active].location}
                </p>
              </footer>
            </blockquote>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots — ARIA tablist */}
        <div
          role="tablist"
          aria-label="Pričevanja strank"
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-4"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") setActive((prev) => (prev + 1) % testimonials.length);
            if (e.key === "ArrowLeft") setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
          }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={active === i}
              aria-controls={`testimonial-panel-${i}`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              aria-label={`Pričevanje ${i + 1}`}
              className={`group relative p-3 min-w-[44px] min-h-[44px] flex items-center justify-center transition-all duration-500 ${
                active === i ? "opacity-100" : "opacity-30 hover:opacity-50"
              }`}
            >
              <div
                className={`h-1 rounded-full transition-all duration-500 ${
                  active === i ? "w-8 bg-tertiary" : "w-4 bg-foreground"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </MotionConfig>
  );
}
