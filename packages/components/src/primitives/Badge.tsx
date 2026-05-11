import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export type BadgeVariant = "accent" | "warning" | "info" | "success" | "error" | "muted";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  accent: "bg-accent text-background",
  warning: "bg-warning text-foreground",
  info: "bg-info text-foreground",
  success: "bg-success text-background",
  error: "bg-error text-foreground",
  muted: "bg-surface-alt text-muted border border-border-muted",
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "accent", className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-bold uppercase tracking-wider",
          variantClasses[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";
