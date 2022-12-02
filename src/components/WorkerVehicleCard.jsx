
/*CSS*/
import '../assets/styles/workerVehicleCard.css';

function WorkerVehicleCard(props) {

    return (
        <div className="card-car-view-container">
            <div className="image-card">
                <img src={carGrey} alt="Foto" id="img-car"/>
            </div>
            <div className="info-card">
                <span className="model-car">MODELO</span>
                <span className="name-model">{props.character.model}</span>
                <br />
                <span className="info">AÑO</span>
                <span className="subtitle">{props.character.year}</span>
                <span className="info">COLOR</span>
                <span className="subtitle">{props.character.color}</span>
                <span className="info">TIPO DE MOTOR</span>
                <span className="subtitle">{props.character.engineType}</span>
                <span className="info">TIPO DE COMBUSTIBLE</span>
                <span className="subtitle">{props.character.fuelType}</span>
                <span className="info">NUMERO DE PLACA</span>
                <span className="subtitle">{props.character.plateNumber}</span>
                <span className="info">AGENCIA DE PROCEDENCIA</span>
                <span className="subtitle">{props.character.agencyName}</span>
                <br /><br /><br /><br /><br /><br /><br />
                <span className="info">NVI</span>
                <span className="subtitle">{props.character.vehicleNumberId}</span>
                <span className="info">PRECIO</span>
                <span className="subtitle">{props.character.price}</span>
                <span className="info">ID DEL VEHICULO</span>
                <span className="subtitle">{props.character.id}</span>
                <br />
                <span className="info-dueño">DATOS DEL DUEÑO</span>
                <span className="datos-dueño">Nombre del Dueño</span>
                <span className="name-owner">{props.character.ownerName}</span>
                <span className="datos-dueño">Apellidos del Dueño</span>
                <span className="name-owner">{props.character.ownerLastName}</span>
            </div>
            <div className="container-flecha">
                <img src={edit} alt="" />
            </div>
        </div>
    );
}

export default WorkerVehicleCard;