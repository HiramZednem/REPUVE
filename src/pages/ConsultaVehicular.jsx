//Paginas Importadas
import Header from "../components/Header";
import ConsultaVehiculo from "../components/ConsultaVehicular";
import HomeAviso from "../components/HomeAviso.jsx";
import ConsultaAviso from "../components/ConsultaAviso";
import QAConsulta from "../components/QAConsulta.jsx";
import Footer from "../components/Footer";

function ConsultaVehicular() {
    return(
        <>
            <Header/>
            <ConsultaVehiculo/>
            <QAConsulta/>
            <ConsultaAviso />
            <Footer />
        </>
    );
}
export default ConsultaVehicular;