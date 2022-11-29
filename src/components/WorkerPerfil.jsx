import '../assets/styles/workerPerfil.css'
import GobiernoIcon from '../assets/images/GobiernoDeMexico.png'
import InicioS from '../assets/images/inicioS.png'
import Perfil from '../assets/images/perfil.png'
import Home from '../assets/images/Home.png'

function HeaderWorker() {
    return ( 
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-4">
                        <h2 className="title-welcome">¡Hola de Nuevo!</h2>
                        <p className="name-worker">Juan Perez Mendez</p>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-2">
                        <div className="perfil-circle"></div>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5">
                        <h1 className="wyd">Que deseas realizar hoy...</h1>
                    </div>
                    <div className="col-6"></div>
                </div>
            </div>
        </section>
     );
}

export default HeaderWorker;

