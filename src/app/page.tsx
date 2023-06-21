import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Button intent={'primary'}>hihihihi</Button>
      <Button intent={'addItem'}>hihihihi</Button>
      <Button intent={'saveDraft'}>hihihihi</Button>
      <Button intent={'edit'}>hihihihi</Button>
      <Button intent={'delete'}>hihihihi</Button>
    </main>
  );
}

