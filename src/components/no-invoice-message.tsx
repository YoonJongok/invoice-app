import React from 'react';
import { FlexBoxColumn } from './ui/flexbox-column';
import { Icons } from './Icons';

export const NoInvoiceMessage = () => {
  return (
    <FlexBoxColumn className='items-center gap-10'>
      <Icons.noInvoiceNotif />
      <FlexBoxColumn className='items-center gap-6'>
        <h2 className='font-bold capitalize'>There is nothing here</h2>
        <p className='w-2/3 text-violet-1 text-center'>
          Create an invoice by clicking the New button and get started{' '}
        </p>
      </FlexBoxColumn>
    </FlexBoxColumn>
  );
};

