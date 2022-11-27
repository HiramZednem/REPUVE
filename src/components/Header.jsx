import userIcon from "../assets/images/user-icon.png"
import gobiernoLogo from "../assets/images/gobierno-logo.png"

import "../assets/styles/normalize.css" //Quita estilos por defecto del navegador.
import "../assets/styles/Header.css"

export const Header = () => {
    return (
        <header className="header-principal">
            <div className="logo">
                <img src={gobiernoLogo} alt="Logo Gobierno de México" />
            </div>
            <div className="opciones">
                <a href="/consultaVehicular">Consulta Vehicular</a>
                <a href="/signIn"> <img src={userIcon} alt="User icon" /> </a>
            </div>
        </header>
    )
}