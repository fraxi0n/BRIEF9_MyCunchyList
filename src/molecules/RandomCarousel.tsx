import type { Movie } from '../type';

import { Carousel } from './Carousel';
import { CarouselKevinV } from './CarouselKevinV';
interface Props { movies: Movie [], title?: string, numberColumn: 1 | 3 | 5 }

export function RandomCarousel({ movies, title = "", numberColumn }: Props) { 

  const returnRandomVersionOfCarousel = ()=>{
    const random =  Math.ceil( Math.random() *3)
    switch (random)
    {
      case (1):return <Carousel movies={movies} title={title} numberColumn={numberColumn}/>
      case (3):return <CarouselKevinV movies={movies} numberColumn={numberColumn}/>
    }
  }


  return (//qu'est ce qu'on s'amuse
    <>
    {
      returnRandomVersionOfCarousel()
    }
    </>
  )
}