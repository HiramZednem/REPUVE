import ConsultaVehiculo from "../components/ConsultaVehicular";
import HomeAviso from "../components/HomeAviso.jsx";
import HomeAvisoWorker from "../components/HomeAvisoWorker";
import QAConsulta from "../components/QAConsulta.jsx";

function ConsultaVehicular() {
    return(
        <>
            <ConsultaVehiculo></ConsultaVehiculo>
            <br/><QAConsulta></QAConsulta><br/>
            <HomeAvisoWorker></HomeAvisoWorker>
        </>
    );
}
export default ConsultaVehicular;