import { cn } from '@/lib/utils';
import '../styles/globals.css';
import { League_Spartan } from 'next/font/google';

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn(leagueSpartan.className)}>{children}</body>
    </html>
  );
}

