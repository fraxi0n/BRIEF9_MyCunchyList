import { useEffect, useState } from 'react';
import type { Movie } from '../type';
import { MovieCard } from './MovieCard';
interface Props { mov: Movie, title?: string, isMobile: boolean }

export function Carousel({ mov, title = "", isMobile }: Props) {

  const [index, setIndex] = useState<number>(0)
  const movies: Movie[] = []

  type NumberCardDisplay = 4 | -4
  const numberCardDisplay : NumberCardDisplay = 4

  movies.push({ ...mov, id: 1 })
  movies.push({ ...mov, id: 2 })
  movies.push({ ...mov, id: 3 })
  movies.push({ ...mov, id: 4 })
  movies.push({ ...mov, id: 5 })
  movies.push({ ...mov, id: 6 })
  movies.push({ ...mov, id: 7 })
  movies.push({ ...mov, id: 8 })
  movies.push({ ...mov, id: 9 })

  const doubleMovies = [...movies, ...movies]

  useEffect(
    () => {
      if (index + numberCardDisplay >= doubleMovies.length) {
        const diff = index + numberCardDisplay - doubleMovies.length
        setIndex(doubleMovies.length / 2+ diff - numberCardDisplay )
      }
      if (index <= 0) {
        const diff = 0-index
        setIndex(doubleMovies.length / 2 - diff)
      }
    }
    ,
    [doubleMovies.length, index]
  )

  const getCarButton = (incValue: 1 | -1 |  NumberCardDisplay) => {
    const incFunc = () => { setIndex((index) => index + incValue) }


    if (incValue < 0 )
    {
      return <button onClick={incFunc} > {incValue === -1 ? '<' : '<<'}   </button>
    }
    else 
    {
      return <button onClick={incFunc} > {incValue === 1 ? '>' : '>>'}   </button>
    }
  }

  const getMobileView = () => {
    const domReturn = movies.map((mov) => <MovieCard mov={mov}></MovieCard>)
    return <>{domReturn} </>
  }

  const getDesktopView = () => {
    const domReturn = doubleMovies.slice(index, index + 4).map((mov) => <MovieCard mov={mov}></MovieCard>)


    return <div className='is-flex'>
      {getCarButton(-4)}
      {getCarButton(-1)}
      {domReturn}
      {getCarButton(+1)}
      {getCarButton(+4)}
    </div>
  }




  return (
    <>
      <h3>Carousel {" " + title}</h3>
      {
        isMobile ?
          getMobileView()
          :
          getDesktopView()
      }

    </>
  )
}