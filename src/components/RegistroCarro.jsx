import {useState, useEffect, useRef} from "react";
import axios from "axios";

import registroPhoto from "../assets/images/registro-carro.png";

import "../assets/styles/normalize.css"; //Quita estilos por defecto del navegador.
import "../assets/styles/RegistroCarro.css";

export const RegistroCarro = () => {

  //Variables para registro;
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [engineType, setEngineType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [plate, setPlate] = useState("");
  const [niv, setNiv] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [agencyName, setAgencyName] = useState("");
  const [price, setPrice] = useState("");
  const [data,setData]=useState([]);

  //Consulta de las agencias
  const [agencys, setAgencys] = useState([]);
//set id para la imagen
  const [registro,setRegistro]=useState(false)

  /* `${api}/agency` */
  const getProducts = async () => {
    await axios 
      .get(`http://18.215.246.106:8080/agency`)
      .then(({ data }) => setAgencys(data.data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const option = {
      method: "POST",
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
        vehicleNumberId: niv,
        ownerName: name,
        ownerLastName: lastname,
        price: price,
        agencyId: agencyName,
      }),
    };

    fetch(`http://18.215.246.106:8080/vehicle`, option)
      .then(response => response.json())
      .then((data) => {
        setRegistro(true)
        setData(data.data)
      })
      .catch((err) => console.log(err));
  };

  // Handlers onChange
  const hModel = (e) => setModel(e.target.value);
  const hBrand = (e) => setBrand(e.target.value);
  const hYear = (event) => setYear(event.target.value);
  const hColor = (e) => setColor(e.target.value);
  const hEngineType = (e) => setEngineType(e.target.value);
  const hFuelType = (e) => setFuelType(e.target.value);
  const hSerialNumber = (e) => setSerialNumber(e.target.value);
  const hPlate = (e) => setPlate(e.target.value);
  const hNvi = (e) => setNiv(e.target.value);
  const hName = (e) => setName(e.target.value);
  const hLastname = (e) => setLastname(e.target.value);
  const hAgencyName = (e) => setAgencyName(e.target.value);
  const hPrice = (e) => setPrice(e.target.value);



  const hUploadFile = (e) => {
    let file =e.target.files[0]

    let formData =new FormData();
      formData.append('image', file)
    formData.append('idVehicle', data.id)

    axios({
      url:`http://18.215.246.106:8080/file/vehicle`,
      method:"POST",
      headers:{
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        "type": "formData"      },
      data:formData
    }).then((resp)=>{

    })

  }





  return (
    <div className="contenido">
      <div className="contenido-principal">
        <form onSubmit={submitHandler} className="form">
          <ul className="campos-formulario">
            <li>
              <label htmlFor="model">Modelo del Vehiculo</label>
              <input type="text" id="model" name="model" onChange={hModel} />
            </li>

            <li>
              <label htmlFor="brand">Marca del Vehiculo</label>
              <input type="text" id="brand" name="brand" onChange={hBrand} />
            </li>

            <li>
              <label htmlFor="year">Año del Vehiculo</label>
              <input type="number" id="year" name="year" onChange={hYear} />
            </li>

            <li>
              <label htmlFor="color">Color del Vehiculo</label>
              <input type="text" id="color" name="color" onChange={hColor} />
            </li>

            <li>
              <label htmlFor="engineType">Tipo del Motor</label>
              <input
                type="text"
                id="engineType"
                name="engineType"
                onChange={hEngineType}
              />
            </li>

            <li>
              <label htmlFor="fuelType">Tipo de Combustible</label>
              <input
                type="text"
                id="fuelType"
                name="fuelType"
                onChange={hFuelType}
              />
            </li>

            <li>
              <label htmlFor="serialNumber">Numero de Serie</label>
              <input
                type="number"
                id="serialNumber"
                name="serialNumber"
                onChange={hSerialNumber}
              />
            </li>

            <li>
              <label htmlFor="plate">Numero de Placa</label>
              <input type="text" id="plate" name="plate" onChange={hPlate} />
            </li>

            <li>
              <label htmlFor="nvi">
                Numero de Identificación Vehicular (NVI)
              </label>
              <input type="number" id="nvi" name="nvi" onChange={hNvi} />
            </li>

            <li>
              <label htmlFor="name">Nombre(s) del Dueño</label>
              <input type="text" id="name" name="name" onChange={hName} />
            </li>

            <li>
              <label htmlFor="lastname">Apellido(s) del Dueño</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                onChange={hLastname}
              />
            </li>

            <li>
              <label htmlFor="agency">Nombre de la Agencia que Procede</label>
              <select name="agency" onChange={hAgencyName}>
                <option value="">seleccionar-agencias</option>
                {agencys.map((agency) => {
                  return <option  key={agency.id} value={agency.id}>{agency.name}</option>;
                })}
              </select>
            </li>

            <li>
              <label htmlFor="price">Precio</label>
              <input type="number" id="price" name="price" onChange={hPrice} />
            </li>
          </ul>
          <div className="button">
          <button>Registrar</button>
          </div>
        </form>
      </div>
      <div className="imagen">
        <img src={registroPhoto} alt="Registro Banner" />
      </div>
      {
        registro&&<form>
        <label htmlFor={"imageUpload"}> foto del vehiculo</label>
          <input id={"imageUpload"} type={"file"} onChange={(e)=>hUploadFile(e)}/>
            <button type={"button"}> Subir</button>
          </form>


      }
    </div>
  );
};
