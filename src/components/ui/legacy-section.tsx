"use client";
import Image from "next/image";
import Link from "next/link";
import { EdgeLinkButton } from "@/components/ui/edge-link-button";
import type { ReactNode } from "react";

/**
 * Reusable content block rendered over a decorative background tile.
 *
 * The component mirrors the styling used by the “The Legacy Ahead” section
 * and lets callers override the title, paragraphs, CTA, alignment, and image.
 */
export function LegacySection({
  title = "The Legacy Ahead",
  paragraphs = [],
  ctaHref = "/legacy",
  ctaLabel = "Discover",
  imageSrc = "/figma/legacy-bg-229f51.png",
  rotateBg = true,
  align = "right",
  className = "",
  description,
  ctaText,
  titleClassName,
  titleAs = "h3",
  accentClassName = "text-accent",
  showAccent = true,
  sectionClassName,
  tileClassName,
  paddingClass = "px-6 py-8 md:px-[64px] md:py-[67px]",
  contentWidthClass = "w-full md:w-[543px]",
  paragraphClassName = "text-[#606060] text-[16px] md:text-[18px]",
  ctaClassName,
  backgroundClassName,
  overlayClassName,
}: {
  /** Heading displayed at the top (accent dot is appended). */
  title?: string;
  /** One or more paragraphs displayed under the heading. */
  paragraphs?: ReactNode[];
  /** Link destination for the CTA button. */
  ctaHref?: string;
  /** Label text for the CTA button. */
  ctaLabel?: string;
  /** Background image used for the tile. */
  imageSrc?: string;
  /** If true, rotates the background image by 180 degrees. */
  rotateBg?: boolean;
  /** Text alignment and content docking: left or right. */
  align?: "left" | "right";
  /** Optional extra classes for the outer section. */
  className?: string;
  /** Optional shorthand: single paragraph content. */
  description?: ReactNode;
  /** Optional shorthand alias for CTA label. */
  ctaText?: string;
  /** Optional class override for the heading style. */
  titleClassName?: string;
  /** Which HTML heading tag to render for the title. */
  titleAs?: "h2" | "h3" | "h4";
  /** Optional class for the accent dot next to the title. */
  accentClassName?: string;
  /** Toggle the accent dot visibility. */
  showAccent?: boolean;
  /** Extra classes for the outer section wrapper. */
  sectionClassName?: string;
  /** Extra classes for the inner tile container (border, radius). */
  tileClassName?: string;
  /** Padding classes for the inner layout container. */
  paddingClass?: string;
  /** Width classes for the content column. */
  contentWidthClass?: string;
  /** Classes applied to each paragraph text. */
  paragraphClassName?: string;
  /** Classes for the CTA button. */
  ctaClassName?: string;
  /** Extra classes appended to the background image element. */
  backgroundClassName?: string;
  /** Optional overlay element atop the background image. */
  overlayClassName?: string;
}) {
  const dockClasses = align === "right"
    ? "md:justify-end md:items-end"
    : "md:justify-start md:items-start";
  const itemsClasses = align === "right" ? "items-end" : "items-start";
  const textAlignClasses = align === "right" ? "text-right" : "text-left";
  const finalParagraphs: ReactNode[] = (paragraphs && paragraphs.length)
    ? paragraphs
    : description
    ? [description]
    : [];

  const TitleTag = titleAs;
  const defaultTitleClasses = "text-2xl md:text-[48px] font-medium text-[#1A1F3D]";
  const headingClasses = `${titleClassName ?? defaultTitleClasses} ${textAlignClasses}`;

  return (
    <section className={`max-w-6xl px-4 pt-12 ${className} ${sectionClassName ?? ""}`}>
      <div className={`relative rounded-[5px] border border-[color:var(--tile-stroke)] overflow-hidden ${tileClassName ?? ""}`}>
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt="Decorative background"
            fill
            className={`object-cover md:object-fill ${rotateBg ? "rotate-180" : ""} ${backgroundClassName ?? ""}`}
            priority
          />
          {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`} />}
        </div>
        <div className={`relative flex justify-center ${dockClasses} ${paddingClass}`}>
          <div className={`${contentWidthClass} flex flex-col ${itemsClasses} gap-6 md:gap-[46px]`}>
            <TitleTag className={headingClasses}>
              {title}
              {showAccent && <span className={accentClassName}>.</span>}
            </TitleTag>
            {!!finalParagraphs.length && (
              <div className={`space-y-4 md:space-y-6 ${textAlignClasses}`}>
                {finalParagraphs.map((p, idx) => (
                  <p key={idx} className={paragraphClassName}>
                    {p}
                  </p>
                ))}
              </div>
            )}
            <EdgeLinkButton className={ctaClassName} href={ctaHref}>{ctaText ?? ctaLabel}</EdgeLinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LegacySection;