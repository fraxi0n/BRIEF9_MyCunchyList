import { useEffect, useState } from 'react';
import type { Movie } from '../type';
import { MovieCard } from './MovieCard';
interface Props { mov: Movie, title?: string, numberColumn: 1 | 3 | 5 }

export function Carousel({ mov, title = "", numberColumn }: Props) {

  const [index, setIndex] = useState<number>(0)
  const movies: Movie[] = []


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


      const indexTooHight  = index + numberColumn - doubleMovies.length
      if (indexTooHight> 0) {
        setIndex( movies.length + indexTooHight - numberColumn )
      }
      
      const indexTooLow  = 0-index
      if (indexTooLow > 0) {
        setIndex( movies.length - indexTooLow)
      }
    }
    ,
    [movies.length, index, doubleMovies.length, numberColumn]
  )

  const getCarButton = (incValue: number) => {
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
    const domReturn = doubleMovies.slice(index, index + numberColumn).map((mov) => <MovieCard mov={mov}></MovieCard>)


    return <div className='is-flex'>
      {getCarButton(-numberColumn)}
      {getCarButton(-1)}
      {domReturn}
      {getCarButton(+1)}
      {getCarButton(+numberColumn)}
    </div>
  }




  return (
    <>
      <h3>Carousel {" " + title}</h3>
      {
        numberColumn===1 ?
          getMobileView()
          :
          getDesktopView()
      }

    </>
  )
}