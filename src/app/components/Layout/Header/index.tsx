import Image from 'next/image';
import Link from 'next/link';

import { NotificationBar, Menu } from './components';
import { HeartIcon, ShoppingBagIcon, UserIcon } from '../../Icons';

export function Header() {
  return (
    <>
      <NotificationBar />

      <header className='w-full bg-white py-6'>
        <div className='w-full max-w-screen-lg flex flex-row items-center mx-auto gap-8'>
          <Link
            href='/'
            title='Voltar a página inicial'
            className='text-black text-[24px]'
          >
            <figure>
              <Image
                src={'/logo.png'}
                alt='Logo Kriller'
                width={200}
                height={70}
                quality={100}
              />
            </figure>
          </Link>

          <input
            type='text'
            placeholder='Buscar'
            className='w-full max-w-[767px] text-black text-[14px] rounded-md border border-solid border-gray100 mx-auto p-2 focus:outline-none'
          />

          <div className='flex flex-row gap-5 ml-auto'>
            <Link
              href='/login'
              title='Acessar minha conta'
              className='text-primary text-[14px]'
            >
              <UserIcon size={24} />
            </Link>
            <Link
              href='/meus-favoritos'
              title='Acessar meus favoritos'
              className='text-primary text-[14px]'
            >
              <HeartIcon size={24} />
            </Link>
            <Link
              href='/carrinho'
              title='Acessar meu carrinho'
              className='text-primary text-[14px]'
            >
              <ShoppingBagIcon size={24} />
            </Link>
          </div>
        </div>

        <div className='bg-primary text-white mt-6'>
          <div className='max-w-screen-lg mx-auto'>
            <Menu />
          </div>
        </div>
      </header>
    </>
  );
}
