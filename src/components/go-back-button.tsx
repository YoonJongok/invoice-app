import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Icons } from './Icons';

export const GoBackButton = () => {
  return (
    <Link href={'/'} className='flex justify-between items-center gap-6'>
      <Icons.arrowLeft />
      <h3 className='font-bold'>Go back</h3>
    </Link>
  );
};

