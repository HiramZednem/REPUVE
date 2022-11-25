import HomeWhatsRepuve from "../components/HomeWhatsRepuve.jsx";
import HomeConsultaVehicular from "../components/HomeConsultaVehicular.jsx";
import HomeAviso from "../components/HomeAviso.jsx";
import HomeMap from "../components/HomeMap.jsx";

function GeneralHome() {
    return(
        <>
        <HomeWhatsRepuve></HomeWhatsRepuve>
        <HomeConsultaVehicular></HomeConsultaVehicular>
        <HomeAviso></HomeAviso><br/>
        <HomeMap></HomeMap>
        </>


    );
}
export default GeneralHome;