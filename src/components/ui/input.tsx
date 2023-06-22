import { cn } from '@/lib/utils';
import React from 'react';
import { FlexBoxColumn } from './flexbox-column';
import { FlexBoxRow } from './flexbox-row';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  Icon?: React.FC;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, Icon, label, type, ...props }, ref) => {
    return (
      <FlexBoxColumn className='w-full gap-[6px]'>
        {label && <label className='text-[13px] text-violet-1 capitalize'>{label}</label>}
        <FlexBoxRow className='relative'>
          <input
            type={type}
            className={cn(
              'flex w-full rounded-sm border border-grey-3 bg-transparent px-5 py-4 text-[15px] ring-offset-background file:border-0 file:bg-transparent file:text-[15px] file:font-medium placeholder:text-grey-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              className
            )}
            ref={ref}
            {...props}
          />
          {Icon && <Icon />}
        </FlexBoxRow>
      </FlexBoxColumn>
    );
  }
);
Input.displayName = 'Input';

