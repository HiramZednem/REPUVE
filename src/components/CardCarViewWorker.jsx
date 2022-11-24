/*Imagenes Exportadas*/
import carGrey from '../assets/images/car-metalic.svg';
import flecha from "../assets/images/LeftArrow.svg";
/*CSS*/
import '../assets/styles/cardCarViewPublic.css';

function CardCarViewWorker(props) {
    return (  
        <div className="card-car-view-container">
            <div className="image-card">
                <img src={carGrey} alt="Foto" id="img-car"/>
            </div>
            <div className="info-card">
                <span className="model-car">MODELO</span>
                <span className="name-model">NO</span>
                <br />
                <span className="info">AÑO</span>
                <span className="subtitle">Año</span>
                <span className="info">COLOR</span>
                <span className="subtitle">Color</span>
                <span className="info">TIPO DE MOTOR</span>  
                <span className="subtitle">Tipo de Motor</span>       
                <span className="info">TIPO DE COMBUSTIBLE</span> 
                <span className="subtitle">Tipo de Combustible</span>        
                <span className="info">NUMERO DE SERIE</span>
                <span className="subtitle">Numero de Serie</span>         
                <span className="info">NUMERO DE PLACA</span>  
                <span className="subtitle">Numero de Placa</span>
                <span className="info">AGENCIA DE PROCEDENCIA</span>
                <span className="subtitle">Agencia Procedencia</span>       
                <br /><br /><br /><br /><br /><br /><br /><br />
                <span className="info">NVI</span> 
                <span className="subtitle">NVI</span>        
                <span className="info">PRECIO</span>   
                <span className="subtitle">Precio</span>
                <span className="info">ID DEL VEHICULO</span>   
                <span className="subtitle">xxx</span>
                <br />
                <span className="info-dueño">DATOS DEL DUEÑO</span>  
                <span className="datos-dueño">Nombre del Dueño</span>
                <span className="datos">xxxxxxxxxx</span>  
                <span className="datos-dueño">Apellidos del Dueño</span>
                <span className="datos">xxxxxxxxxx</span>  
            </div>
            <div className="container-flecha">
                <img src={flecha} alt="" />
            </div>
        </div>
    );
}

export default CardCarViewWorker;