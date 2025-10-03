import '../App.css'
import { Tab } from '../templates/Tab';



export default function Home() {

  return (<>
    {/* <h1> MyCrunchyList</h1> */}
    <Tab tabNames={["popular", "upcoming","top_rated" ]}/>
  </>)

};