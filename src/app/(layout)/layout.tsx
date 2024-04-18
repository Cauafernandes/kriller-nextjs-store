import { ReactNode } from 'react';

import { Header } from '../components/Layout/Header';

export default function WithDefaultLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />

      <main className='flex flex-1 flex-col items-center max-w-screen-lg px-4 my-0 mx-auto overflow-hidden'>
        {children}
      </main>

      <footer></footer>
    </>
  );
}
