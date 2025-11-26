"use client";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const TimelineItem = ({ item, index }: { item: TimelineEntry; index: number }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, {
    once: false,
    margin: "-20% 0px -20% 0px"
  });

  return (
    <div
      key={index}
      ref={itemRef}
      className="flex justify-start pt-10 md:pt-20 md:gap-20"
    >
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
        </div>
        <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-black ">
          {item.title}
        </h3>
      </div>

      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-black dark:text-neutral-500">
          {item.title}
        </h3>
        <motion.div
          initial={{ filter: "grayscale(100%)" }}
          animate={{ filter: isInView ? "grayscale(0%)" : "grayscale(100%)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {item.content}
        </motion.div>
      </div>
    </div>
  );
};

export const Timeline = ({
  data,
  title = "",
  description = "",
  titleClassName,
  className,
  descriptionClassName,
}: {
  data: TimelineEntry[];
  title?: string;
  description?: string;
  titleClassName?: string;
  className?: string;
  descriptionClassName?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  useEffect(() => {
    if (ref.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setHeight(entry.contentRect.height);
        }
      });
      resizeObserver.observe(ref.current);
      return () => resizeObserver.disconnect();
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={className || "w-full bg-white dark:bg-neutral-950 font-sans "}
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-0 md:py-10 flex flex-col md:flex-row justify-between">
        <h2
          className={titleClassName || "text-4xl md:text-6xl font-medium text-center"}
          style={{
            fontFamily: "Manrope",
            fontWeight: 500,
            lineHeight: "1.366em",
          }}
        >
          {title}
        </h2>
        <p className={descriptionClassName || "text-neutral-700 mt-5 text-sm md:text-base max-w-sm"}>
          {description}
        </p>
      </div>

      <div ref={ref} className="relative max-w-8xl mx-auto pb-10">
        {data.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
