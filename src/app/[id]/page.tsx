import { Icons } from '@/components/Icons';
import { GoBackButton } from '@/components/go-back-button';
import { InvoiceCard } from '@/components/invoice-card';
import { Button } from '@/components/ui/button';
import { FlexBoxColumn } from '@/components/ui/flexbox-column';
import { FlexBoxRow } from '@/components/ui/flexbox-row';

export default function InvoiceDetailPage() {
  return (
    <>
      <FlexBoxColumn as='main' className='relative w-full px-6 py-8 pb-32'>
        <FlexBoxRow intent={'flexStartCenter'} className='pb-8'>
          <GoBackButton />
        </FlexBoxRow>
        <FlexBoxColumn className='gap-4'>
          <FlexBoxRow intent={'flexBetweenCenter'} className='px-6 py-7 bg-white rounded-card'>
            <h4 className='capitalize text-violet-1'>status</h4>
            <Button intent={'pending'}>pending</Button>
          </FlexBoxRow>
          <FlexBoxColumn className='px-6 py-[25px] bg-white rounded-card gap-[30px]'>
            <h3 className='font-bold capitalize'>
              <span className='italic text-violet-1 mr-[3px]'>#</span>RT3080
            </h3>
            <p className='capitalize text-violet-1'>Graphic design</p>
            <FlexBoxColumn>
              <h4 className='capitalize text-violet-1 leading-5'>19 Union Terrace</h4>
              <h4 className='capitalize text-violet-1 leading-5'>London</h4>
              <h4 className='capitalize text-violet-1 leading-5'>E1 3EZ</h4>
              <h4 className='capitalize text-violet-1 leading-5'>United Kingdom</h4>
            </FlexBoxColumn>
            <FlexBoxRow className='justify-between gap-14'>
              <FlexBoxColumn className='gap-8'>
                <FlexBoxColumn className='gap-2'>
                  <p className='capitalize text-violet-1'>Invoice date</p>
                  <h4 className='font-bold capitalize'>21 Aug 2021</h4>
                </FlexBoxColumn>
                <FlexBoxColumn className='gap-2'>
                  <p className='capitalize text-violet-1'>payment due</p>
                  <h4 className='font-bold capitalize'>21 sep 2021</h4>
                </FlexBoxColumn>
              </FlexBoxColumn>
              <FlexBoxColumn>
                <p className='capitalize text-violet-1'>bill to</p>
                <FlexBoxColumn>
                  <h4 className='font-bold capitalize pt-3 pb-2'>alex grim</h4>
                  <h4 className='capitalize text-violet-1 leading-4'>19 Union Terrace</h4>
                  <h4 className='capitalize text-violet-1 leading-4'>London</h4>
                  <h4 className='capitalize text-violet-1 leading-4'>E1 3EZ</h4>
                  <h4 className='capitalize text-violet-1 leading-4'>United Kingdom</h4>
                </FlexBoxColumn>
              </FlexBoxColumn>
            </FlexBoxRow>
            <FlexBoxColumn className='gap-2'>
              <p className='capitalize text-violet-1'>payment due</p>
              <h4 className='font-bold'>yoonjongok1209@gmail.com</h4>
            </FlexBoxColumn>
            <FlexBoxColumn className='pt-[25px] bg-grey-1 rounded-card gap-[30px]'>
              <FlexBoxRow intent={'flexBetweenCenter'} className='font-bold capitalize px-6'>
                <FlexBoxColumn>
                  <h3>Banner design</h3>
                  <h3 className='text-violet-1'>2 x £200.00</h3>
                </FlexBoxColumn>
                <h3>£200.00</h3>
              </FlexBoxRow>
              <FlexBoxRow intent={'flexBetweenCenter'} className='font-bold capitalize px-6'>
                <FlexBoxColumn>
                  <h3>email design</h3>
                  <h3 className='text-violet-1'>2 x £200.00</h3>
                </FlexBoxColumn>
                <h3>£200.00</h3>
              </FlexBoxRow>
              <FlexBoxRow
                intent={'flexBetweenCenter'}
                className='px-6 py-[26px] rounded-b-card text-white bg-navy-1 capitalize'
              >
                <p>grand total</p>
                <h2 className='font-bold'>£200.00</h2>
              </FlexBoxRow>
            </FlexBoxColumn>
          </FlexBoxColumn>
        </FlexBoxColumn>
      </FlexBoxColumn>
      <FlexBoxRow
        intent={'flexCenterCenter'}
        className='fixed bottom-0 w-full gap-2 bg-white py-[22px] px-6 shadow-xl'
      >
        <Button intent={'edit'} size={'base'}>
          edit
        </Button>
        <Button intent={'delete'} size={'base'}>
          delete
        </Button>
        <Button size={'base'}>mark as paid</Button>
      </FlexBoxRow>
    </>
  );
}

