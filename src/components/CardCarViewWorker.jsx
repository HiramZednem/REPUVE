/*Imagenes Exportadas*/
import carGrey from "../assets/images/carGrey.svg";
import edit from "../assets/images/edit.svg";
/*CSS*/
import '../assets/styles/cardCarViewWorker.css';

function CardCarViewWorker() {
    return (  
        <>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10 card-carW">
                        <div className="container">
                            <div className="row inform-cardW">
                                <div className="col-6 image-cars">
                                    <img src={carGrey} alt="Foto" id="image-carW"/>
                                </div>
                                <div className="col-6">
                                    <div className="container">
                                        <div className="row edit-confi">
                                            <div className="col-6">
                                                <span className="model-carW">MODELO</span><br />
                                                <span className="name-modelW">XXXX</span>
                                            </div>
                                            <div className="col-6 button-edit">
                                                <button className="editar">
                                                    <img src={edit} alt="" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row datos-carW">
                                            <div className="col-6">
                                                <h3 className="info-carW">MARCA</h3>
                                                <span className="infW">XXXX</span>
                                                <h3 className="info-carW">AÑO</h3>
                                                <span className="infW">XXXX</span>
                                                <h3 className="info-carW">COLOR</h3>
                                                <span className="infW">XXXX</span>
                                                <h3 className="info-carW">TIPO DE MOTOR</h3>
                                                <span className="infW">XXXX</span>
                                                <h3 className="info-carW">TIPO DE COMBUSTIBLE</h3>
                                                <span className="infW">XXXX</span>
                                                <h3 className="info-carW">NUMERO DE SERIE</h3>
                                                <span className="infW">XXXX</span>
                                                <h3 className="info-carW">NUMERO DE PLACA</h3>
                                                <span className="infW">XXXX</span>
                                            </div>
                                            <div className="col-6">
                                                <h3 className="info-carW">NVI</h3>
                                                <span className="infW">XXXX</span>
                                                <h3 className="info-carW">AGENCIA</h3>
                                                <span className="infW">XXXX</span>
                                                <h3 className="info-carW">PRECIO</h3>
                                                <span className="infW">XXXX</span>
                                                <h3 className="info-carW">ID VEHICULO</h3>
                                                <span className="infW">XXXX</span>
                                                <h3 className="info-titleownerW">DATOS DEL DUEÑO</h3>
                                                <h4 className="info-ownerW">NUMERO DE SERIE</h4>
                                                <p className="infOW">XXXX</p>
                                                <h4 className="info-ownerW">NUMERO DE PLACA</h4>
                                                <p className="infOW">XXXX</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </section>
        </>
    );
}

export default CardCarViewWorker;