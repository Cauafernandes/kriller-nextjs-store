import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { Metadata } from 'next';

import FormRegister from './components/FormRegister';

export const metadata: Metadata = {
  title: 'Cadastro | Kriller',
  description: 'Entrar na sua conta da Kriller.',
};

export default function Cadastro() {
  const customerId = cookies().get('cid');

  if (customerId) {
    redirect('/');
  }

  return (
    <div className='w-full min-h-screen py-8'>
      <h2 className='w-full text-center text-[24px] font-semibold mb-8 text-primary'>
        Cadastro
      </h2>

      <FormRegister />
    </div>
  );
}
