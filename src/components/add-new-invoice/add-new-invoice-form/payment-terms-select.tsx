'use client';
import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FlexBoxColumn } from '@/components/ui/flexbox-column';

type PaymentTerm = 'Net 1 Day' | 'Net 7 Days' | 'Net 14 Days' | 'Net 30 Days';
const paymentTermsConfig: PaymentTerm[] = ['Net 1 Day', 'Net 7 Days', 'Net 14 Days', 'Net 30 Days'];

interface PaymentTermsSelectProps {
  label?: string;
}

export const PaymentTermsSelect = ({ label }: PaymentTermsSelectProps) => {
  const [value, setValue] = React.useState<PaymentTerm>('Net 1 Day');

  return (
    <FlexBoxColumn className='w-full gap-[6px]'>
      {label && <label className='text-[13px] text-violet-1 capitalize'>{label}</label>}
      <Select
        onValueChange={(value: PaymentTerm) => setValue(value)}
        defaultValue={value}
        value={value}
      >
        <SelectTrigger className=''>
          <SelectValue placeholder='Select a net days' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className='capitalize'>
            {paymentTermsConfig.map((term) => (
              <SelectItem key={term} value={term}>
                {term}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </FlexBoxColumn>
  );
};

