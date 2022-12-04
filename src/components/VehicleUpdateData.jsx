import {useContext, useEffect, useState} from "react";
import {VehicleIdContext} from "../contexts/VehicleIdContext.jsx";

function vehicleUpdateData() {
    const {id}=useContext(VehicleIdContext)
    const [data,setData]=useState([])


    const [model, setModel] = useState("");
    const [brand, setBrand] = useState("");
    const [year, setYear] = useState("");
    const [color, setColor] = useState("");
    const [engineType, setEngineType] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [plate, setPlate] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [price, setPrice] = useState("");


    useEffect(()=>{
        fetch(`http://18.215.246.106:8080/vehicle/id/${id}`)
            .then(response=>response.json())
            .then(data=>setData(data.data))
            .catch(err=>console.log(err))
    },[])

const handlerUpdate=(e)=>{
e.preventDefault()

    const option = {
        method: 'PUT',
        headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Connection: "keep-alive",
        },
        body: JSON.stringify({
            brand: brand,
            model: model,
            year: year,
            color: color,
            engineType: engineType,
            fuelType: fuelType,
            plateNumber: plate,
            vehicleNumberId: data.vehicleNumberId,
            ownerName: name,
            ownerLastName: lastname,
            price: price,
            agencyId: data.agencyId,
        }),
    };

    fetch(`http://18.215.246.106:8080/vehicle/${id}`, option)
        .then(response => response.json())
        .then((o) => {
            console.log(o.data)
        })
        .catch((err) => console.log(err));

}

const hModel=(e)=>setModel(e.target.value)
    const hBrand = (e) => setBrand(e.target.value);
    const hYear = (event) => setYear(event.target.value);
    const hColor = (e) => setColor(e.target.value);
    const hEngineType = (e) => setEngineType(e.target.value);
    const hFuelType = (e) => setFuelType(e.target.value);
    const hPlate = (e) => setPlate(e.target.value);
    const hName = (e) => setName(e.target.value);
    const hLastname = (e) => setLastname(e.target.value);
    const hPrice = (e) => setPrice(e.target.value);


    return(
        <>
            <form onSubmit={handlerUpdate}>
            <div className={"container-infor"}>
                <span className={"old-data"}>modelo anterior: {data.model}</span><br/>
                <span className={"new-data"}>modelo nuevo:</span>
                <input className={"input-data"} type={'text'} onChange={hModel}/>
            </div>

            <div className={"container-infor"}>
                <span className={"old-data"}>marca anterior: {data.brand}</span><br/>
                <span className={"new-data"}>marca nueva:</span>
                <input className={"input-data"} type={'text'} onChange={hBrand}/>
            </div>

            <div className={"container-infor"}>
                <span className={"old-data"}>año anterior: {data.year}</span><br/>
                <span className={"new-data"}>año nuevo:</span>
                <input className={"input-data"} type={'number'} onChange={hYear}/>
            </div>

            <div className={"container-infor"}>
                <span className={"old-data"}>color anterior: {data.color}</span><br/>
                <span className={"new-data"}>color nuevo:</span>
                <input className={"input-data"} type={'text'} onChange={hColor}/>
            </div>

            <div className={"container-infor"}>
                <span className={"old-data"}>tipo de motor anterior: {data.engineType}</span><br/>
                <span className={"new-data"}>tipo de motor nuevo:</span>
                <input className={"input-data"} type={'text'} onChange={hEngineType}/>
            </div>

            <div className={"container-infor"}>
                <span className={"old-data"}>tipo de combustible anterior: {data.fuelType}</span><br/>
                <span className={"new-data"}>tipo de combustible nuevo:</span>
                <input className={"input-data"} type={'text'} onChange={hFuelType}/>
            </div>


            <div className={"container-infor"}>
                <span className={"old-data"}>numero de placa anterior: {data.plateNumber}</span><br/>
                <span className={"new-data"}>numero de placa nuevo:</span>
                <input className={"input-data"} type={'text'} onChange={hPlate}/>
            </div>

            <div className={"container-infor"}>
                <span className={"old-data"}>nombre(s) del dueño anterior: {data.ownerName}</span><br/>
                <span className={"new-data"}>nombre(s) del dueño nuevo:</span>
                <input className={"input-data"} type={'text'} onChange={hName}/>
            </div>

            <div className={"container-infor"}>
                <span className={"old-data"}>apellido(s) del dueño anterior: {data.ownerLastName}</span><br/>
                <span className={"new-data"}>apellido(s) del dueño nuevo:</span>
                <input className={"input-data"} type={'text'} onChange={hLastname}/>
            </div>

            <div className={"container-infor"}>
                <span className={"old-data"}>precio anterior: {data.price}</span><br/>
                <span className={"new-data"}>precio nuevo:</span>
                <input className={"input-data"} type={'number'} onChange={hPrice}/>
            </div>

                    <button> Actualizar</button>
            </form>

        </>
    )
}export default vehicleUpdateData;