import { cn } from '@/lib/utils';
import React from 'react';
import { FlexBoxRow } from './ui/flexbox-row';
import { Icons } from './Icons';
import Image from 'next/image';
import AvartarImg from '../../public/assets/avartar.png';

export const NavBar = () => {
  return (
    <header className={cn('relative flex justify-between items-center bg-navy-1')}>
      <FlexBoxRow
        intent={'flexCenterCenter'}
        className={cn(
          'p-[22px] bg-violet-2 rounded-r-[20px] bg-[url("/assets/logo-background.png")]'
        )}
      >
        <Icons.logo />
      </FlexBoxRow>
      <FlexBoxRow>
        <FlexBoxRow
          intent={'flexCenterCenter'}
          className={'px-6 py-6 border-r-[1px] border-r-violet-1'}
        >
          <Icons.moon />
        </FlexBoxRow>
        <FlexBoxRow intent={'flexCenterCenter'} className={'px-6'}>
          <Image src={AvartarImg} alt='avartar' width={32} height={32} />
        </FlexBoxRow>
      </FlexBoxRow>
    </header>
  );
};

