//Componentes Importados
import HeaderWorker from "../components/HeaderWorker";
import WorkerPerfil from "../components/WorkerPerfil";
import OptionsWorker from "../components/OptionsWorker";
import CardCarListWorker from "../components/CardCarListWorker";
import Footer from "../components/Footer";
//CSS
import "../assets/styles/workerListCars.css";
//Imagenes Importadas
import Left from "../assets/images/L.svg";
import Right from "../assets/images/R.svg";

function WorkerListCars() {
    return (  
        <>
        <HeaderWorker />
        <WorkerPerfil />
        <OptionsWorker />
        <div className="container">
            <div className="row list-cards">
                <div className="col-12 ">
                    <CardCarListWorker />
                </div>
            </div>
            <div className="row">
                <div className="col-5"></div>
                <div className="col-2 buttons">
                    <button className="atrasList"> <img src={Left} alt=""  className="flechas"/></button>
                    <button className="adelanteList"><img src={Right} alt="" className="flechas"/></button>
                </div>
                <div className="col-5"></div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default WorkerListCars;
