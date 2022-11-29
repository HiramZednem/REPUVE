import '../assets/styles/cosultaVehicular.css'
import ConsultaVehicularInform from "./ConsultaVehicularInform.jsx";
import {useState} from "react";
//Imagenes Importadas
import lupa from "../assets/images/lupa.svg";
import searchIcon from '../assets/images/searchIcon.png'
import fotoBusqueda from "../assets/images/image-consulta-vehicular1.svg";



function ConsultaVehiculo() {
    const [niv,setNiv]= useState('');
    const [data,setData]=useState(null);
    const handlerNivInput=(e)=>setNiv(e.target.value);

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
            console.log(data)
        }
    }

const handlerSubmitForm=(e)=>{
        e.preventDefault();

         fetch(`http://54.160.253.80:8080/vehicle/${niv}`)
        .then(response => response.json())
        .then (data => vehicleData(data))
        .catch(err=>console.log("Unexpected error, try again later"));

    }

    return(
        <>
            <div className="container body-busqueda">
                <div className="row">
                    <div className="col-5 encabezado-consulta">
                        <span className="title-consulta">
                        <img src={lupa} id="lupa"/>Consulta Vehicular</span>
                    </div>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="div-10">
                        <div className="alerta">
                            <span className="alerta-info">POR FAVOR INGRESE LOS DATOS COMO SE LE INDICA</span>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-6 formulario">
                        <form action="" onSubmit={handlerSubmitForm}>
                            <div className="row">
                                <p className="ingrese-nvi">Ingrese Numero de Indetificacion Vehicular (NVI)</p>
                                <input id="input-busqueda" onChange={handlerNivInput} type="text" className="form-control" placeholder="***********"/>
                            </div>
                            <br />
                            <div className="row boton-buscar">
                                <button className="buscar-vehiculo">Buscar</button>
                            </div>
                            <br /><br /><br /><br />
                            <div className="row ley">
                                <span className="ley-info">Este servicio de consulta es GRATUITO de acuerdo con el Artículo 6 de la Ley del Registro Público Vehicular.</span>
                            </div>
                        </form>
                    </div>
                    <div className="col-4">
                        <img src={fotoBusqueda} id="foto-consultaVehicular"/>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>

              {/*{*/}
              {/*data && data?.map(vehicle=>*/}
              {/*      <VehicleCard*/}
              {/*          key={vehicle.id}*/}
              {/*          brand={vehicle.brand}*/}
              {/*vehiclePic={vehicle.vehiclePicture}*/}
              {/*          model={vehicle.model}*/}
              {/*          year={vehicle.year}*/}
              {/*          color={vehicle.color}*/}
              {/*      />*/}
              {/*  )}*/}
        </>
    );

}
export default ConsultaVehiculo;