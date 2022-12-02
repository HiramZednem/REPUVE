import '../assets/styles/homeWhatsRepuve.css'
import react from '../assets/react.svg'

function HomeWhatsRepuve() {
return(
    <>
    <section className={"container-general"}>
        <div className={"container-image"}>
            <img className={"whats-repuve-img"} src={react}/>
        </div>
        <div className={"container-information"}>
            <h2 className={"title-info"}>¿Qué es REPUVE?</h2>
            <p className={"content-info"}> El Registro Público Vehicular (REPUVE) es una Dirección General que depende del
                Secretariado Ejecutivo del Sistema Nacional de Seguridad Pública. Su objetivo,
                es otorgar seguridad jurídica a los actos que se realicen con vehículos que circulan
                en el territorio nacional,
                mediante la identificación vehicular.</p>
        </div>
    </section>
    </>
);
}
export default HomeWhatsRepuve;
