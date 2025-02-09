import type { Metadata } from 'next';
import './globals.css';

import { ReactNode } from 'react';

import CustomLayout from '@/shared/ui/layout';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
}
