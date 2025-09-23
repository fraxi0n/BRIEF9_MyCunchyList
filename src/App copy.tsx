// import { useState } from 'react'

import './App.css'
import type { Movie } from './type';
interface Props  { mov :Movie }

export function MoviePages( { mov } :Props) {
  

  return (
    <>

<div>
<h2>{mov.title}</h2>

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
{mov.genres.map( (g) => <p> {g.name}</p>)}


</div>



    </>
  )
}