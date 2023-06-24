'use client';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Input } from '../../ui/input';
import { FlexBoxColumn } from '../../ui/flexbox-column';
import { FlexBoxRow } from '../../ui/flexbox-row';
import { DatePicker } from '../../date-picker';
import { PaymentTermsSelect } from './payment-terms-select';
import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';

export const AddNewInvoiceForm = () => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='gap-6'>
        <FlexBoxColumn className='gap-6 mt-10'>
          <h4 className='font-bold text-violet-3 capitalize'>Bill from</h4>
          <Input label='stree address' type='text' />
          <FlexBoxRow intent={'flexBetweenCenter'} className='gap-6'>
            <Input label='city' type='text' />
            <Input label='post code' type='text' />
          </FlexBoxRow>
          <FlexBoxColumn className='w-full gap-[6px]'>
            <Input label='country' type='text' />
          </FlexBoxColumn>
        </FlexBoxColumn>
        <FlexBoxColumn className='gap-6 mt-10'>
          <h4 className='font-bold text-violet-3 capitalize'>Bill to</h4>
          <Input label={"client's name"} type='text' />
          <Input label={"client's email"} type='email' />
          <Input label={'street address'} type='text' />
          <FlexBoxRow intent={'flexBetweenCenter'} className='gap-6'>
            <Input label='city' type='text' />
            <Input label='post code' type='text' />
          </FlexBoxRow>
          <FlexBoxColumn className='w-full gap-[6px]'>
            <Input label='country' type='text' />
          </FlexBoxColumn>
        </FlexBoxColumn>
        <FlexBoxColumn className='gap-6 mt-10'>
          <DatePicker label={'invoice date'} />
          <PaymentTermsSelect label='payment terms' />
          <Input label={'project description'} type='text' />
        </FlexBoxColumn>
        <FlexBoxColumn className='gap-6 mt-10'>
          <h4 className='font-bold text-grey-4 capitalize'>Item list</h4>
          <Input label='Item name' type='text' />
          <FlexBoxRow className='relative w-full gap-6'>
            <FlexBoxRow className='grid grid-cols-3 gap-4'>
              <Input label='qty.' type='text' className='' />
              <div className='col-span-2'>
                <Input label='price' type='text' />
              </div>
            </FlexBoxRow>
            <FlexBoxRow className='w-full'>
              <Input label='total' type='text' className='border-none' disabled />
              <FlexBoxRow intent={'flexCenterCenter'} className='absolute right-0 top-1/2'>
                <Icons.delete />
              </FlexBoxRow>
            </FlexBoxRow>
          </FlexBoxRow>
          <FlexBoxColumn className='w-full gap-[6px]' onClick={() => console.log('Click!')}>
            <Input label='country' type='text' />
          </FlexBoxColumn>
        </FlexBoxColumn>
        <Button intent={'addItem'} fullWidth className='mt-8 py-4'>
          + Add New Item
        </Button>
      </form>
    </FormProvider>
  );
};

