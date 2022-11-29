import "../assets/styles/formularioLogin.css";
//Imagenes Importadas
import icon from "../assets/images/foto-login.svg";
import user from "../assets/images/user.svg";
import lock from "../assets/images/Lock.svg";
function FormularioLogin() {
    return (  
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5 div-form">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 div-item">
                                    <img src={icon} alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8">
                                    <form action="">
                                        <p className="txt-form"><img src={user} className="icons-form"/>Usuario</p>
                                        <input type="text" className="input-form" />
                                        <p className="txt-form"><img src={lock} className="icons-form"/>Contraseña</p>
                                        <input type="text" className="input-form" />
                                    </form>
                                </div>
                                <div className="col-2"></div>
                            </div>
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8">
                                    <button className="button-entrar">Entrar</button>
                                </div>
                                <div className="col-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FormularioLogin;