import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Les variantes du bouton (comme dans ton code)
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      },
      size: {
        default: "h-9 px-4 py-2",
        lg: "h-10 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "lg",
    },
  }
);

// Le type ButtonProps qui accepte aussi les attributs des liens
type ButtonProps<T extends React.ElementType = "a"> = {
  as?: T;
  href?: string;
  target?: string;
  rel?: string;
} & React.ComponentPropsWithoutRef<T> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (
    { className, variant, size, as: Comp = "a", href, target, rel, ...props },
    ref
  ) => {
    return (
      <Comp
        href={href}
        target={target}
        rel={rel}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref as any} // Cast ref to any here
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };