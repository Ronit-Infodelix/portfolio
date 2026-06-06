import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-medium leading-none",
  {
    variants: {
      variant: {
        default: "bg-surface-subtle text-ink-secondary border border-border",
        accent:  "bg-accent-surface text-accent",
        solid:   "bg-ink text-ink-inverse",
      },
      size: {
        sm: "px-2 py-1 text-xs rounded-md",
        md: "px-2.5 py-1.5 text-xs rounded-lg",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
export type { BadgeProps };
