import React from 'react';

export const Footer = ({ children }: React.PropsWithChildren) => {
  return (
    <footer className='fixed bottom-0 w-full flex justify-center items-center gap-2 bg-white py-[22px] px-6 shadow-xl'>
      {children}
    </footer>
  );
};

