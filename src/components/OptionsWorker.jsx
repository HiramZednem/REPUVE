//Imagenes Importadas
import Home from "../assets/images/Home.svg";
//CSS
import "../assets/styles/optionsWorker.css";

function OptionsWorker() {
    return (  
        <section>
            <div className="container ">
                <div className="row opciones-trabajador">
                    <div className="col-1">
                        <button className="home">
                            <img src={Home} alt="" id="icon-home" />
                        </button>
                    </div>
                    <div className="col-2">
                        <a href="#">
                            <h3 className="options">Registro Vehicular</h3>
                        </a>
                    </div>
                    <div className="col-2">
                        <a href="#">
                            <h3 className="options">Consulta Vehicular</h3>
                        </a>
                    </div>
                    <div className="col-2">
                        <a href="#">
                            <h3 className="options">Lista Vehiculos</h3>
                        </a>
                    </div>
                    <div className="col-2">
                        <a href="#">
                            <h3 className="options">Registro Agencia</h3>
                        </a>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </section>
    );
}

export default OptionsWorker;