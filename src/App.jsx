import React, {useContext, useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
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
import RegistryAgency from "./pages/RegistryAgency.jsx";
import AuthContext from "./contexts/AuthContext.js";

function App() {
    const [auth, setAuth]=useState(false);
        return (
        <BrowserRouter>
            <AuthContext.Provider value={{auth, setAuth}}>
                <Routes>
                    <Route index element={<GeneralHome/>}/>
                    <Route path={'/home'} element={<GeneralHome/>}/>
                    <Route path={'/consultaVehicular'} element={<ConsultaVehicular/>}/>
                    <Route path={'vehicle/consult'} element={<GeneralVehicleView/>}/>
                    <Route path={'/signUp'} element={<WorkerRegistrer/>}/>
                    <Route path={'/signIn'} element={<WorkerLogIn/>}/>
                    {/*///*/}
                    <Route element={<PrivateRoute/>}>
                    <Route path={'/gob/home'} element={<WorkerHome/>}/>
                    <Route path={'/gob/registry/vehicle'} element={<RegistryAgency/>}/>
                    <Route path={'/gob/vehicle/consult'} element={<WorkerVehicleView/>}/>
                    <Route path={'/gob/vehicular/catalog'} element={<VehicularList/>}/>
                    <Route path={'/gob/registry/vehicle'} element={<VehicularRegistry/>}/>
                    </Route>
                </Routes>
            </AuthContext.Provider>
        </BrowserRouter>
        );

}
export default App;


// function Private({children}){
//     const {auth} = useContext(AuthContext)
//
//     return (auth ? children : <Navigate to='/home'/>)
//
// }