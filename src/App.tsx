// import { useEffect, useState } from 'react'

// import './App.css'
// import type { Movie } from './type';
// // import { getMoviesListByPopularity } from './api';



// export default function App() {
//   // const [count, setCount] = useState(0)
//   const [data, setData] = useState<Movie | undefined>(undefined)
//   const [bocchi, setBocchi] = useState<Response | undefined>(undefined)



//   useEffect(() => {



//   if (!bocchi)
//   {

//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2Y1ZWNmZDM2NDQwMzQyZDA3YjExNWE1NzM1ZGIwMCIsIm5iZiI6MTc1ODU0MDg2NS4wOTUsInN1YiI6IjY4ZDEzNDQxNGE3MzM3MmRjZGNlYzg2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PQsaW1OvINdFLSPXPMlLD8y23HuzrjmUGqrjXbR7IvQ'
//       }
//     }
    
//     fetch('https://api.themoviedb.org/3/tv/119100/season/1/episode/3/images', options)
//     .then(res => res.json())
//     .then( res => {setBocchi(res)
//       console.log(bocchi)
//      } )
//     .catch(err => console.error(err))

    
//   }



//   }, [])




//   async function loadData() {
//     try {
//       if (!data) {
//         const response = await fetch('response.json');
//         const data = await response.json(); // data est un objet JS
//         setData(data)
//         // console.log(data);
//       }
//     } catch (error) {
//       console.error("Erreur :", error);
//     }
//   }

//   loadData();




//   return (<>
//     <h1> MyCrunchyList</h1>
//     {
//       data ? <MoviePages mov={data} />
//         : <div> rien a afficher ici </div>

//     }
//   </>)

// };