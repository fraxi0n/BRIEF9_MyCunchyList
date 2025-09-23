
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2Y1ZWNmZDM2NDQwMzQyZDA3YjExNWE1NzM1ZGIwMCIsIm5iZiI6MTc1ODU0MDg2NS4wOTUsInN1YiI6IjY4ZDEzNDQxNGE3MzM3MmRjZGNlYzg2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PQsaW1OvINdFLSPXPMlLD8y23HuzrjmUGqrjXbR7IvQ'
  }
};
export const getMoviesListByPopularity = async ()=> {


  
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'

    const response = await fetch(url , options)
    return response

}


const getBocchi = async ()=>  {
      //   const options = {
      //   method: 'GET',
      //   headers: {
      //     accept: 'application/json',
      //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2Y1ZWNmZDM2NDQwMzQyZDA3YjExNWE1NzM1ZGIwMCIsIm5iZiI6MTc1ODU0MDg2NS4wOTUsInN1YiI6IjY4ZDEzNDQxNGE3MzM3MmRjZGNlYzg2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PQsaW1OvINdFLSPXPMlLD8y23HuzrjmUGqrjXbR7IvQ'
      //   }
      // }

      try {
        const rawResponse = await fetch('https://api.themoviedb.org/3/tv/119100/season/1/episode/3/images', options)
        const response = await rawResponse.json()
        console.log(response)
        return response

      }
      catch (err) {
        console.error(err)
        return {}

      }

}

export{getBocchi}