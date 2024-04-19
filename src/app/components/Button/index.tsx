import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils';

const buttonVariants = cva(
  'w-full h-[48px] pt-[14px] py-2 rounded-[14px] text-[16px] font-semibold text-gray200 disabled:bg-gray100 disabled:text-white disabled:hover:bg-gray100 disabled:border-transparent transition-colors duration-300 ease-in-out outline-none',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primaryHover',
        secondary: 'bg-pink400 text-white hover:bg-pink300',
        white: 'bg-white text-gray300',
        outlined:
          'bg-transparent text-cyan500 border-solid border-cyan500 border-[1px] hover:bg-cyan100',
        tertiary: 'bg-transparent text-cyan500 underline hover:bg-cyan600',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
