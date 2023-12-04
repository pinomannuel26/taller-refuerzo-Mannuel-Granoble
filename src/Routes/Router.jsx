import { createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetallesProducto from '../Components/DetallesProductos/DetallesProducto'
import Layout from '../Components/Layout/Layout'
import MiComponente from '../Components/MiComponente/MiComponente'
import MiComponenteConUserReducer from '../Components/MiComponenteConUserReducer/MiComponenteConUserReducer'
import MiContador from '../Components/MiContador/MiContador'
import MisProductos from '../Components/MisProductos/MisProductos'
import Page404 from '../Components/Page404/Page404'


export const AppContext = createContext({});

const Router = () => {
  return (

            <BrowserRouter >
                <Routes>
                
                        <Route  element={<Layout/>} >
                        <Route index element={<MiComponente/>} />
                        <Route path="micomponente" element={<MiComponente/>} />
                        <Route path="micontador" element={<MiContador/>} />
                        <Route path="misproductos" element={<MisProductos/>} >
                            <Route path=':name' element={<DetallesProducto/>} />
                        </Route>
                        <Route path="/micontadorConReducer" element={<MiComponenteConUserReducer />} />
                        <Route path="*" element={<Page404/>} />
                        </Route>

                </Routes>
            </BrowserRouter>

  )
}

export default Router