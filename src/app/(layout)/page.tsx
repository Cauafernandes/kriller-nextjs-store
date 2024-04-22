import { Carousel } from '../components';

export default function Home() {
  const banners = [
    {
      id: 1,
      name: 'Banner 1',
      alt: '',
      url: '',
    },
  ];
  return (
    <div className='w-full block'>
      <Carousel></Carousel>
    </div>
  );
}
