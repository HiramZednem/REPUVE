import '../assets/styles/vehicleCard.css'
import {useContext, useState} from "react";
import {IsLoginContext} from "../contexts/IsLoginContext.jsx";
import {useNavigate} from "react-router-dom";
import data from "bootstrap/js/src/dom/data.js";
import {VehicleIdContext} from "../contexts/VehicleIdContext.jsx";

function VehicleCard({brand, vehiclePicture, model, year, color}) {
    const {isLogued} = useContext(IsLoginContext)
    const navigate=useNavigate();

    const handlerBttn=()=>{
        isLogued?navigate('/gob/vehicle/consult'):navigate('/vehicle/consult')
    }

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
                        <button onClick={handlerBttn}>Detalles</button>
                    </div>
                </div>
            </div>
        </>
    )
}export default VehicleCard;