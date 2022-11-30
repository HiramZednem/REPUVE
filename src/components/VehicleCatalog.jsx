import {useEffect, useState} from "react";
import VehicleCard from "./VehicleCard.jsx";

function VehicleCatalog() {
const [data, setData]=useState(null);
const [pages,setPages]=useState(0);

    useEffect(() => {
        return () => {
            fetch(`http://18.215.246.106:8080/vehicle/page/${pages}`)
                .then (response => response.json())
                .then(data=>setData(data.data))
                .catch(err=>console.log(err))

        };
    }, [pages]);


    return(
        <>
            <div className={"vehicles-container"}>
    `   {
                data && data.results.map( vehicleCard=>(
                    <VehicleCard
                key={vehicleCard.id}
                brand={vehicleCard.brand}
                model={vehicleCard.model}
                year={vehicleCard.year}
                color={vehicleCard.color}
                vehiclePicture={vehicleCard.vehiclePicture}
                />
                ))

            }
            </div>
            <div className={"bttns"}>
                <button onClick={()=>setPages(pages+1)}>Next</button>
                <button onClick={()=> setPages( pages-1)}>Prev</button>
            </div>
        </>
    )
}export default VehicleCatalog;