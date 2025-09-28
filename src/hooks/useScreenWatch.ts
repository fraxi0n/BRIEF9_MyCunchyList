import { useEffect, useState } from "react"


export const  useScreenWatch = ()=> {

    type NumberColumn = 1 | 3 | 5
  const [numberColumn, setNumberColumn] = useState<NumberColumn>(1);
  const [pxWidth, setPxWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(true);



  useEffect(() => {
    const handleResize = () => {

      const newW = window.innerWidth
      setPxWidth(newW)

      if (newW > 1400) {
        setNumberColumn(5)
        setIsMobile(false)
        
      }
      else if (newW < 1024) {
        setNumberColumn(1)
        setIsMobile(true)
      }
      else {
        setNumberColumn(3)
        setIsMobile(false)
      }
    }
    handleResize()


    window.addEventListener("resize", handleResize);

    // cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  

  return { width :pxWidth , carColumn : numberColumn ,isMobile : isMobile  }
}

