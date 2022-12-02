import "../assets/styles/header.css";
//Imagenes Importadas
import gobiernoLogo from "../assets/images/GobiernoMexico.svg";
import userIcon from "../assets/images/MaleUser.svg";

function HeaderWorker() {
    return ( 
        <nav className="header">
            <div className="container">
                <div className="row">
                    <div className="col-2 logo">
                        <img src={gobiernoLogo} alt="" id="LogoMx" />
                    </div>
                    <div className="col-2 opciones">
                        <a href="" className="link"> <p className="enlaces">Registro Vehicular</p></a>
                    </div>
                    <div className="col-2 opciones">
                        <a href="" className="link"> <p className="enlaces">Consulta Vehicular</p></a>  
                    </div>
                    <div className="col-2 opciones">
                        <a href="" className="link"> <p className="enlaces">Lista Vehicular</p></a>
                    </div>
                    <div className="col-3"></div>
                    <div className="col-1 icons-div">
                        <img src={userIcon} alt="" id="icon-perfil"/>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default HeaderWorker;