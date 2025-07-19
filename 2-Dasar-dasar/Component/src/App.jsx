import LoopingMenu from "./LoopingMenu";
import MenuResto from "./MenuMakanan";
import MenuProps from "./MenuProps";
export default function App(){
  return(
    <>
      <MenuResto></MenuResto>
      <LoopingMenu></LoopingMenu>
      <MenuProps hari ="Senin" mood="Bete"></MenuProps>
      <MenuProps hari ="Selasa" mood="Happy"></MenuProps>
    </>
  )
}