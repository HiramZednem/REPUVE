// import { useState } from "react";
// import UserContext from "../context/UserContext";


import HeaderWorker from "./components/HeaderWorker";
import { UserContext, UserDataContext } from "./context/UserContext";
//import RegisterAgency from "./pages/RegisterAgency";
import { useContext } from "react";


function App() {
  // const [isLogued, setIsLogued] = useState(false)

   return (  
    <UserDataContext>
            <HeaderWorker/>
    </UserDataContext>

    //<RegisterAgency/>

  //   <UserContext.Provider value={{ isLogued, setIsLogued }}>
  //   </UserContext.Provider>

  );
}

export default App;
