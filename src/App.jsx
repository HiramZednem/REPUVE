//HOOKS
// import { useState } from "react";
// import UserContext from "../context/UserContext";
// import HeaderWorker from "./components/HeaderWorker";
//Pruebas de componentes de los Pelones
import Header from "./components/Header";
import HeaderWorker from "./components/HeaderWorker";
//PAGINAS IMPORTADAS
import GeneralHome from "./pages/GeneralHome";
import ConsultaVehicular from "./pages/ConsultaVehicular";
import CarView from "./pages/CarView";
import Login from "./pages/Login";
import HomeWorker from "./pages/HomeWorker";
import ConsultaWorker from "./pages/ConsultaWorker";
import AgencyWorker from "./pages/AgencyWorker";
import WorkerRegistrer from "./pages/WorkerRegistrer";
import WorkerRegistrerVehicle from "./pages/WorkerRegistrerVehicle";
import WorkerCarView from "./pages/WorkerCarView";
import WorkerCarEdit from "./pages/WorkerCarEdit";
import WorkerListCars from "./pages/WorkerListCars";


function App() {
  // const [isLogued, setIsLogued] = useState(false)

  return (  
        // <HeaderWorker/>
      <WorkerListCars/>

  //   <UserContext.Provider value={{ isLogued, setIsLogued }}>
  //   </UserContext.Provider>

  );
}

export default App;
