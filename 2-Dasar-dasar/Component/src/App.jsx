import { useCallback, useState } from "react";
import LoopingMenu from "./LoopingMenu";
import MenuEvent from "./MenuEvent";
import MenuResto from "./MenuMakanan";
import MenuMemo from "./MenuMemo";
import MenuProps from "./MenuProps";
import MenuUseEffect from "./MenuUseEffect";
import MenuUseMemo from "./MenuUseMemo";
import MenuUseState from "./MenuUseState"
import MenuUseCallback from "./MenuUseCallback";


export default function App(){
  const styleApp = {
    marginBottom: "100px"
  };
  const [name,setName] = useState("Adit")
  const [like,setLikes] = useState(0)

  const gantiNama = useCallback(() => {
    let channelName = ""
    if (name == "Adit"){
      channelName = "ipul"
    }
    else{
      channelName = "Adit"
    }
    setName(channelName)
  }, [name])


  return(
    <div style={styleApp}>
      //Ternary Operator dan && Operator
      <MenuResto></MenuResto>
      //Looping dengan map
      <LoopingMenu></LoopingMenu>
      //Props
      <MenuProps hari ="Senin" mood="Bete"></MenuProps>
      <MenuProps hari ="Selasa" mood="Happy"></MenuProps>
      //Event clickHandler
      <MenuEvent></MenuEvent>
      //useState
      <MenuUseState></MenuUseState>
      //useEffect
      {/* <MenuUseEffect></MenuUseEffect> */}
      //useMemo
      {/* <MenuUseMemo></MenuUseMemo> */}
      //memo
      <p><button onClick={()=> setLikes(like+1)}>{like} like</button></p>
      {/* <MenuMemo name={name}>
      </MenuMemo>
      <button onClick={gantiNama}>Ganti Nama Channel</button> */}
      //useCallback
      <MenuUseCallback name={name} aksi={gantiNama}></MenuUseCallback>
      

    </div>
  )
}