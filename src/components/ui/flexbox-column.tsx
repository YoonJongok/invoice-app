'use client';
import React, { ReactNode } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const flexBoxColumn = cva(['flex ', 'flex-col'], {
  variants: {
    intent: {},
    modifier: {},
    fullWidth: {
      true: ['w-full'],
    },
    defaultVariants: {},
  },
});

export interface FlexBoxColumnProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexBoxColumn> {
  children: ReactNode;
  as?: 'main';
}

export const FlexBoxColumn = ({
  className,
  intent,
  modifier,
  children,
  fullWidth,
  as,
  ...props
}: FlexBoxColumnProps) => {
  if (as && as === 'main') {
    return (
      <main {...props} className={cn(flexBoxColumn({ intent, className, modifier, fullWidth }))}>
        {children}
      </main>
    );
  }

  return (
    <div {...props} className={flexBoxColumn({ intent, className, modifier, fullWidth })}>
      {children}
    </div>
  );
};

