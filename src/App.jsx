//HOOKS
// import { useState } from "react";
// import UserContext from "../context/UserContext";
// import HeaderWorker from "./components/HeaderWorker";
//Pruebas de componentes de los Pelones
import Header from "./components/Header";
import HeaderWorker from "./components/HeaderWorker";
//PAGINAS IMPORTADAS
import RegisterAgency from "./pages/RegisterAgency";
import GeneralHome from "./pages/GeneralHome";
import ConsultaVehicular from "./pages/ConsultaVehicular";
import CarView from "./pages/CarView";
import Login from "./pages/Login";
import HomeWorker from "./pages/HomeWorker";
import ConsultaWorker from "./pages/ConsultaWorker";


function App() {
  // const [isLogued, setIsLogued] = useState(false)

  return (  
        // <HeaderWorker/>
      <ConsultaWorker/>

  //   <UserContext.Provider value={{ isLogued, setIsLogued }}>
  //   </UserContext.Provider>

  );
}

export default App;
