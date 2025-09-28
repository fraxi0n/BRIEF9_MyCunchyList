import { useEffect, useState } from 'react';
import { useScreenWatch } from '../hooks/useScreenWatch';
import { CarouselV2 } from '../molecules/CarouselV2';
interface Props  { tabNames  : string []}

export function Tab( {  tabNames} :Props) {

  // const [index, setIndex] = useState (0)

  const SW = useScreenWatch()

  const tabDom = () => {


    return <> {tabNames.map(tabName => {return <button> {tabName}</button>}
    )}
    </>
      
    
  }





  const mobileView = () =>  {<>
  {tabDom}
   <CarouselV2 movies={[]} numberColumn={1} />
  
  </>}

    const desktopView = () =>  {return<>
     {tabDom}
    {tabDom}
  
  </>}



  return (
    <>

      {SW.isMobile? mobileView() : desktopView()
      }

    </>
  )
}