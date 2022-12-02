import ConsultaVehiculo from "../components/ConsultaVehicular";
import HomeAviso from "../components/HomeAviso.jsx";
import HomeAvisoWorker from "../components/HomeAvisoWorker";
import QAConsulta from "../components/QAConsulta.jsx";
import Footer from "../components/Footer.jsx";

function ConsultaVehicular() {
    return(
        <>
            <ConsultaVehiculo></ConsultaVehiculo>
            <br/><QAConsulta></QAConsulta><br/>
            <HomeAvisoWorker></HomeAvisoWorker>
            <Footer></Footer>
        </>
    );
}
export default ConsultaVehicular;