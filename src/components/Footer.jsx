import Facebook from '../assets/images/Facebook.png'
import Twitter from '../assets/images/Twitter.png'
import logoMexico from '../assets/images/GobiernoMexico.png'
function Footer() {
    return (
        <div className="footer">
            <div className="contenido">
                <div className="logotipoMexico">
                    <img src={logoMexico} alt="logotipo" className="logotipo"/>
                </div>
                <div className="enlaces">
                    <span className="titulos">Enlaces</span>
                    <div className="links">
                        <a href="" className="link">Datos</a>
                        <a href="" className="link">Publicaciones</a>
                        <a href="" className="link">Transparencia</a>
                        <a href="" className="link">PNT</a>
                        <a href="" className="link">INAI</a>
                        <a href="" className="link">Alerta</a>
                        <a href="" className="link">Denuncia</a>
                    </div>
                </div>
                <div className="pregunta">
                    <span className="titulos">¿Que es gob.mx?</span>
                    <p className="info">Es el portal único de trámites, información y participación ciudadana.</p>
                    <br />
                    <div className="informacion">
                        <a href="" className="link">Temas</a>
                        <a href="" className="link">Declaracion de Accesibilidad</a>
                        <a href="" className="link">Aviso de Privacidad</a>
                        <a href="" className="link">Aviso de Privacidad Simplificado</a>
                        <a href="" className="link">Terminos y Condiciones</a>
                        <a href="" className="link">Politicas de Seguridad</a>
                        <a href="" className="link">Marco Juridico</a>
                        <a href="" className="link">Mapa de Sitio</a>
                    </div>
                </div>
                <div className="RedesSociales">
                    <span className="siguenos">Siguenos en</span>
                    <div className="iconos">
                        <img src={Facebook} alt="Facebook" className="icons"/>
                        <img src={Twitter} alt="Twitter" className="icons"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer