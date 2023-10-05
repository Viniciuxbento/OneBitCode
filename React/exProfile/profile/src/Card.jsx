

export default function Card(props){
    return (
        <div className="containerDados">
            <img className="img" src={props.src} alt="" />
            <h1>{props.nome}</h1>
            <hr className="hr" />
            <p>{props.descricao}</p>
            <hr className="hr" />
            <p>{props.numero}</p>
            <hr className="hr" />
            <p>{props.email}</p>
            <hr className="hr" />
            
        </div>
    )

}