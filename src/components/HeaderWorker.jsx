import '../assets/styles/headerWorker.css'
import GobiernoIcon from '../assets/images/GobiernoDeMexico.png'
import InicioS from '../assets/images/inicioS.png'
import Perfil from '../assets/images/perfil.png'
import Home from '../assets/images/Home.png'


import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext.jsx'
import { IsLoginContext } from "../contexts/IsLoginContext";
import Swal from "sweetalert2";
import axios from "axios";


function HeaderWorker() {
    const { user,setUser } = useContext(UserContext)
    const { setIsLogued} = useContext(IsLoginContext)

    const handleClick = () => {
        setUser([])
        setIsLogued(false)
    }


    const handlePic=()=>{
        Swal.fire({
            title: 'Suba su foto de perfil',
            input: 'file',
            showCancelButton: true,
            confirmButtonText: 'Subir',
            showLoaderOnConfirm: true,
            preConfirm: (e) => {
                let file =e

                let formData =new FormData();
                formData.append('image', file)
                formData.append('idWorker', user.id )
                return(
                axios({
                    url:`http://18.215.246.106:8080/file/worker`,
                    method:"POST",
                    headers:{
                        "Content-Type": "multipart/form-data",
                        "Accept": "application/json",
                        "type": "formData"      },
                    data:formData
                }).then((resp)=>{
                }).then(data=> {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Foto Actualizada, el cambio puede tardar en reflejarce',
                            showConfirmButton: false,
                            timer: 1500
                        })

                }
                ))
            },
            allowOutsideClick: () => !Swal.isLoading()
        })
    }



    return ( 
        <div className='HeaderWorker'>
            <div className='greenPartHeader'>
                <img className='GobiernoIcon' src={GobiernoIcon}/>
                <ul className='navegar'>
                    <li><a href="/gob/registry/vehicle">Registro Vehicular</a></li>
                    <li><a href="/gob/vehicular/catalog">Lista Vehicular</a></li>
                    <li><a href="/gob/vehicular/consult">Consulta Vehicular</a></li>
                </ul>
                <img className='InicioS' src={InicioS} />
                <button className='cerrarSesion' onClick={() =>handleClick()}>Cerrar Sesion</button>
            </div>
           <div className='user'>
                <div className='userconter'>
                    <div className='hola'>
                        <p className='saludo'>Hola de Nuevo!</p>
                        <p className='nombre'>{user.name}</p>
                    </div>
                    <img className='Perfil' onClick={(handlePic)}  src={user.profilePicture}/>
                </div>

               <span>que quieres hacer hoy...</span>
                <div className='Opciones'>
                    <img className='Home' src={Home} />
                    <ul className='Acciones'>
                        <li><a href="/gob/registry/vehicle">Registro Vehicular</a></li>
                        <li><a href="/gob/vehicular/consult">Consulta Vehicular</a></li>
                        <li><a href="/gob/vehicular/catalog">Lista de Vehiculos</a></li>
                        <li><a href="/gob/registry/agency">Registro Agencia</a></li>
                    </ul>
                </div>
           </div>


        </div>
     );
}

export default HeaderWorker;

