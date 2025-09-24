import { useEffect, useState } from 'react'

import '../App.css'
import type { Movie } from '../type';
import { getBocchi } from '../api';
import { Carousel } from '../molecules/Carousel';



export default function Home() {
  // const [count, setCount] = useState(0)
  const [data, setData] = useState<Movie | undefined>(undefined)
  const [bocchi, setBocchi] = useState()
  // const [width, setWidth] = useState(window.innerWidth);

  type NumberColumn = 1 | 3 | 5
  const [numberColumn, setNumberColumn] = useState < NumberColumn>  (1);


  useEffect(() => {
    const handleResize = () => {
      const newW = window.innerWidth
        if(newW > 1400)
        {
          setNumberColumn(5)
        }
        else if (newW < 1024) {
          setNumberColumn(1)
        } 
        else
        {
          setNumberColumn(3)
        }
      }
    handleResize()


    window.addEventListener("resize", handleResize);

    // cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);




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
      data ? <Carousel mov={data} numberColumn={numberColumn} />
        : <div> rien a afficher ici </div>

    }
  </>)

};