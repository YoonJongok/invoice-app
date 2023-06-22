import { Icons } from '@/components/Icons';
import { InvoiceCard } from '@/components/invoice-card';
import { NoInvoiceMessage } from '@/components/no-invoice-message';
import { Button } from '@/components/ui/button';
import { FlexBoxColumn } from '@/components/ui/flexbox-column';
import { FlexBoxRow } from '@/components/ui/flexbox-row';

export default function Home() {
  return (
    <FlexBoxColumn as='main' className='w-full px-6 py-8'>
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
          <Button intent={'newInvoice'} className='pr-4'>
            New
          </Button>
        </FlexBoxRow>
      </FlexBoxRow>
      <FlexBoxColumn>
        {/* <NoInvoiceMessage /> */}
        <InvoiceCard />
      </FlexBoxColumn>
    </FlexBoxColumn>
  );
}

