import {useContext} from 'react'
import { useNavigate, Navigate, Outlet } from 'react-router-dom';
import AuthContext from "../contexts/AuthContext.js";

function PrivateRoute() {
    const {auth} = useContext(AuthContext)
    const navigate = useNavigate()

    return (auth ? <Outlet /> : <Navigate to='/home'/>)
}

export default PrivateRoute;