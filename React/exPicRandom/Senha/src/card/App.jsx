import { useState } from "react"

export default function App() {
    let [gerador, setGerador] = useState("")
    let [copy, setCopy] = useState("Copiar")
    let [tamanho, setTamanho] = useState("12")

    function gerar() {
        const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
        let novaSenha = ""
        for (let i = 0; i < tamanho; i++) {
            const position = Math.floor(Math.random() * characters.length)
            novaSenha += characters[position]
        }

        setGerador(novaSenha);
        setCopy("Copiar")
    }

    function copiar() {
        setCopy("Copiado!")
        window.navigator.clipboard.writeText(gerador)
    }

    return (
        <div className="container">
            <h1>Gerador de Senha</h1>

            <div>
                <div>
                    <label htmlFor="passwordSize">Tamanho: </label>
                    <input
                        type="number"
                        id="passwordSize"
                        min={1}
                        value={tamanho}
                        onChange={(ev) => setTamanho(ev.target.value)}
                    />
                </div>
                <button onClick={gerar}>Gerar senha com {tamanho} caracteres.</button>
                <button onClick={copiar}>{copy}</button>
            </div>
            <h2>{gerador}</h2>


        </div>
    )
}