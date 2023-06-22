'use client';
import React from 'react';
import { Button } from '../ui/button';
import { Footer } from '../ui/footer';

export const InvoiceFooter = () => {
  return (
    <Footer>
      <Button intent={'edit'} size={'base'}>
        edit
      </Button>
      <Button intent={'delete'} size={'base'}>
        delete
      </Button>
      <Button size={'base'}>mark as paid</Button>
    </Footer>
  );
};

