import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/utils';

export const buttonVariants = cva(
  'cursor-pointer rounded-xl corner-squircle justify-center px-5 py-2 text-center capitalize transition-colors duration-300 select-none',
  {
    variants: {
      variant: {
        default:
          'bg-linear-to-r from-primary to-primary-strong text-white hover:from-30% hover:to-90%',
        outline: 'border-muted text-foreground hover:bg-muted/30 border',
        danger: 'bg-destructive text-white hover:bg-destructive/85',
        white: 'bg-white text-foreground hover:bg-white/90',
        ghost:
          'bg-transparant border border-muted/50 text-white hover:bg-muted/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

// derive variant types automatically
type ButtonVariants = VariantProps<typeof buttonVariants>;
interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  className?: string;
  children?: ReactNode | string;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, variant = 'default', ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(buttonVariants({ variant, className }))}
        style={{}}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
