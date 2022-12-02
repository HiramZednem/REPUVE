import '../assets/styles/vehicleCard.css'
function VehicleCard({brand, vehiclePicture, model, year, color}) {
    return(

        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <img className={"vehicle-image"} src={vehiclePicture}/>
                    </div>

                    <div className="user">
                        <div className="user-info">
                            <span>marca: {brand}</span>
                            <span>Modelo: {model}</span>
                            <span>Año: {year}</span>
                            <span>color: {color}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}export default VehicleCard;