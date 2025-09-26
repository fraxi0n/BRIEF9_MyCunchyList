import { useEffect, useState } from 'react'

import '../App.css'
import type { Movie } from '../type';
import { apiOptions } from '../api';
import { RandomCarousel } from '../molecules/RandomCarousel';



export default function Home() {
  // const [count, setCount] = useState(0)
  const [popMovie, setPopMovie] = useState <Movie[]>([])


  type NumberColumn = 1 | 3 | 5
  const [numberColumn, setNumberColumn] = useState<NumberColumn>(1);

  useEffect(() => {

    const getPopularsMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=fr&page=1', apiOptions)
        const parseRes = await response.json()
        const typedRes: Movie[] = parseRes.results
        setPopMovie(typedRes)
      }
      catch (error) {
        console.log(error
        )
      };

    }

    getPopularsMovies()

  }, [])


  useEffect(() => {

    console.log("POP MOVIE")
    console.log(popMovie)

  }, [popMovie])

  useEffect(() => {
    const handleResize = () => {
      const newW = window.innerWidth
      if (newW > 1400) {
        setNumberColumn(5)
      }
      else if (newW < 1024) {
        setNumberColumn(1)
      }
      else {
        setNumberColumn(3)
      }
    }
    handleResize()


    window.addEventListener("resize", handleResize);

    // cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (<>
    <h1> MyCrunchyList</h1>
    {
      popMovie ? <RandomCarousel movies={popMovie} numberColumn={numberColumn} />
        : <div> rien a afficher ici </div>
    }
  </>)

};