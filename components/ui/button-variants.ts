import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-medium leading-none tracking-tight whitespace-nowrap",
    "transition-colors duration-150 cursor-pointer select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    "disabled:pointer-events-none disabled:opacity-40",
  ],
  {
    variants: {
      variant: {
        default: "bg-ink text-ink-inverse hover:bg-ink/85",
        accent:  "bg-accent text-accent-foreground hover:bg-accent-hover",
        outline: "border border-border bg-transparent hover:bg-surface-subtle text-ink",
        ghost:   "bg-transparent hover:bg-surface-subtle text-ink",
        link:    "text-accent underline-offset-4 hover:underline h-auto p-0",
      },
      size: {
        sm: "h-8  px-3 text-xs  rounded-md",
        md: "h-10 px-4 text-sm  rounded-lg",
        lg: "h-12 px-6 text-base rounded-lg",
        xl: "h-14 px-8 text-[1.0625rem] rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size:    "md",
    },
  }
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export { buttonVariants };
export type { ButtonVariantProps };
