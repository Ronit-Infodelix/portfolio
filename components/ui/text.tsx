import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* display/title → Playfair Display (--font-display). h2/h3/h4 → Geist Sans. */

const headingVariants = cva("text-ink", {
  variants: {
    level: {
      display: "font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight",
      title:   "font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1]  tracking-tight",
      h2:      "font-sans   text-3xl sm:text-4xl font-semibold leading-tight  tracking-tight",
      h3:      "font-sans   text-2xl sm:text-3xl font-semibold leading-snug   tracking-tight",
      h4:      "font-sans   text-xl              font-semibold leading-snug",
    },
  },
  defaultVariants: { level: "h2" },
});

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "p" | "div";

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingTag;
}

function Heading({ className, level, as, ...props }: HeadingProps) {
  const Tag: HeadingTag =
    as ??
    (level === "display" || level === "title"
      ? "h1"
      : (level as HeadingTag) ?? "h2");
  return (
    <Tag className={cn(headingVariants({ level }), className)} {...props} />
  );
}

const textVariants = cva("", {
  variants: {
    size: {
      xs:   "text-xs   leading-relaxed",
      sm:   "text-sm   leading-relaxed",
      base: "text-base leading-relaxed",
      lg:   "text-lg   leading-relaxed",
      xl:   "text-xl   leading-relaxed",
    },
    color: {
      default:   "text-ink",
      secondary: "text-ink-secondary",
      muted:     "text-ink-muted",
      accent:    "text-accent",
    },
  },
  defaultVariants: { size: "base", color: "default" },
});

interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div";
}

function Text({ className, size, color, as = "p", ...props }: TextProps) {
  const Tag = as as React.ElementType;
  return (
    <Tag className={cn(textVariants({ size, color }), className)} {...props} />
  );
}

export { Heading, Text, headingVariants, textVariants };
export type { HeadingProps, TextProps };
