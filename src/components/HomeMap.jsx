import '../assets/styles/homeMap.css'

function HomeMap() {
    return(
        <>
            <section className={"container-map"}>
                <div className={"container-content"}>
                    <h1 className={"h1-cont-map"}> CONTACTO</h1>
                    <h2 className={"h2-cont-map"}>Av. Insurgentes Sur 263, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX</h2>

                </div>
                <div className={"container-cont-map"}>
                        <iframe className={"map-frame"} src="https://maps.google.com/maps?width=auto;height=auto;hl=es&amp;q=Av.%20Insurgentes%20Sur%20263,%20Roma%20Nte.,%20Cuauht%C3%A9moc,%2006700%20Ciudad%20de%20M%C3%A9xico,%20CDMX+(Control%20Vehicular%20CDMX)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            <a href="https://www.gps.ie/car-satnav-gps/">GPS car tracker</a></iframe>
                </div>
            </section>
        </>
    );
}
export default HomeMap