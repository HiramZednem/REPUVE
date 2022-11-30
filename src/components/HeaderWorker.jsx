import '../assets/styles/headerWorker.css'
import GobiernoIcon from '../assets/images/GobiernoDeMexico.png'
import InicioS from '../assets/images/inicioS.png'
import Perfil from '../assets/images/perfil.png'
import Home from '../assets/images/Home.png'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function HeaderWorker() {
const {user} = useContext(UserContext);
console.log(user)

    
    return ( 
        <div className='HeaderWorker'>
            <div className='greenPartHeader'>
                <img className='GobiernoIcon' src={GobiernoIcon}/>
                <ul className='navegar'>
                    <li><a href="">Registro Vehicular</a></li>
                    <li><a href="">Lista Vehicular</a></li>
                    <li><a href="">Consulta Vehicular</a></li>
                </ul>
                <img className='InicioS' src={InicioS} />
            </div>
           <div className='user'>
                <div className='userconter'>
                    <div className='hola'>
                        <p className='saludo'>Hola de Nuevo!</p>
                        {/* AQUI */}

                        <p className='nombre'>nombre del usuario
                        {user.name}</p>
                    </div>
                    <img className='Perfil' src={Perfil}/>
                </div>
                <p className='Pregunta'>Que deseas realizar hoy...</p>
                <div className='Opciones'>
                    <img className='Home' src={Home} />
                    <ul className='Acciones'>
                        <li><a href="">Registro Vehicular</a></li>
                        <li><a href="">Consulta Vehicular</a></li>
                        <li><a href="">Lista de Vehiculos</a></li>
                        <li><a href="">Registro Agencia</a></li>
                    </ul>
                </div>
           </div>


        </div>
     );
}

export default HeaderWorker;

