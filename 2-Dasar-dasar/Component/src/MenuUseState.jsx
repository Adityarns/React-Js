import { useState } from "react"

export default function JumlahClick () {
    
    const [count,setCounter] = useState(0)
    let newCount = 0
    function clickHandler2(){
        newCount = count + 1
        console.log(`Klik = ${newCount} kali`)
        setCounter(newCount)
    }

    return (
        <button onClick={clickHandler2}>Saya diklik {count}</button>
    )
}