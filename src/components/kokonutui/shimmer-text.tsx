"use client";

/**
 * @author: @dorian_baffier
 * @description: Shimmer Text
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface Text_01Props {
    text: string;
    className?: string;
    variant?: "light" | "neutral";
}

export default function ShimmerText({
    text = "Text Shimmer",
    className,
    variant = "light",
}: Text_01Props) {
    const gradientClass =
        variant === "light"
            ? "bg-gradient-to-r from-white/40 via-white to-white/40"
            : "bg-gradient-to-r from-neutral-950 via-neutral-400 to-neutral-950 dark:from-white dark:via-neutral-600 dark:to-white";

    return (
        <div className="flex items-center justify-center p-0">
            <motion.div
                className="relative overflow-hidden"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <motion.h1
                    className={cn(
                        "text-3xl font-bold bg-[length:200%_100%] bg-clip-text text-transparent",
                        gradientClass,
                        className
                    )}
                    animate={{
                        backgroundPosition: ["200% center", "-200% center"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        repeat: Number.POSITIVE_INFINITY,
                    }}
                >
                    {text}
                </motion.h1>
            </motion.div>
        </div>
    );
}
