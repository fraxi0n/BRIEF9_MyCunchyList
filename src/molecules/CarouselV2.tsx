import {  useState } from 'react';
import { MovieCard } from './MovieCard';
import { useFetch, type SearchOptionType } from '../hooks/useApi';
import { useScreenWatch } from '../hooks/useScreenWatch';
interface Props { moviesSearch:  SearchOptionType }

export function CarouselV2({ moviesSearch  }: Props) {

  const [index, setIndex] = useState<number>(0)

  const SW = useScreenWatch()


  const movies = useFetch(moviesSearch)

  const extMovies = [...movies,...movies]


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
      return <button className=' button is-large' onClick={incFunc} > {incValue === -1 ? '<' : '<<'}   </button>
    }
    else 
    {
      return <button className=' button is-large'  onClick={incFunc} > {incValue === 1 ? '>' : '>>'}   </button>
    }
  }

  const getMobileView = () => {
    const domReturn = movies.map((mov) => <MovieCard mov={mov}></MovieCard>)
    return <>{domReturn} </>
  }

  const getDesktopView = () => {
    const domReturn = extMovies.slice(index, index + SW.carColumn).map((mov) => <MovieCard mov={mov}></MovieCard>)


    return <div className='is-flex is-fullwidth'>
      <div className='is-flex is-flex-direction-column is-justify-content-center'>
      {getCarButton(-1)}
      {getCarButton(-SW.carColumn)}
      </div>
      {domReturn}
      <div className='is-flex is-flex-direction-column is-justify-content-center'>
      {getCarButton(+1)}
      {getCarButton(+SW.carColumn)}
      </div>

    </div>
  }




  return (
    <>
      <h3 id={moviesSearch} className={"title mt-6"}> {  moviesSearch.toUpperCase() }</h3>
      {
        SW.isMobile ?
          getMobileView()
          :
          getDesktopView()
      }

    </>
  )
}