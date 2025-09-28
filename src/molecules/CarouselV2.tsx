import {  useEffect, useState } from 'react';
import type { Movie } from '../type';
import { MovieCard } from './MovieCard';
import { useFetch, type SearchOptionType } from '../hooks/useApi';
import { useScreenWatch } from '../hooks/useScreenWatch';
interface Props { moviesSearch:  SearchOptionType }

export function CarouselV2({ moviesSearch  }: Props) {

  const [index, setIndex] = useState<number>(0)
  const [extendedMovies, setExtendedMovies] = useState<Movie[]>([])

  const SW = useScreenWatch()


  const movies = useFetch(moviesSearch)



  useEffect(()=>{
    const moviesINDEXED = movies.map((mov,i)=> {return {...mov,id : i+1 }}  )
    console.log (moviesINDEXED)
    //on au lieu de doubler le tableau on calcul pile ce dont on a besoin 
    setExtendedMovies(  [ ...moviesINDEXED , ...moviesINDEXED.slice(0,SW.carColumn-1) ]   )   
  },[movies,SW.carColumn]
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
    const domReturn = extendedMovies.slice(index, index + SW.carColumn).map((mov) => <MovieCard mov={mov}></MovieCard>)


    return <div className='is-flex is-fullwidth'>
      {getCarButton(-SW.carColumn)}
      {getCarButton(-1)}
      {domReturn}
      {getCarButton(+1)}
      {getCarButton(+SW.carColumn)}
    </div>
  }




  return (
    <>
      <h3> { moviesSearch}</h3>
      {
        SW.isMobile ?
          getMobileView()
          :
          getDesktopView()
      }

    </>
  )
}