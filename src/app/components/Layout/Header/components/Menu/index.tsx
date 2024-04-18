import Link from 'next/link';

import * as data from '../../../../../../../data/menu.json';

export function Menu() {
  return (
    <nav className='w-full'>
      <ul className='w-full flex flex-row gap-4'>
        {data.map((item) => (
          <li key={item.id}>
            <Link href={item.url} title={`Acessar ${item.name}`}>
              <span className='text-[14px]'>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
