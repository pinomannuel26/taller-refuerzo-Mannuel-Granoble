import { Link } from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {
  return (
    <div className='navDestock'>
        <nav >
            <ul className='navDestock__navegacion'>
                <li className='navDestock__navegacion__link'><Link to='/micomponente'>Mi Componente</Link></li> 
                <li className='navDestock__navegacion__link'><Link to='/micontador'>Mi Contador</Link></li> 
                <li className='navDestock__navegacion__link'><Link to='/misproductos'>Mis Productos</Link></li>
                <li className='navDestock__navegacion__link'><Link to='/micontadorConReducer'>Mi Contador Con Reducer</Link></li>   
            </ul>
        </nav>
    </div>
  
  )
}

export default NavBar