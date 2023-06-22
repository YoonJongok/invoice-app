'use client';
import React from 'react';
import { FlexBoxRow } from '../ui/flexbox-row';
import { FlexBoxColumn } from '../ui/flexbox-column';
import { Icons } from '../Icons';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { routes } from '@/lib/config/routes';

export const HomeMainHeader = () => {
  const router = useRouter();

  return (
    <FlexBoxRow intent={'flexBetweenCenter'} className='pb-8'>
      <FlexBoxColumn>
        <h2 className='capitalize'>Invoices</h2>
        <p className='text-violet-1'>7 invoices</p>
      </FlexBoxColumn>
      <FlexBoxRow className='gap-[1.125rem]'>
        <FlexBoxRow intent={'flexBetweenCenter'} className='gap-3'>
          <h3 className='font-bold'>Filter</h3>
          <Icons.arrowDown />
        </FlexBoxRow>
        <Button intent={'newInvoice'} className='pr-4' onClick={() => router.push(routes.add)}>
          New
        </Button>
      </FlexBoxRow>
    </FlexBoxRow>
  );
};

