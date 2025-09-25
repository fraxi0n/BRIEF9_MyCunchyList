import {  useEffect, useState } from 'react';
import type { Movie } from '../type';
import { MovieCard } from './MovieCard';
interface Props { movies: Movie [], title?: string, numberColumn: 1 | 3 | 5 }

export function CarouselV2({ movies, title = "", numberColumn }: Props) {

  const [index, setIndex] = useState<number>(0)
  const [extendedMovies, setExtendedMovies] = useState<Movie[]>([])

  useEffect(()=>{
    const moviesINDEXED = movies.map((mov,i)=> {return {...mov,id : i+1 }}  )
    console.log (moviesINDEXED)
    //on au lieu de doubler le tableau on calcul pile ce dont on a besoin 
    setExtendedMovies(  [ ...movies , ...movies.slice(0,numberColumn-1) ]   )   
  },[movies,numberColumn]
  )


  const setIndexWithWatch = (pIndex : number) =>
  {
    let targetIndex = pIndex
    
    //calcul beaucoup plus clair 
    // /!\ on calcul bien sur la taille de movies et non extendedMovies (nb reel de films )  
      if (targetIndex> movies.length) {
        targetIndex -= movies.length
      }
      if (targetIndex < 0) {
        targetIndex += movies.length
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
    const domReturn = extendedMovies.slice(index, index + numberColumn).map((mov) => <MovieCard mov={mov}></MovieCard>)


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