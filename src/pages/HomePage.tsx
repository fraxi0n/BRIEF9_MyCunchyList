import { useEffect, useState } from 'react'

import '../App.css'
import type { Movie } from '../type';
import { apiOptions } from '../hooks/useApi';
// import { RandomCarousel } from '../molecules/RandomCarousel';
import { CarouselV2 } from '../molecules/CarouselV2';
import { useScreenWatch } from '../hooks/useScreenWatch';
import { Tab } from '../templates/Tab';



export default function Home() {
  // const [count, setCount] = useState(0)
  const [popMovie, setPopMovie] = useState <Movie[]>([])
  

  const SW = useScreenWatch()


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



  return (<>
    <h1> MyCrunchyList</h1>
    <Tab tabNames={["test 1 ", "test 2" ]}/>
        {
      popMovie ? <CarouselV2 movies={popMovie} numberColumn={SW.carColumn} />
        : <div> rien a afficher ici </div>
    }
    {/* {
      popMovie ? <RandomCarousel movies={popMovie} numberColumn={numberColumn} />
        : <div> rien a afficher ici </div>
    } */}
  </>)

};