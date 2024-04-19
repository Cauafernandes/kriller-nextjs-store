import Link from 'next/link';

import { Button, Footer, Header } from './components';

export default function NotFoundPage() {
  return (
    <div>
      <Header />
      <div className='max-w-screen-lg mx-auto mt-8'>
        <div className='w-[200px] h-[200px] mx-auto bg-secondary text-primary font-bold rounded-full flex items-center justify-center text-[38px]'>
          <span>404</span>
        </div>
        <p className='block my-10 text-[24px] max-w-[70%] mx-auto text-center font-semibold'>
          Ops, parece que não encontramos a página solicitada.
        </p>
        <Link
          href='/'
          title='Voltar para a página inicial'
          className='w-full max-w-[350px] block mx-auto'
        >
          <Button>Ok, entendi</Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
