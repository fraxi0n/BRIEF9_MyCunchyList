import { useState } from 'react';
import { useScreenWatch } from '../hooks/useScreenWatch';
import { CarouselV2 } from '../molecules/CarouselV2';
import type { SearchOptionType } from '../hooks/useApi';
interface Props { tabNames: SearchOptionType[] }

export function Tab({ tabNames }: Props) {

  const [activeTab, setActiveTab] = useState<SearchOptionType>(tabNames[0])

  const SW = useScreenWatch()

  const getButtonClass = (tabName: SearchOptionType) => {

    let classReturned = "button"
    if (SW.isMobile && tabName === activeTab) {
      classReturned += ' is-active'
    }
    return classReturned
  }

const tabDom = () => { return <>
 {tabNames.map(name => {return <a href={'#'+name}>

 <button className={getButtonClass(name)}
  onClick={()=> setActiveTab(name)} > {name}</button>
  </a>}
    )}
    </>
  }


  const mobileView = () =>  { return <>
  {tabDom()}
   <CarouselV2 moviesSearch={activeTab}  />
  {tabDom()}
  </>}

    const desktopView = () =>  {return <>
     {tabDom()}
     {
      tabNames.map( name => {return  <CarouselV2 moviesSearch={name}  />  }   )
     }

  </>}

  return (
    <>
      {SW.isMobile? mobileView() : desktopView()
      }
    </>
  )
}