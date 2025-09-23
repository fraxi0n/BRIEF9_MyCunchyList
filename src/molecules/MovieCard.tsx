// import { useState } from 'react'

import '../App.css'
import type { Movie } from '../type';
interface Props { mov: Movie }

export function MovieCard({ mov }: Props) {


  return (
    <>
      <div>
        <div className={"card"}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://bulma.io/assets/images/placeholders/1280x960.png"
                alt="Placeholder image"
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
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
              iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
              <a href="#">#responsive</a>
              <br />
              <time dateTime={mov.release_date}></time>
            </div>
          </div>
        </div>

        <div>
          {mov.release_date}
        </div>
        <div>
          {mov.popularity}
        </div>
        <div>
          {mov.vote_average}
        </div>
        <div>
          {mov.vote_count}
        </div>
        {mov.genres.map((g) => <p> {g.name}</p>)}
      </div>
    </>
  )
}