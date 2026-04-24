"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "../data";

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const slug = question.slice(0, 30).replace(/\s+/g, "-").replace(/[^\w-]/g, "");
  const panelId = `faq-panel-${slug}`;
  const triggerId = `faq-btn-${slug}`;

  return (
    <div className="border-b border-tertiary/20 last:border-none">
      <button
        id={triggerId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 group"
      >
        <span className="text-lg font-medium text-foreground group-hover:text-tertiary transition-colors">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-tertiary shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-tertiary transition-colors shrink-0" />
        )}
      </button>
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-muted-foreground leading-relaxed whitespace-pre-line">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

/**
 * Client island — renders the full FAQ accordion list.
 * Extracted from the monolithic PerfectFitContent so the parent can be a server component.
 */
export function FaqAccordion() {
  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
