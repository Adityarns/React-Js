import LoopingMenu from "./LoopingMenu";
import MenuEvent from "./MenuEvent";
import MenuResto from "./MenuMakanan";
import MenuProps from "./MenuProps";
export default function App(){
  return(
    <>
      //Ternary Operator dan && Operator
      <MenuResto></MenuResto>
      //Looping dengan map
      <LoopingMenu></LoopingMenu>
      //Props
      <MenuProps hari ="Senin" mood="Bete"></MenuProps>
      <MenuProps hari ="Selasa" mood="Happy"></MenuProps>
      <MenuEvent></MenuEvent>

    </>
  )
}