'use client';
import React from 'react';
import { Footer } from '../ui/footer';
import { Button } from '../ui/button';

export const AddNewInvoiceFooter = () => {
  return (
    <Footer>
      <Button intent={'edit'} size={'base'}>
        discard
      </Button>
      <Button intent={'saveDraft'} size={'base'}>
        save as draft
      </Button>
      <Button size={'base'}>save & send</Button>
    </Footer>
  );
};

