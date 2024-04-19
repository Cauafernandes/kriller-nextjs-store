'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

import { useAuth } from '@/context';

import { schema, schemaData } from '../schema';

import { Button, Input } from '@/app/components';

export default function FormLogin() {
  const { handleLogin } = useAuth();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<schemaData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function handleLoginSubmit(data: schemaData) {
    const success = await handleLogin(data.email, data.password);

    if (!success) {
      setError('password', { message: 'Usuário ou senha inválido.' });
    }

    return;
  }

  return (
    <form
      className='w-full max-w-[40rem] mx-auto flex flex-col pb-8'
      onSubmit={handleSubmit(handleLoginSubmit)}
    >
      <div className='flex flex-row gap-6'>
        <Input
          label='E-mail'
          type='text'
          placeholder='Digite seu e-mail'
          {...register('email')}
          error={errors.email?.message}
        />
        <Input
          label='Senha'
          type='password'
          placeholder='Digite sua senha'
          {...register('password')}
          error={errors.password?.message}
        />
      </div>
      <Button className='max-w-[350px] mx-auto mt-8'>Entrar</Button>
      <Link
        href='/esqueci-minha-senha'
        title='Acessar tela para redefinir senha'
        className='block text-center mt-6 underline transition-all hover:opacity-[0.8]'
      >
        Esqueceu sua senha?
      </Link>
    </form>
  );
}
