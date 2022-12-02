/*Imagenes Exportadas*/
import carGrey from "../assets/images/carGrey.svg";
import edit from "../assets/images/edit.svg";
import upload from "../assets/images/upload.svg";
/*CSS*/
import "../assets/styles/cardCarViewWorker.css";

function CardCarEditWorker() {
    return (  
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10 card-carW">
                        <div className="container">
                            <div className="row inform-cardW">
                                <div className="col-6 image-cars">
                                    <input type="file" id="foto-car-upload" className="form-control inputclass"/>
                                    <label htmlFor="foto-car-upload" id="image-car-upload">
                                        <img src={upload} alt="" />
                                    </label>
                                </div>
                                <div className="col-6">
                                    <div className="container">
                                        <div className="row edit-confi">
                                            <div className="col-6">
                                                <form action="">
                                                    <span className="model-carW">MODELO</span><br />
                                                    <input type="text" className="form-control EWC"/>
                                                </form>
                                            </div>
                                            <div className="col-6 button-edit">
                                                <button className="editar">
                                                    <img src={edit} alt="" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row datos-carW">
                                            <div className="col-6">
                                                <form action="">
                                                    <h3 className="info-carW">MARCA</h3>
                                                    <input type="text" className="form-control EWC"/>
                                                    <h3 className="info-carW">AÑO</h3>
                                                    <input type="text" className="form-control EWC" />
                                                    <h3 className="info-carW">COLOR</h3>
                                                    <input type="text" className="form-control EWC" />
                                                    <h3 className="info-carW">TIPO DE MOTOR</h3>
                                                    <input type="text" className="form-control EWC" />
                                                    <h3 className="info-carW">TIPO DE COMBUSTIBLE</h3>
                                                    <input type="text" className="form-control EWC" />
                                                    <h3 className="info-carW">NUMERO DE SERIE</h3>
                                                    <input type="text" className="form-control EWC" />
                                                    <h3 className="info-carW">NUMERO DE PLACA</h3>
                                                    <input type="text" className="form-control EWC" />
                                                </form>
                                            </div>
                                            <div className="col-6">
                                                <form action="">
                                                    <h3 className="info-carW">NVI</h3>
                                                    <input type="text" className="form-control EWC" />
                                                    <h3 className="info-carW">AGENCIA</h3>
                                                    <input type="text" className="form-control EWC" />
                                                    <h3 className="info-carW">PRECIO</h3>
                                                    <input type="text" className="form-control EWC" />
                                                    <h3 className="info-carW">ID VEHICULO</h3>
                                                    <input type="text" className="form-control EWC" />
                                                    <h3 className="info-titleownerW">DATOS DEL DUEÑO</h3>
                                                    <h4 className="info-ownerW">NOMBRE DEL DUEÑO</h4>
                                                    <input type="text" className="form-control EWC" />
                                                    <h4 className="info-ownerW">APELLIDO(s) DEL DUEÑO</h4>
                                                    <input type="text" className="form-control EWC" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row div-button">
                    <div className="col-5"></div>
                    <div className="col-2">
                        <button id="button-actualizar">Actualizar</button>
                    </div>
                    <div className="col-5"></div>
                </div>
            </div>
        </section>
    );
}

export default CardCarEditWorker;