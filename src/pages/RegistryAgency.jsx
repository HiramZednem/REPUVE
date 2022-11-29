import WorkerHome from "./WorkerHome.jsx";
import AgencyRegistry from "./AgencyRegistry.jsx";
import Footer from "../components/Footer.jsx";

function registryAgency() {
    return(
        <>
        <WorkerHome></WorkerHome>
            <AgencyRegistry></AgencyRegistry>
            <Footer></Footer>
        </>
    )
}export default registryAgency();