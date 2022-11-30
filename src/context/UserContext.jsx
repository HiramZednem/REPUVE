import { createContext, useState } from "react";

export const UserContext = createContext();


export const UserDataContext = ({children}) =>{
    
    //Mi fetch aqui
const [user,setUser] = useState({
    name: "Axel",
    lastname: "",
    phone: "",
})

return(
    <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
);
}
