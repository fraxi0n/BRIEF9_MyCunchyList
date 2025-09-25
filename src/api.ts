import { useEffect } from "react"
import type { Movie } from "./type"

  const apiOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2Y1ZWNmZDM2NDQwMzQyZDA3YjExNWE1NzM1ZGIwMCIsIm5iZiI6MTc1ODU0MDg2NS4wOTUsInN1YiI6IjY4ZDEzNDQxNGE3MzM3MmRjZGNlYzg2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PQsaW1OvINdFLSPXPMlLD8y23HuzrjmUGqrjXbR7IvQ'
  }
}

//export const useCustomFetch = ()=> {

//   useEffect(() => {

//     const customFetch = async () => {
//       try {
//         const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=fr&page=1', apiOptions)
//         const parseRes = await response.json()
//         const typedRes: Movie[] = parseRes.results
//         return typedRes
//       }
//       catch (error) {
//         console.log(error
//         )
//         return []
//       };

//     }

//     customFetch()

//   }, [])

//   return {}
// }





export{ apiOptions } 