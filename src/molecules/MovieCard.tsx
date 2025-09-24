// import { useState } from 'react'

import '../App.css'
import type { Movie } from '../type';
interface Props { mov: Movie }

export function MovieCard({ mov }: Props) {


  return (
    <>
      
        <div className={"card movieCard"}>
          <div className="card-image">
            <figure className="image ">
              <img
                src={mov.poster_path ? mov.poster_path : ""}
                alt={mov.id.toString()}
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src="https://bulma.io/assets/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{mov.title}</p>
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