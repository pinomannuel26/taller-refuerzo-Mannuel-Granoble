import  { useReducer } from 'react';
import contadorReducer from '../../reducers/contadorReducer';
import './MiContadorConuserReducer.scss'

const MiComponenteConUserReducer = () => {
    const [state, dispatch] = useReducer(contadorReducer, { valor: 0 });

  const incrementar = () => {
    dispatch({ type: 'AUMENTAR' });
  };

  const disminuir = () => {
    dispatch({ type: 'REDUCIR' });
  };

  return (
    <div className="contador">
      <h1>Contador con useReducer</h1>
      <p>Valor actual: {state.valor}</p>
      <button onClick={incrementar}>+</button>
      <button onClick={disminuir}>-</button>
    </div>
  );
}

export default MiComponenteConUserReducer