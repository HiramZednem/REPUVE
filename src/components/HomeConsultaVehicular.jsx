import vehicle from '../assets/images/vehiclePic.png'
import '../assets/styles/homeConsultaVehicular.css'

function HomeConsultaVehicular() {
    return(
        <>
            <section className={"container-consultaVehicular"}>
                <div className={"container-info"}>
                    <h2 className={"h2-cont"}>CONSULTA</h2>
                    <h1 className={"h1-cont"}>VEHICULAR</h1>
                    <button className={"bttn-consult"}>consultar</button>
                </div>
                <div className={"container-image"}>
                    <img className={"content-image"} src={vehicle}/>
                </div>
            </section>
        </>
    );
}
export default HomeConsultaVehicular;