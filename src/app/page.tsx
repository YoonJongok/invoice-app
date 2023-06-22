import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import { FlexBoxColumn } from '@/components/ui/flexbox-column';
import { FlexBoxRow } from '@/components/ui/flexbox-row';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='w-full'>
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
          <Button intent={'primary'} className='pr-4'>
            <FlexBoxRow intent={'flexCenterCenter'} className='bg-white p-[10px] rounded-full mr-2'>
              <Icons.plus />
            </FlexBoxRow>
            New
          </Button>
        </FlexBoxRow>
      </FlexBoxRow>
      <FlexBoxColumn></FlexBoxColumn>
    </main>
  );
}

