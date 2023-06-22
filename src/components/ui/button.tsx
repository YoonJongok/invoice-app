'use client';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { Icons } from '../Icons';
import { FlexBoxRow } from './flexbox-row';

export const buttonVariants = cva(
  [
    'flexCenterCenter',
    'rounded-lg',
    'capitalize',
    'font-bold',
    'border-transparent',
    'text-white',
    'leading-none',
    'bg-violet-3',
    'hover:bg-violet-2',
  ],
  {
    variants: {
      intent: {
        newInvoice: ['bg-violet-3', 'hover:bg-violet-2'],
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
        paid: [
          'w-[104px]',
          'pb-3',
          'pt-5',
          'gap-2',
          'bg-[#e2f6ef]',
          'text-[#33D69F]',
          'text-[15px]',
          'rounded-sm',
        ],
        pending: [
          'w-[104px]',
          'pb-3',
          'pt-5',
          'gap-2',
          'bg-[#fde7c9]',
          'text-[#FF8F00]',
          'text-[15px]',
          'rounded-sm',
        ],
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
      intent: 'newInvoice',
      size: 'small',
    },
    compoundVariants: [
      {
        intent: ['newInvoice'],
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
  size,
  fullWidth,
  withIcon = false,
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button className={cn(buttonVariants({ intent, size, fullWidth, className }))} {...props}>
      {intent === 'paid' || (intent === 'pending' && <Icons.oval />)}
      {intent === 'newInvoice' && (
        <FlexBoxRow intent={'flexCenterCenter'} className='bg-white p-[10px] rounded-full mr-2'>
          <Icons.plus />
        </FlexBoxRow>
      )}

      {children}
    </button>
  );
};

