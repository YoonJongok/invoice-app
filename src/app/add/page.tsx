import { AddNewInvoiceFooter } from '@/components/add-new-invoice';
import { AddNewInvoiceForm } from '@/components/add-new-invoice/add-new-invoice-form/add-new-invoice-form';
import { GoBackButton } from '@/components/go-back-button';
import { FlexBoxColumn } from '@/components/ui/flexbox-column';
import { FlexBoxRow } from '@/components/ui/flexbox-row';

export default function AddNewInvoice() {
  return (
    <>
      <FlexBoxColumn as='main' className='relative w-full px-6 pt-8 pb-52'>
        <FlexBoxRow intent={'flexStartCenter'} className='pb-8'>
          <GoBackButton />
        </FlexBoxRow>
        <FlexBoxColumn>
          <h2>New Invoice</h2>
          <AddNewInvoiceForm />
        </FlexBoxColumn>
      </FlexBoxColumn>
      <AddNewInvoiceFooter />
    </>
  );
}

