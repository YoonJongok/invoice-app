import { GoBackButton } from '@/components/go-back-button';
import { FlexBoxColumn } from '@/components/ui/flexbox-column';
import { FlexBoxRow } from '@/components/ui/flexbox-row';

export default function AddNewInvoice() {
  return (
    <>
      <FlexBoxColumn as='main' className='relative w-full px-6 py-8 pb-32'>
        <FlexBoxRow intent={'flexStartCenter'} className='pb-8'>
          <GoBackButton />
        </FlexBoxRow>
      </FlexBoxColumn>
    </>
  );
}

