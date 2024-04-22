'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { server } from '@/config';

import { schema, schemaData } from '../schema';

import { Button, Input } from '@/app/components';

export default function FormRegister() {
  const [type, setType] = useState('PF');

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<schemaData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      document: '',
      birthDate: '',
      phone: '',
      email: '',
      password: '',
    },
  });

  async function handleRegisterSubmit(data: schemaData) {
    const response = await server.post('customer/register', data);

    if (!response) {
      setError('password', { message: 'Usuário ou senha inválido.' });
    }

    return;
  }

  function handleChangeType(type: 'PF' | 'PJ') {
    setType(type);
  }

  return (
    <form
      className='w-full max-w-[40rem] mx-auto flex flex-col pb-8'
      onSubmit={handleSubmit(handleRegisterSubmit)}
    >
      <div className='w-full flex flex-row gap-4 items-center justify-center text-[16px] mb-10'>
        <button
          type='button'
          className='[&[data-active=true]]:underline'
          data-active={type === 'PF'}
          onClick={() => handleChangeType('PF')}
        >
          Pessoa física
        </button>
        <button
          type='button'
          className='[&[data-active=true]]:underline'
          data-active={type === 'PJ'}
          onClick={() => handleChangeType('PJ')}
        >
          Pessoa jurídica
        </button>
      </div>

      <div className='flex flex-col gap-6'>
        <div className='flex flex-row gap-6'>
          <Input
            label='Nome'
            type='text'
            placeholder='Digite seu nome'
            {...register('firstName')}
            error={errors.firstName?.message}
          />
          <Input
            label='Sobrenome'
            type='text'
            placeholder='Digite seu sobrenome'
            {...register('lastName')}
            error={errors.lastName?.message}
          />
        </div>

        <div className='flex flex-row gap-6'>
          <Input
            label='Data de nascimento'
            type='text'
            placeholder='Digite sua data de nascimento'
            {...register('birthDate')}
            error={errors.birthDate?.message}
          />
          <Input
            label={type === 'PF' ? 'CPF' : 'CNPJ'}
            type='text'
            placeholder='Digite seu telefone ou celular'
            {...register('phone')}
            error={errors.phone?.message}
          />
        </div>

        <div className='flex flex-row gap-6'>
          <div className='w-full max-w-[50%]'>
            <Input
              label='Telefone / Celular'
              type='text'
              placeholder='Digite seu telefone ou celular'
              {...register('phone')}
              error={errors.phone?.message}
            />
          </div>
        </div>

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
      </div>
      <Button className='max-w-[350px] mx-auto mt-8'>Cadastrar</Button>
    </form>
  );
}
