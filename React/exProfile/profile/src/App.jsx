import ImgProfile from "../public/fotoMinha.jpg"
import Botao from "./Botao";
import Card from "./Card"

export default function App(){
  return(
    <div className="container">
      <Card src={ImgProfile} nome="Vinicius" descricao="developer" numero ="48 999473547" email="vinicius@gmail.com"  />
      <Botao github="#" linkedin="#" twitter ="#"/>
    </div>
  )
}