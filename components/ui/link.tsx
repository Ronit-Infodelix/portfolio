import NextLink from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkVariants = cva(
  [
    "transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm",
  ],
  {
    variants: {
      variant: {
        default:  "text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent",
        subtle:   "text-ink-secondary hover:text-ink",
        nav:      "text-ink-secondary hover:text-ink font-medium",
        unstyled: "",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

function isExternal(href: string) {
  return /^(https?:\/\/|mailto:|tel:)/.test(href);
}

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
}

function Link({ href, className, variant, children, ...props }: LinkProps) {
  if (isExternal(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(linkVariants({ variant }), className)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      className={cn(linkVariants({ variant }), className)}
      {...props}
    >
      {children}
    </NextLink>
  );
}

export { Link, linkVariants };
export type { LinkProps };
