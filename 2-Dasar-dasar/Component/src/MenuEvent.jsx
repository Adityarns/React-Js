import { useState } from "react"

export default function MenuEvent(){
    
    function clickHandler(nama){
        console.log(`Saya diklik oleh ${nama}`)
    }

    return(
        <button onClick={()=>clickHandler('Adit')}>click</button>
    )
}