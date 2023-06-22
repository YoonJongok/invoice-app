import { HomeMainHeader } from '@/components/home/home-main-header';
import { InvoiceCard } from '@/components/invoice-card';
import { FlexBoxColumn } from '@/components/ui/flexbox-column';

export default function HomePage() {
  return (
    <FlexBoxColumn as='main' className='w-full px-6 py-8'>
      <HomeMainHeader />
      <FlexBoxColumn>
        {/* <NoInvoiceMessage /> */}
        <InvoiceCard />
      </FlexBoxColumn>
    </FlexBoxColumn>
  );
}

