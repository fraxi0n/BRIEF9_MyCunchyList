// import { useState } from 'react'

import './MovieCard.css'
import type { Movie } from '../type';
interface Props { mov: Movie }

export function MovieCard({ mov }: Props) {


  const  getPoster = () =>{

    if( mov.poster_path )
    {
      console.log(mov.poster_path)


      return  <img
                src={ "https://image.tmdb.org/t/p/w342"+mov.poster_path}
                alt={mov.id.toString()}
              />

    }

    return <> img not found</>


  }


  return (
    <>
      
        <div className={"card movie-card"}>
          <div className="card-image">
            <figure className="image ">
              {getPoster()}
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
              </div>
              <div className="media-content">
                <p className="title is-6">{mov.title}</p>
                <p className="subtitle is-6">{ }</p>
              </div>
            </div>

            <div className="content">
              Genre :
              {mov.genres?.length && mov.genres.map((g) => <> {g.name + " "}</>)}
              <br />
              <time dateTime={mov.release_date}> {mov.release_date}</time>
            </div>
          </div>
        </div>
      
    </>
  )
}