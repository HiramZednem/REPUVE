import vehicle from '../assets/images/vehiclePic.png'
import '../assets/styles/homeConsultaVehicular.css'

function HomeConsultaVehicular() {
    return(
        <>
            <section className="container-consultaVehicular">
                <div className="container consulta-vehicular">
                    <div className="row">
                        <div className="col-5 information">
                            <p className="h2 consulta">CONSULTA</p>
                            <p className="h1 vehicular">VEHICULAR</p>
                            <button className="button-consultar">Consultar</button>
                        </div>
                        <div className="col-7">
                            <div>
                                <img src={vehicle} alt="" id="imagencoche"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default HomeConsultaVehicular;