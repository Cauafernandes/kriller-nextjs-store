import { Lato } from 'next/font/google';

import type { Metadata } from 'next';

import { AuthContextProvider } from '@/context';
import { PreloadResources } from './preload-resources';

import './globals.css';

const font = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  preload: true,
});

export const metadata: Metadata = {
  title: 'Kriller - Seu e-commerce de confiança',
  description: 'Compre os melhores produtos com os melhores preços!',
  themeColor: '#214f59',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <PreloadResources />

      <body className={font.className}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
