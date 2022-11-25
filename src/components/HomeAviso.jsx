import '../assets/styles/homeAviso.css'
function HomeAviso() {
    return(
        <>
        <section className={"container-aviso"}>
            <div className={"container-img"}>
                <img className={"content-img"}/>
            </div>
            <div className={"container-inf"}>
                <h2 className={"h2-cont-aviso"}>Aviso Importante</h2>
                <p></p>
                <h1 className={"h1-cont-aviso"}>800 REPUVE 1</h1>
                <h3 className={"h3-cont-aviso"}>(800-737-883-1)</h3>
                <p>
                    <b>Horarios de atencion</b><br/>
                        Lunes a Sabado de 09:00 a 19:00.<br/>
                        Domingos de 09:00 a 15:00.
                </p>
            </div>
        </section>
        </>
    );
}
export default HomeAviso;