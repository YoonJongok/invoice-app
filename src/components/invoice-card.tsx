import React from 'react';
import { FlexBoxColumn } from './ui/flexbox-column';
import { FlexBoxRow } from './ui/flexbox-row';
import { Button } from './ui/button';

export const InvoiceCard = () => {
  return (
    <FlexBoxColumn className='p-6 bg-white rounded-[8px] gap-8'>
      <FlexBoxRow intent={'flexBetweenCenter'}>
        <h3 className='font-bold capitalize'>
          <span className='italic text-violet-1 mr-[3px]'>#</span>RT3080
        </h3>
        <h4 className='capitalize text-violet-1'>jensen huang</h4>
      </FlexBoxRow>
      <FlexBoxRow intent={'flexBetweenCenter'} className='gap-6'>
        <FlexBoxColumn className='gap-2'>
          <h4 className='capitalize text-violet-1'>Due 19 Aug 2021</h4>
          <h3 className='font-bold capitalize'>
            <span className='italic mr-[3px]'>£</span> 1,800.90
          </h3>
        </FlexBoxColumn>
        <Button intent={'pending'}>paid</Button>
      </FlexBoxRow>
    </FlexBoxColumn>
  );
};

