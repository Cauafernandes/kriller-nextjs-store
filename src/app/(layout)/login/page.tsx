import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import Link from 'next/link';

import { Metadata } from 'next';

import { Button } from '@/app/components';
import FormLogin from './components/FormLogin';

export const metadata: Metadata = {
  title: 'Login | Kriller',
  description: 'Entrar na sua conta da Kriller.',
};

export default function Login() {
  const customerId = cookies().get('cid');

  if (customerId) {
    redirect('/');
  }

  return (
    <div className='w-full min-h-screen py-8'>
      <h2 className='w-full text-center text-[24px] font-semibold mb-8 text-primary'>
        Identificação
      </h2>
      <div className='w-full flex flex-col'>
        <div className='w-full'>
          <h3 className='w-full text-center text-[16px] mb-8 font-medium'>
            Já sou cadastrado
          </h3>
          <FormLogin />
        </div>
        <div className='w-full border-b border-gray50'></div>
        <div className='w-full'>
          <h3 className='w-full text-center text-[16px] my-8 font-medium'>
            Não tem cadastro?
          </h3>
          <div className='w-full flex flex-col max-w-[40rem] mx-auto'>
            <Link
              href='/cadastro'
              title='Ir para a tela de cadastro de conta'
              className='w-full max-w-[350px] mx-auto'
            >
              <Button>Cadastre-se</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
