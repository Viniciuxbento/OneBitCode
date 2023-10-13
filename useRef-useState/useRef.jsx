import { useRef, useState } from "react";
import RefExample from "./RefExample";

function App() {
  let variable = 0 // ao usar useState o valor volta ao original
  const ref = useRef(0);// use ref não faz nada com a pagina
  let [state, setState] = useState(0); // useState da refresh 

  const showValues = () => {
    alert(`
      Variável: ${variable}
      Ref: ${ref.current}
      State: ${state}
    `)
  }

  return (
    <div>
      <p>Variável: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>
      <button onClick={() => variable++}>Aumentar Variável</button>
      <button onClick={() => ref.current++}>Aumentar Ref</button>
      <button onClick={() => setState(state => state + 1)}>Aumentar State</button>
      <button onClick={showValues}>Exibir valores</button>
      <hr />
      <RefExample />
    </div>
  );
}

export default App




import { useRef } from 'react';

const RefExample = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();// função para voltar cursor para dentro do input em caso de erro 
    inputRef.current.style.backgroundColor = "#f64348"
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focar</button>
    </div>
  );
};

export default RefExample;