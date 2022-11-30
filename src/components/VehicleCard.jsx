
function VehicleCard({brand, vehiclePicture, model, year, color}) {
    return(
        <>
            <div className={"vehicleCard"}>
                <div>
                    <span>marca: {brand}</span>
                    <span>Modelo: {model}</span>
                    <span>Año: {year}</span>
                    <span>color: {color}</span>
                    {/*<img src={vehiclePicture}/>*/}
                </div>
            </div>
        </>
    )
}export default VehicleCard;