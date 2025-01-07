import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';


import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
//import 'primeicons/primeicons.css';
//import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Emo\'s forecast',
  description: 'dalivali',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
