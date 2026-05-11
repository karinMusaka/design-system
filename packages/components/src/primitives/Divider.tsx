import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "line" | "stripe";
  orientation?: "horizontal" | "vertical";
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    { variant = "line", orientation = "horizontal", className, ...props },
    ref
  ) => {
    if (variant === "stripe") {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation={orientation}
          className={cn(
            orientation === "horizontal" ? "h-1 w-full" : "w-1 h-full",
            className
          )}
          style={{
            background:
              "repeating-linear-gradient(-45deg, #C0FE04, #C0FE04 10px, #000000 10px, #000000 20px)",
          }}
          {...props}
        />
      );
    }
    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(
          orientation === "horizontal"
            ? "border-t border-border-muted w-full"
            : "border-l border-border-muted h-full",
          className
        )}
        {...props}
      />
    );
  }
);
Divider.displayName = "Divider";
