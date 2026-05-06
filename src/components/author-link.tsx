"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

interface AuthorLinkProps {
  children?: React.ReactNode;
  className?: string;
}

export default function AuthorLink({ children, className = "" }: AuthorLinkProps) {
  return (
    <span
      className={`text-[#0175B2] hover:underline cursor-pointer inline-flex items-center gap-1 ${className}`}
      onClick={(e) => {
        e.stopPropagation();
        window.open(
          "https://www.amazon.in/Strategic-Management-Shantam-Shukla-Shashwat/dp/9364443586",
          "_blank",
          "noopener,noreferrer"
        );
      }}
    >
      {children || "Amazon"}
      <ExternalLink size={14} className="inline-block" />
    </span>
  );
}
