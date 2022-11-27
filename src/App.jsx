import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AuthContext from "./contexts/AuthContext.jsx";
import AgencyRegistry from "./pages/AgencyRegistry.jsx";
import ConsultaVehicular from "./pages/ConsultaVehicular.jsx";
import GeneralHome from "./pages/GeneralHome.jsx";
import GeneralVehicleView from "./pages/GeneralVehicleView.jsx";
import VehicularList from "./pages/VehicularList.jsx";
import VehicularRegistry from "./pages/VehicularRegistry.jsx";
import WorkerHome from "./pages/WorkerHome.jsx";
import WorkerLogIn from "./pages/WorkerLogIn.jsx";
import WorkerRegistrer from "./pages/WorkerRegistrer.jsx";
import WorkerVehicleView from "./pages/WorkerVehicleView.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";


function App() {
    const [auth, setAuth]=useState(null);
        return (
        <BrowserRouter>
            {/*<AuthContext.provider value={{auth,setAuth}}>*/}
                <Routes>
                    <Route index element={<GeneralHome/>}/>
                    <Route path={'/home'} element={<GeneralHome/>}/>
                    <Route path={'/consultaVehicular'} element={<ConsultaVehicular/>}/>
                    <Route path={'vehicle/consult'} element={<GeneralVehicleView/>}/>
                    <Route path={'/signUp'} element={<WorkerRegistrer/>}/>
                    <Route path={'/signIn'} element={<WorkerLogIn/>}/>
                    <Route element={<PrivateRoute/>}>
                        <Route path={'/gob/home'} element={<WorkerHome/>}/>
                        <Route path={'/registry/agency'} element={<AgencyRegistry/>}/>
                        <Route path={'/gob/vehicle/consult'} element={<WorkerVehicleView/>}/>
                        <Route path={'/gob/vehicular/catalog'} element={<VehicularList/>}/>
                        <Route path={'/gob/registry/vehicle'} element={<VehicularRegistry/>}/>
                    </Route>

                </Routes>
            {/*</AuthContext.provider>*/}
        </BrowserRouter>
        );

}
export default App;
