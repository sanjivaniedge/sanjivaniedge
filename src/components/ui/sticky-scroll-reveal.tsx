"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
  containerClassName,
  titleClassName,
  descriptionClassName,
  enableBgAnimation = true,
  showOnMobile = false,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  enableBgAnimation?: boolean;
  showOnMobile?: boolean;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const backgroundGradient =
    linearGradients[activeCard % linearGradients.length];

  return (
    <motion.div
      animate={
        enableBgAnimation
          ? { backgroundColor: backgroundColors[activeCard % backgroundColors.length] }
          : {}
      }
      className={cn(
        "relative flex h-screen justify-center space-x-10 overflow-y-auto rounded-md p-10",
        containerClassName,
      )}
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-8">
              <div className="rounded-2xl bg-[color:var(--tile-fill)] border border-[color:var(--tile-stroke)] p-10">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.6 }}
                  className={cn("text-2xl font-semibold tracking-wide text-foreground", titleClassName)}
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.6 }}
                  className={cn("mt-6 text-muted", descriptionClassName)}
                >
                  {item.description}
                </motion.p>
              </div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: enableBgAnimation ? backgroundGradient : undefined }}
        className={cn(
          showOnMobile
            ? "sticky top-10 block h-60 w-80 overflow-hidden rounded-md bg-white"
            : "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
          contentClassName,
        )}
      >
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="h-full w-full flex items-center justify-center"
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </div>
    </motion.div>
  );
};
