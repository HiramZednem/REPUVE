import 'bootstrap/dist/css/bootstrap.css'
import '../assets/styles/cosultaVehicular.css'
import Swal from "sweetalert2";
import ConsultaVehicularInform from "./ConsultaVehicularInform.jsx";
import {useContext, useState} from "react";
import searchIcon from '../assets/images/searchIcon.png'
import {useNavigate} from "react-router-dom";
import VehicleCard from "./VehicleCard.jsx";

import {VehicleIdContext} from "../contexts/VehicleIdContext.jsx";



function ConsultaVehiculo() {
    const [niv,setNiv]= useState('');
    const [data,setData]=useState([]);
    const handlerNivInput=(e)=>setNiv(e.target.value);
    const [info,setInfo]=useState(false)
    const {setId}=useContext(VehicleIdContext)



    const vehicleData = (data) => {
        if ( data.data == null ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Vehicle not Found!',
                footer: '<b>error?</b><br/><span>Verifique que la informacion sea correcta e intente de nuevo</span>'
            })
        }else {
            setData(data.data)
            console.log(data.data)
            setInfo(true)
            setId(data.data.id)
        }
    }

const handlerSubmitForm=(e)=>{
        e.preventDefault();

         fetch(`http://18.215.246.106:8080/vehicle/${niv}`)
        .then(response => response.json())
        .then (data => vehicleData(data))
        .catch(err=>console.log("Unexpected error, try again later"));

    }

    return(
        <>
            <div className={"head-title"}>
                <img src={searchIcon} width={"2.5%"} height={"2.5%"}/>
                <h1 className={"h1-cont-consulta"}>Consulta Vehicular</h1>
            </div><br/>

            <div className={"info-mssg"}>
                <h2 className={"h2-cont-consult"}>&nbsp;Por favor ingrese los datos tal cual aparece
                    en su tarjeta de circulacion&nbsp;</h2>
            </div>
            <br/><br/><br/>

            <form className={"form-nivCheck"} onSubmit={handlerSubmitForm}>
                <div className="form-floating mb-3">
                    <input onChange={handlerNivInput} type="text" className="form-control" id="floatingInput" placeholder="***********"/>
                        <label htmlFor="floatingInput">Numero de Identificacion Vehicular(NIV)</label>
                </div>
                <button className={"bttn-searchForm"}>Buscar</button>
            </form>
            <br/>
                <div>
                    {
                         info&& <VehicleCard
                        key={data.id}
                        id={data.id}
                        model={data.model}
                        brand={data.brand}
                        year={data.year}
                        color={data.color}
                        vehiclePicture={data.vehiclePicture}

                        />
                    }
                </div>

            <ConsultaVehicularInform></ConsultaVehicularInform>
        </>
    );

}
export default ConsultaVehiculo;