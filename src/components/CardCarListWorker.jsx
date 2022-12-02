//CSS
import "../assets/styles/cardCarListWorker.css";
//Imagenes Importadas
import carGrey from "../assets/images/carGrey.svg";
import arrowR from "../assets/images/arrowRight.svg"
function CardCarListWorker() {
    return (  
        <div className="card car">
            <img src={carGrey} className="card-img-top" alt="..." />
            <div className="card-body link-from-car">
                <button id="button-listCar">
                    <img src={arrowR} alt="" />
                </button>
            </div>
        </div>
    );
}

export default CardCarListWorker;