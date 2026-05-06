import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface EdgeLinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

export function EdgeLinkButton({ href, children, className, showIcon = true }: EdgeLinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-md border-2 px-6 py-2",
        "text-[#FD6858] border-[#FD6858] bg-[#FBEBEA]",
        "font-semibold tracking-wide capitalize",
        className
      )}
    >
      <span>{children}</span>
      {showIcon && <ArrowUpRight className="h-4 w-4" />}
    </Link>
  );
}