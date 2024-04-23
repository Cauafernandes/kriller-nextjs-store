import Link from 'next/link';

import { Carousel } from '../components';

export default function Home() {
  const banners = [
    {
      id: 1,
      name: 'Banner 1',
      alt: '',
      url: '',
      destination: '',
    },
  ];

  return (
    <div className='w-full block'>
      <Carousel>
        {banners.map((banner) => {
          return (
            <>
              <Link href={banner.destination}>
                <img src={banner.url} alt={banner.alt} />
              </Link>
            </>
          );
        })}
      </Carousel>
    </div>
  );
}
