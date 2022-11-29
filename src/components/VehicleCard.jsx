
function VehicleCard(brand, vehiclePicture, model, year, color) {
    return(
        <>
            <div className={"vehicleCard"}>
                <style>
                    background-image= url('{vehiclePicture}')
                </style>
                <div>
                    <span>marca: {brand}</span>
                    <span>Modelo: {model}</span>
                    <span>Año: {year}</span>
                    <span>color: {color}</span>
                </div>
            </div>
        </>
    )
}export default VehicleCard;