import 'bootstrap/dist/css/bootstrap.css'
import '../assets/styles/workerLogIn.css'
import maleUser from '../assets/images/Male User.png'
import {useState} from "react";
import Swal from "sweetalert2";


function WorkerLogInComponent() {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [data, setData]=useState(null);


    const handlerMailInput = (e) => setEmail(e.target.value);
    const handlerPasswordInput = (e) =>setPassword(e.target.value);

    const workerData = (data) => {
        if ( data.data == null ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'User not Found!',
                footer: '<b>error?</b><br/><span>Verifique que la informacion sea correcta e intente de nuevo</span>'
            })
        }else {
            setData(data.data)
            console.log(data)
        }
    }

    const handlerForm = (e) => {
        e.preventDefault();

        const option ={
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                email:email,
                password:password

            })}

        fetch('54.160.253.80:8080/worker/signIn',option)
            .then(response=>response.json())
            .then(data =>workerData(data))
            .catch(err=>console.log("Unexpected error, try again later"));

    }


    return(
        <>

            <div className={"logInComp"}>
            <div className={"container-form"}>
                <h1 className={"h1-content"}>Bienvenido</h1>
                <form className={"logInForm"} onSubmit={handlerForm}>
                    <img className={"userIcon"} src={maleUser}></img>
                    <div className="form-floating mb-3">
                        <input onSubmit={handlerMailInput} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={handlerPasswordInput} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                            <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button type={"button"} className={"bttn-access"}> ENTRAR</button>

                </form>
            </div>

            <div className={"container-img-section"}>
                <img/>
            </div>
            </div>

        </>
    )
}export default WorkerLogInComponent;