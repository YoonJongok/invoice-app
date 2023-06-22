'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';

const flexBoxRow = cva(['flex', 'flex-row'], {
  variants: {
    intent: {
      flexStartStart: ['justify-start', 'items-start'],
      flexStartCenter: ['justify-start', 'items-center'],
      flexEndCenter: ['justify-end', 'items-center'],
      flexCenterCenter: ['justify-center', 'items-center'],
      flexBetweenCenter: ['justify-between', 'items-center'],
      flexAroundCenter: ['justify-around', 'items-center'],
    },
    fullWidth: {
      true: ['w-full'],
    },
    modifier: {},
    defaultVariants: {},
  },
});

export interface FlexBoxRowProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexBoxRow> {
  as?: 'header';
}

export const FlexBoxRow = ({
  className,
  intent,
  modifier,
  fullWidth,
  as,
  children,
  ...props
}: React.PropsWithChildren<FlexBoxRowProps>) => {
  if (as && as === 'header') {
    return (
      <header {...props} className={cn(flexBoxRow({ intent, className, modifier, fullWidth }))}>
        {children}
      </header>
    );
  }

  return (
    <div {...props} className={cn(flexBoxRow({ intent, className, modifier, fullWidth }))}>
      {children}
    </div>
  );
};

