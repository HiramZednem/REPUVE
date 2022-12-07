//Imagenes Importadas
import icon from "../assets/images/foto-login.svg";
import iconU from "../assets/images/user.svg";
import lock from "../assets/images/Lock.svg";

function RegistrerWorker() {
    return (  
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5 div-formSing">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 div-item">
                                    <img src={icon} alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8">
                                    <form >
                                        <p className="txt-form">Nombre</p>
                                        <input  type="text"  placeholder="" className="input-form" />
                                        <p className="txt-form">Apellido</p>
                                        <input  type="text" placeholder="" className="input-form" />
                                        <p className="txt-form">Correo</p>
                                        <input  type="email"  placeholder="name@example.com" className="input-form" />
                                        <p className="txt-form">Contraseña</p>
                                        <input  type="password"  placeholder="Password" className="input-form" />
                                    </form>
                                </div>
                                <div className="col-2"></div>
                            </div>
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8">
                                    <form>
                                        <button className="button-entrarWorker">Entrar</button>
                                    </form>
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

export default RegistrerWorker;