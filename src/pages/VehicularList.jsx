import WorkerHome from "./WorkerHome.jsx";
import Footer from "../components/Footer.jsx";
import VehicleCard from "../components/VehicleCard.jsx";
import {useEffect, useState} from "react";

function VehicularList() {
    const [data, setData] = useState(null)
    const [pag,setPag]=useState(0);

    useEffect(function(){
        fetch(`http://54.160.253.80:8080/vehicle/page/${pag}`)
            .then (response => response.json())
            .then (data => setData(data.data))
            .catch (err => console.log(err))
    },[pag])


    return(
        <>
            <WorkerHome></WorkerHome>
                {
                    data?.map(vehicle=>(
                        <VehicleCard
                            key={vehicle.id}
                            brand={vehicle.brand}
                            vehiclePicture={vehicle.vehiclePicture}
                            model={vehicle.model}
                            year={vehicle.year}
                            color={vehicle.color}
                        />
                    ))
                }
                <div>
                <button onClick={setPag(pag-1)}>prev</button>
                <button onClick={setPag(pag+1)}>next</button>
                </div>
                    <Footer></Footer>
        </>
    )
}export default VehicularList;