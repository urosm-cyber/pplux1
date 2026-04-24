"use client";

/**
 * Thin client wrapper that allows server components to use framer-motion
 * whileInView animations without propagating "use client" to the parent tree.
 * Children are rendered as server HTML and hydrated by this wrapper on the client.
 */
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface MotionDivProps extends HTMLMotionProps<"div"> {
  children?: ReactNode;
}

export function MotionDiv({ children, ...props }: MotionDivProps) {
  return <motion.div {...props}>{children}</motion.div>;
}

interface MotionSpanProps extends HTMLMotionProps<"span"> {
  children?: ReactNode;
}

export function MotionSpan({ children, ...props }: MotionSpanProps) {
  return <motion.span {...props}>{children}</motion.span>;
}
