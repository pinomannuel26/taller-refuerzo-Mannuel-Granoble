import { useState } from "react"
import './MiContador.scss'
const MiContador = () => {
  const [contador, setContador] = useState(0);
  return (
    <div className="contador">
        <h1>Contador: {contador}</h1>
        <button onClick={() => setContador(contador + 1)}>+</button>
        <button onClick={() => setContador(contador - 1)}>-</button>
    </div>
    
  )
}

export default MiContador