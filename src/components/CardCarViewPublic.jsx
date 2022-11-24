/*Hooks*/
/*Paginas Exportadas*/
/*Imagenes Exportadas*/
import carGrey from '../assets/images/car-metalic.svg';
/*CSS*/
import '../assets/styles/cardCarViewPublic.css';

function CardCarViewPublic(props) {

    return (  
        <div className="card-car-view-container">
            <div className="image-card">
                <img src={carGrey} alt="Foto" id="img-car"/>
            </div>
            <div className="info-card">
                <span className="model-car">MODELO</span>
                <span className="name-model">{props.character.model}NO</span>
                <br />
                <span className="info">AÑO</span>
                <span className="subtitle">{props.character.year}Año</span>
                <span className="info">COLOR</span>
                <span className="subtitle">{props.character.color}Color</span>
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
            </div>
        </div>
    );
}

export default CardCarViewPublic;