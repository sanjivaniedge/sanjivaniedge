"use client";

import { useEffect, useRef } from "react";
import { EncryptedText } from "./encrypted-text";

interface AnimatedAccordionTitleProps {
    text: string;
    className?: string;
    style?: React.CSSProperties;
    itemIndex: number;
    animatedItems: React.MutableRefObject<Set<number>>;
}

export function AnimatedAccordionTitle({
    text,
    className,
    style,
    itemIndex,
    animatedItems,
}: AnimatedAccordionTitleProps) {
    const hasAnimatedRef = useRef(animatedItems.current.has(itemIndex));

    useEffect(() => {
        // Check if already marked as animated in the parent's Set
        if (animatedItems.current.has(itemIndex)) {
            hasAnimatedRef.current = true;
        } else {
            // Mark as animated after the animation completes
            const timer = setTimeout(() => {
                animatedItems.current.add(itemIndex);
                hasAnimatedRef.current = true;
            }, text.length * 30 + 500); // animation duration + buffer

            return () => clearTimeout(timer);
        }
    }, [itemIndex, animatedItems, text.length]);

    // Always check the ref directly - if already animated, show static text
    if (animatedItems.current.has(itemIndex)) {
        return (
            <span className={className} style={style}>
                {text}
            </span>
        );
    }

    // First time: show encrypted animation
    return (
        <span style={style}>
            <EncryptedText
                text={text}
                className={className}
                revealDelayMs={30}
                flipDelayMs={30}
                revealedClassName="text-[#0075b0]"
                encryptedClassName="text-[#0075b0]/40"
            />
        </span>
    );
}
