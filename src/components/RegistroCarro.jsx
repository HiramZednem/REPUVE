import { useState, useEffect } from "react";
import axios from "axios";
//Imagenes Importadas
import upload from "../assets/images/upload.svg";
import registroPhoto from "../assets/images/registro-carro.png";
import registreV from "../assets/images/image-registreV.svg";

import "../assets/styles/normalize.css"; //Quita estilos por defecto del navegador.
import "../assets/styles/registroCarro.css";

function RegistroCarro() {
  const api = "http://54.160.253.80:8080";

  //Variables para registro;
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [engineType, setEngineType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [plate, setPlate] = useState("");
  const [nvi, setNvi] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [agencyName, setAgencyName] = useState("");
  const [price, setPrice] = useState("");
  var id;

  //Consulta de las agencias
  const [agencys, setAgencys] = useState([]);

  /* `${api}/agency` */
  const getProducts = async () => {
    await axios 
      .get(`http://54.160.253.80:8080/agency`)
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
        id,
        brand: brand,
        model: model,
        year: year,
        color: color,
        engineType: engineType,
        fuelType: fuelType,
        plateNumber: plate,
        vehicleNumberId: nvi,
        ownerName: name,
        ownerLastName: lastname,
        price: price,
        agencyId: agencyName,
      }),
    };

    fetch(`${api}/vehicle`, option)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("err"));
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
  const hNvi = (e) => setNvi(e.target.value);
  const hName = (e) => setName(e.target.value);
  const hLastname = (e) => setLastname(e.target.value);
  const hAgencyName = (e) => setAgencyName(e.target.value);
  const hPrice = (e) => setPrice(e.target.value);

  return (  
    <section>
      <div className="container">
        <div className="row car-registrer">
          <div className="col-1"></div>
          <div className="col-5">
            <form onSubmit={submitHandler}>
              <span className="infor-car">Modelo del Vehiculo</span>
              <input type="text" className="form-control inputclass" name="model" onChange={hModel}/>
              <span className="infor-car">Marca del Vehiculo</span>
              <input type="text" className="form-control inputclass" name="brand" onChange={hBrand}/>
              <span className="infor-car">Año del Vehiculo</span>
              <input type="text" className="form-control inputclass" name="year" onChange={hYear}/>
              <span className="infor-car">Color del Vehiculo</span>
              <input type="text" className="form-control inputclass" name="color" onChange={hColor}/>
              <span className="infor-car">Tipo de Motor</span>
              <input type="text" className="form-control inputclass" name="engineType" onChange={hEngineType}/>
              <span className="infor-car">Tipo de Combustible</span>
              <input type="text" className="form-control inputclass" name="fuelType" onChange={hFuelType}/>
              <span className="infor-car">Numero de Serie</span>
              <input type="text" className="form-control inputclass" name="serialNumber" onChange={hSerialNumber}/>
              <span className="infor-car">Numero de Placa</span>
              <input type="text" className="form-control inputclass" name="plate" onChange={hPlate}/>
              <span className="infor-car">Numero de indentificacion Vehicular (NVI)</span>
              <input type="text" className="form-control inputclass" name="serialNumber" onChange={hSerialNumber}/>
              <span className="infor-car">Precio del Vehiculo</span>
              <input type="text" className="form-control inputclass" name="price" onChange={hPrice}/>
              <span className="infor-car">Nombre(s) del Dueño</span>
              <input type="text" className="form-control inputclass" name="name" onChange={hName}/>
              <span className="infor-car">Apellido(s) del Dueño</span>
              <input type="text" className="form-control inputclass" name="lastname" onChange={hLastname}/>
              <span className="infor-car">Nombre de la Agencia que Procede</span>
              <select name="agency" onChange={hAgencyName} id="form-select">
                <option value="">seleccionar-agencias</option>
                  {agencys.map((agency) => {
                    return <option  key={agency.id} value={agency.id}>{agency.name}</option>;
                  })}
              </select>
              <span className="infor-car">Foto del Vehiculo</span><br />
              <input type="file" className="form-control inputclass" id="foto-car"/>
              <label htmlFor="foto-car" id="container-upload">
                <img src={upload} alt="" />
              </label>
            </form>
          </div>
          <div className="col-1"></div>
          <div className="col-5">
            <img src={registreV} alt="" id="foto-register"/>
          </div>
        </div>
        <div className="row div-button">
          <div className="col-2"></div>
          <div className="col-3">
            <button className="registrar-car">Registrar</button>
          </div>
          <div className="col-7"></div>
        </div>
      </div>
    </section>
  );
}

export default RegistroCarro;

{/* <div className="contenido">
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
      </div> */}