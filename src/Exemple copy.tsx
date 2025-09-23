import { useEffect, useState } from 'react';
interface Props  { pString? : string }

export function Exemple( {  pString} :Props) {

  const [string, setString] = useState <string> (pString?pString:"")
  useEffect(
    ()=>{

      if (!string)
      {
        setString("placeholder")
      }
      console.log(string)
    }
    ,
    [string]
  )

  return (
    <>
    <p>
      {string}
    </p>



    </>
  )
}