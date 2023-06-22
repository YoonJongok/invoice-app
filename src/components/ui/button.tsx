'use client';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
  [
    'flexCenterCenter',
    'rounded-lg',
    'capitalize',
    'font-bold',
    'border-transparent',
    'text-white',
    'leading-none',
  ],
  {
    variants: {
      intent: {
        primary: ['bg-violet-3', 'hover:bg-violet-2'],
        addItem: ['bg-grey-1', 'hover:bg-grey-3', 'text-violet-1', 'border-transparent'],
        saveDraft: [
          'bg-navy-1',
          'hover:bg-navy-5',
          'text-grey-4',
          'dark:text-white',
          'dark:hover:text-white',
        ],
        edit: [
          'bg-grey-1',
          'hover:bg-grey-3',
          'text-violet-1',
          'dark:bg-navy-2',
          'dark:hover:bg-white',
          'dark:hover:text-grey-3',
        ],
        delete: ['bg-coral-2', 'hover:bg-coral-1'],
      },
      size: {
        base: ['px-6', 'py-4'],
        small: ['p-2'],
      },
      fullWidth: {
        true: ['w-full'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'small',
    },
    compoundVariants: [
      {
        intent: ['primary'],
        size: 'base',
      },
    ],
  }
);

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  withIcon?: boolean;
}

export const Button = ({
  className,
  intent,
  fullWidth,
  withIcon = false,
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button className={cn(buttonVariants({ intent, fullWidth, className }))} {...props}>
      {children}
    </button>
  );
};

