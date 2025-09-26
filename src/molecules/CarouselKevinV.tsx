import {  useState } from 'react';
import type { Movie } from '../type';
import { MovieCard } from './MovieCard';
interface Props { movies: Movie [], title?: string, numberColumn: 1 | 3 | 5 }

export function CarouselKevinV({ movies, title = "", numberColumn }: Props) {

  const [index, setIndex] = useState<number>(0)


       const moviesINDEXED = movies.map((mov,i)=> {return {...mov,id : i+1 }}  ) // exemple 


  const doubleMovies = [...moviesINDEXED, ...moviesINDEXED]
  

  const setIndexWithWatch = (pIndex : number ) =>
  {
    const  targetIndex = (pIndex + movies.length ) % movies.length 
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