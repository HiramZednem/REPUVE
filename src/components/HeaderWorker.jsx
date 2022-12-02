import '../assets/styles/headerWorker.css'
import GobiernoIcon from '../assets/images/GobiernoDeMexico.png'
import InicioS from '../assets/images/inicioS.png'
import Perfil from '../assets/images/perfil.png'
import Home from '../assets/images/Home.png'

import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'
import { IsLoginContext } from '../contexts/IsLoginContext'



function HeaderWorker() {
    const { user,setUser } = useContext(UserContext)
    const { setIsLogued} = useContext(IsLoginContext)

    const handleClick = () => {
        setUser([])
        setIsLogued(false)
    }

    return ( 
        <div className='HeaderWorker'>
            
            <div className='greenPartHeader'>
                <img className='GobiernoIcon' src={GobiernoIcon}/>
                <ul className='navegar'>
                    <li><a href="/gob/registry/vehicle">Registro Vehicular</a></li>
                    <li><a href="/gob/vehicular/catalog">Lista Vehicular</a></li>
                    <li><a href="/consultaVehicular">Consulta Vehicular</a></li>
                </ul>
                <img className='InicioS' src={InicioS} /> 
                <button className='cerrarSesion' onClick={() =>handleClick()}>Cerrar Sesion</button>
            </div>
            
           
                <>
                <div className='userconter'>
                    <div className='hola'>
                        <p className='saludo'>Hola de Nuevo!</p>
                        <p className='nombre'>{user.name} {user.lastname}</p>
                    </div>
                    <img className='Perfil' src={Perfil}/>
                </div>
                 </>
           
           <p className='Pregunta'>Que deseas realizar hoy...</p>
                <div className='Opciones'>
                    <img className='Home' src={Home} />
                    <ul className='Acciones'>
                        <li><a href="/gob/registry/vehicle">Registro Vehicular</a></li>
                        <li><a href="/consultaVehicular">Consulta Vehicular</a></li>
                        <li><a href="/gob/vehicular/catalog">Lista de Vehiculos</a></li>
                        <li><a href="/gob/registry/agency">Registro Agencia</a></li>
                    </ul>
                </div>
               
                </div>
     );
}

export default HeaderWorker;

