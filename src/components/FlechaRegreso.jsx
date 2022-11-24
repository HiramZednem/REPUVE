/*Imagenes Exportadas*/
import flecha from "../assets/images/LeftArrow.svg";
/*CSS*/
import "../assets/styles/flecha.css";

function FlechaRegreso() {
    return (
        <div className="container-flecha-alineacion">
            <div className="container-flecha">
                <img src={flecha} alt="flecha" id="flechaleft" />
            </div>
        </div>
    );
}

export default FlechaRegreso;