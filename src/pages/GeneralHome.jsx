import HomeWhatsRepuve from "../components/HomeWhatsRepuve.jsx";
import HomeConsultaVehicular from "../components/HomeConsultaVehicular.jsx";
import HomeAviso from "../components/HomeAviso.jsx";
import HomeMap from "../components/HomeMap.jsx";
import {Header} from "../components/Header";
import Footer from "../components/Footer.jsx";
import WorkerHomeAviso from "../components/WorkerHomeAviso.jsx";

function GeneralHome() {
    return(
        <>
        <Header></Header>
        <WorkerHomeAviso></WorkerHomeAviso>
        <HomeWhatsRepuve></HomeWhatsRepuve>
        <HomeConsultaVehicular></HomeConsultaVehicular>
        <HomeAviso></HomeAviso><br/>
        <HomeMap></HomeMap>
        <Footer></Footer>
        </>


    );
}
export default GeneralHome;