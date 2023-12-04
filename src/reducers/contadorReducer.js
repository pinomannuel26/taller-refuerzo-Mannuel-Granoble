export const valorInicial = { valor: 0 };
const contadorReducer = (state = valorInicial, action) => {
    switch (action.type) {
      case 'AUMENTAR':
        return { valor: state.valor + 1 };
      case 'REDUCIR':
        return { valor: state.valor - 1 };
      default:
        return state;
    }
  };
  
  export default contadorReducer;
  