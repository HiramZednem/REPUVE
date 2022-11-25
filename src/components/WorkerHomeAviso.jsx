import '../assets/styles/workerHomeAviso.css'
import worker from '../assets/images/workerHome.png'

function WorkerHomeAviso() {
    return(
        <>
            <section className={"container-worker-home"}>
                <div className={"container-content"}>
                    <h1 className={"h1-cont-work"}> AVISO IMPORTANTE</h1>
                    <h2 className={"h2-cont-work"}>Para el programa de regularización de vehí culos usados de procedencia extranjera,
                        se implementarán módulos de inscripción vehicular en las entidades referidad en el Decreto:
                        Para solicitar este trámite deberá realizar una cita mediante un sistema de citas electrónicas</h2>
                    <h3 className={"h3-cont-work"}>Consulta esta información en: www.gob.mx/sesnsp</h3>
                </div>
                <div className={"container-image"}>
                    <img className={"home-worker"} src={worker}/>
                </div>
            </section>
        </>
    );
}
export default WorkerHomeAviso;
