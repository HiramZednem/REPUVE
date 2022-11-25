import '../assets/styles/QAConsulta.css'
import QA from '../assets/images/qaPic.png'
function QAConsulta() {
    return(
        <>
            <section className={"container-QA"}>
                <div className={"container-QA-title"}>
                    <h1 className={"h1-cont-QA"}>¿Donde puedo encontrar mi <b>numero de Identificacion Vehicular?</b></h1>
                </div>
                <div className={"container-QA-images"}>
                    <img className={"QA-img1"}/>
                    <img className={"QA-img2"} src={QA}/>
                </div>
            </section>
        </>
    );
}
export default QAConsulta;