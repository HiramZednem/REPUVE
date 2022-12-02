import ConsultaVehiculo from "../components/ConsultaVehicular";
import HomeAviso from "../components/HomeAviso.jsx";
import HomeAvisoWorker from "../components/HomeAvisoWorker";
import QAConsulta from "../components/QAConsulta.jsx";
import Footer from "../components/Footer.jsx";
import {Header} from "../components/Header";

function ConsultaVehicular() {
    return(
        <>
            <Header></Header>
            <ConsultaVehiculo></ConsultaVehiculo>
            <br/><QAConsulta></QAConsulta><br/>
            <HomeAvisoWorker></HomeAvisoWorker>
            <Footer></Footer>
        </>
    );
}
export default ConsultaVehicular;