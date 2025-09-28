import '../App.css'
// import { RandomCarousel } from '../molecules/RandomCarousel';
import { Tab } from '../templates/Tab';



export default function Home() {
  // const [count, setCount] = useState(0)
  // const [popMovie, setPopMovie] = useState <Movie[]>([])
  

  // const SW = useScreenWatch()




  return (<>
    <h1> MyCrunchyList</h1>
    <Tab tabNames={["popular", "upcoming","top_rated" ]}/>
  </>)

};