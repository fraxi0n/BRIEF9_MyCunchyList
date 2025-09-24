import {  useState } from 'react';
import type { Movie } from '../type';
import { MovieCard } from './MovieCard';
interface Props { movies: Movie [], title?: string, numberColumn: 1 | 3 | 5 }

export function Carousel({ movies, title = "", numberColumn }: Props) {

  const [index, setIndex] = useState<number>(0)
  // const movies: Movie[] = []


  // movies.push({ ...mov, id: 1 })
  // movies.push({ ...mov, id: 2 })
  // movies.push({ ...mov, id: 3 })
  // movies.push({ ...mov, id: 4 })
  // movies.push({ ...mov, id: 5 })
  // movies.push({ ...mov, id: 6 })
  // movies.push({ ...mov, id: 7 })
  // movies.push({ ...mov, id: 8 })
  // movies.push({ ...mov, id: 9 })

  const doubleMovies = [...movies, ...movies]

  const setIndexWithWatch = (pIndex : number ) =>
  {
    let targetIndex = pIndex

      const indexTooHight  = (targetIndex + numberColumn) - doubleMovies.length
      if (indexTooHight> 0) {
        targetIndex = (movies.length + indexTooHight )- numberColumn 
      }
      
      const indexTooLow  = targetIndex
      if (indexTooLow < 0) {
        targetIndex =  movies.length - indexTooLow
      }
    
    setIndex(targetIndex)
  }

  const getCarButton = (incValue: number) => {
    const incFunc = () => { setIndexWithWatch( index + incValue) }

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