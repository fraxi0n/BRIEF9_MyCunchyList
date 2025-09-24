import { useEffect, useState } from 'react'

import '../App.css'
import type { Movie } from '../type';
import { getBocchi } from '../api';
import { Carousel } from '../molecules/Carousel';



export default function Home() {
  // const [count, setCount] = useState(0)
  const [data, setData] = useState<Movie | undefined>(undefined)
  const [bocchi, setBocchi] = useState()



  useEffect(() => {
    const fetch = async () => {
      if (!bocchi) {
        const fetchedBocchi = await getBocchi()
        setBocchi(fetchedBocchi)
      }

    }
    fetch()
  }, [bocchi, setBocchi])


  async function loadData() {
    try {
      if (!data) {
        const response = await fetch('response.json');
        const data = await response.json(); // data est un objet JS
        setData(data)
        // console.log(data);
      }
    } catch (error) {
      console.error("Erreur :", error);
    }
  }

  loadData();
  return (<>
    <h1> MyCrunchyList</h1>
    {
      data ? <Carousel mov={data} />
        : <div> rien a afficher ici </div>

    }
  </>)

};