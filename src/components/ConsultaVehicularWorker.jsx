//CSS
import "../assets/styles/consultaWorker.css";
function ConsultaVehicularWorker() {
    return (  
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="container">
                            <div className="row div-formularioBusqueda">
                                <div className="col-12 ">
                                    <form action="">
                                        <span className="title-busquedaWorker">Ingrese Numero de Indetificacion Vehicular (NVI)</span><br />
                                        <input id="input-busqueda"  type="text" className="form-control" placeholder="xxxx-xxxx-xxxx-xxxx"/>
                                    </form>
                                </div>
                            </div>
                            <div className="row div-botonBusqueda">
                                <div className="col-3"></div>
                                <div className="col-6 button-div">
                                    <button className="buscarVehiculo">Buscar</button>
                                </div>
                                <div className="col-3"></div>
                            </div>
                            <div className="row ley busqueda-ley">
                                <span className="ley-info">Este servicio de consulta es GRATUITO de acuerdo con el Artículo 6 de la Ley del Registro Público Vehicular.</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </section>
    );
}

export default ConsultaVehicularWorker;