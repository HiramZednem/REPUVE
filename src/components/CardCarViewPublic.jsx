/*Hooks*/
/*Paginas Exportadas*/
/*Imagenes Exportadas*/
import carGrey from "../assets/images/carGrey.svg";

/*CSS*/
import '../assets/styles/cardCarViewPublic.css';

function CardCarViewPublic() {

    return (  
        <>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10 card-car">
                        <div className="container ">
                            <div className="row inform-card">
                                <div className="col-6 image-cars">
                                    <img src={carGrey} alt="Foto" id="image-car"/>
                                </div>
                                <div className="col-6 ">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="model-car">MODELO</span><br />
                                                <span className="name-model">XXXX</span>
                                            </div>
                                        </div>
                                        <div className="row datos-car">
                                            <div className="col-6">
                                                <h3 className="info-car">MARCA</h3>
                                                <span className="inf">XXXXX</span>
                                                <h3 className="info-car">AÑO</h3>
                                                <span className="inf">XXXXX</span>
                                                <h3 className="info-car">COLOR</h3>
                                                <span className="inf">XXXXX</span>
                                                <h3 className="info-car">TIPO DE MOTOR</h3>
                                                <span className="inf">XXXXX</span>
                                                <h3 className="info-car">TIPO DE COMBUSTIBLE</h3>
                                                <span className="inf">XXXXX</span>
                                                <h3 className="info-car">NUMERO DE SERIE</h3>
                                                <span className="inf">XXXXX</span>
                                            </div>
                                            <div className="col-6">
                                                <h3 className="info-car">NUMERO DE PLACAS</h3>
                                                <span className="inf">XXXXX</span>
                                                <h3 className="info-car">NVI</h3>
                                                <span className="inf">XXXXX</span>
                                                <h3 className="info-car">AGENCIA PROCEDENCIA</h3>
                                                <span className="inf">XXXXX</span>
                                                <h3 className="info-car">PRECIO</h3>
                                                <span className="inf">XXXXX</span>
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

export default CardCarViewPublic;