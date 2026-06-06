import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "default" | "lg";
  as?: "section" | "div" | "article";
}

const spacingClasses = {
  sm:      "py-12 sm:py-16",
  default: "py-16 sm:py-24 lg:py-28",
  lg:      "py-24 sm:py-32 lg:py-40",
};

function Section({
  className,
  spacing = "default",
  as: Tag = "section",
  ...props
}: SectionProps) {
  return (
    <Tag className={cn(spacingClasses[spacing], className)} {...props} />
  );
}

export { Section };
export type { SectionProps };
