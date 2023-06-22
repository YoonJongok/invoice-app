import React from 'react';
import { Button } from '../ui/button';

export const InvoiceFooter = () => {
  return (
    <footer className='fixed bottom-0 w-full flex justify-center items-center gap-2 bg-white py-[22px] px-6 shadow-xl'>
      <Button intent={'edit'} size={'base'}>
        edit
      </Button>
      <Button intent={'delete'} size={'base'}>
        delete
      </Button>
      <Button size={'base'}>mark as paid</Button>
    </footer>
  );
};

