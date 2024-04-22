'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useState } from 'react';

import { CaretLeftIcon, CaretRightIcon } from '../Icons';

interface CarouselProps {
  children?: JSX.Element[] | JSX.Element;
  useArrows?: boolean;
  useDots?: boolean;
}

export function Carousel({
  children,
  useArrows = false,
  useDots = false,
  ...props
}: CarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevButtonEnabled, setPrevButtonEnabled] = useState(false);
  const [nextButtonEnabled, setNextButtonEnabled] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    align: 'center',
    loop: true,
  });

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div className='w-full relative'>
      {/* Arrow Left - Previous */}
      {useArrows && (
        <button
          onClick={scrollPrev}
          className='absolute left-0 top-0 bottom-0 my-auto w-[30px] h-[30px] bg-primary transition-all hover:bg-primaryHover'
        >
          <CaretLeftIcon />
        </button>
      )}

      {/* Main Carousel Container */}
      <div ref={emblaRef} {...props}>
        {children}
      </div>

      {/* Arrow Right - Next */}
      {useArrows && (
        <button
          onClick={scrollNext}
          className='absolute right-0 top-0 bottom-0 my-auto w-[30px] h-[30px] bg-primary transition-all hover:bg-primaryHover'
        >
          <CaretRightIcon />
        </button>
      )}

      {/* Carousel Dots */}
      {useDots && <div></div>}
    </div>
  );
}
