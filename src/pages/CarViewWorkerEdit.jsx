import CardCarViewWorkerEdit from "../components/CardCarViewWorkerEdit";
import "../assets/styles/carViewWorkerEdit.css";
/*AQUI FALTA HEADER, HEADERWORKER, FOOTER Y QUE JALEN LAS RUTAS Y LA DE REGRESO*/ 
/*REALIZAR UN HANDLE SUBMIT ym meter todos los datos dentro de un form y en el fomr meter en handler */
function CarViewWorkerEdit() {
    
    return (  
        <>
        <div className="body-container-edit">
            <form action="">
                <CardCarViewWorkerEdit />
                <br /><br /><br />
                <button className="update">Actualizar</button>
            </form>
        </div>
        </>
    );
}

export default CarViewWorkerEdit;




