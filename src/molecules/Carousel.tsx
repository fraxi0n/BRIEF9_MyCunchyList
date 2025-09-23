import { useEffect, useState } from 'react';
import type { Movie } from '../type';
import { MovieCard } from './MovieCard';
interface Props  { mov : Movie , pString? : string , }

export function Carousel( { mov, pString} :Props) {

  const [string, setString] = useState <string> (pString?pString:"")
  const movies : Movie[] =  []

  movies.push(mov)
  movies.push(mov)
  movies.push(mov)
  movies.push(mov)
  movies.push(mov)
  movies.push(mov)
  movies.push(mov)
  movies.push(mov)
  
  useEffect(
    ()=>{

      if (!string)
      {
        setString("placeholder")
      }
      console.log(string)
    }
    ,
    [string]
  )

  return (
    <>
    <h3>Carousel</h3>
      {
        movies.map((mov)=> <MovieCard mov={mov}></MovieCard>)
      }
    



    </>
  )
}