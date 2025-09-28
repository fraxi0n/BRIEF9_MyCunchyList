import { useEffect, useState } from "react"
import type { Movie } from "../type"

const apiOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2Y1ZWNmZDM2NDQwMzQyZDA3YjExNWE1NzM1ZGIwMCIsIm5iZiI6MTc1ODU0MDg2NS4wOTUsInN1YiI6IjY4ZDEzNDQxNGE3MzM3MmRjZGNlYzg2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PQsaW1OvINdFLSPXPMlLD8y23HuzrjmUGqrjXbR7IvQ'
  }
}


const url = {
  popular : "/3/movie/popular?language=fr&page=1" ,
  upcoming : "/3/movie/upcoming?language=fr&page=1" ,
  top_rated : "/3/movie/top_rated?language=fr&page=1" ,
} 

export type SearchOptionType  = keyof typeof  url  


export const useFetch = ( search :SearchOptionType )=> {

  const [movies , setMovies] = useState<Movie[]> ([])

  useEffect(() => {
    const customFetch = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org'+url[search], apiOptions)
        const parseRes = await response.json()
        const typedRes: Movie[] = parseRes.results
        setMovies(typedRes)
        return typedRes
      }
      catch (error) {
        console.log(error
        )
        return []
      };

    }
    customFetch()

  }, [search])

  return movies
}





export{ apiOptions  } 