import '../App.css'
// import { RandomCarousel } from '../molecules/RandomCarousel';
import { CarouselV2 } from '../molecules/CarouselV2';
import { useScreenWatch } from '../hooks/useScreenWatch';
import { Tab } from '../templates/Tab';



export default function Home() {
  // const [count, setCount] = useState(0)
  // const [popMovie, setPopMovie] = useState <Movie[]>([])
  

  const SW = useScreenWatch()




  return (<>
    <h1> MyCrunchyList</h1>
    <Tab tabNames={["test 1 ", "test 2" ]}/>
        
      <CarouselV2 moviesSearch={"popular"} numberColumn={SW.carColumn} />
      <CarouselV2 moviesSearch={"upcoming"} numberColumn={SW.carColumn} />
      <CarouselV2 moviesSearch={"top_rated"} numberColumn={SW.carColumn} />
  </>)

};