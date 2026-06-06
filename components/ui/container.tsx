import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "narrow" | "default" | "wide";
}

const sizeClasses = {
  narrow:  "max-w-3xl",
  default: "max-w-6xl",
  wide:    "max-w-7xl",
};

function Container({ className, size = "default", ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}

export { Container };
export type { ContainerProps };
