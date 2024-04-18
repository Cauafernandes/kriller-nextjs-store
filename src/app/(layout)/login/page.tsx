import Link from 'next/link';

import { Metadata } from 'next';

import { Input } from '@/app/components';

export const metadata: Metadata = {
  title: 'Login | Sample Store',
  description: 'Entrar na sua conta da Sample Store.',
};

export default function Login() {
  return (
    <div className='min-h-screen py-8'>
      <h2 className='w-full text-center text-[24px] font-semibold mb-8 text-primary'>
        Identificação
      </h2>
      <div className='w-full flex flex-col'>
        <div className='w-full'>
          <h3 className='w-full text-center text-[16px] font-medium'>
            Já sou cadastrado
          </h3>
          <div className='w-full max-w-[100rem] flex-col pb-8 border-b border-gray50'>
            <div className='flex flex-row gap-6'>
              <Input label='E-mail' placeholder='Digite seu e-mail' />
              <Input label='Senha' placeholder='Digite sua senha' />
            </div>
            <button className='w-full py-3 mt-8 bg-primary text-white rounded-xl'>
              Entrar
            </button>
          </div>
        </div>
        <div className='w-full'>
          <h3 className='w-full text-center text-[16px] mt-8 font-medium'>
            Não tem cadastro?
          </h3>
          <div className='w-full max-w-[100rem]'>
            <Link href='/cadastro' title='Ir para a tela de cadastro de conta'>
              <button className='w-full py-3 mt-8 bg-primary text-white rounded-xl'>
                Cadastre-se
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
