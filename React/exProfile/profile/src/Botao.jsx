export default function Botao(props){
    return(
        <div className="containerBotao">
            <button className="botao"><a href={props.github}>Github </a></button>
            <button className="botao"><a href={props.linkedin}>Linkedin </a></button>
            <button className="botao"><a href={props.twitter}>Twitter</a></button>
        </div>
    )

}