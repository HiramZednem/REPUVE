import 'bootstrap/dist/css/bootstrap.css'
import '../assets/styles/workerLogIn.css'
import maleUser from '../assets/images/Male User.png'
import {useState} from "react";

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
            alert('eui')
        }
    }

    const handlerForm = (e) => {
        e.preventDefault();

        const dataJSON =  JSON.stringify({
            email:email,
            password:password
        })

        console.log(dataJSON)


        const option = {
            method: "POST",
            headers: {
                Accept: "*/*",
                "Content-Type": "application/json",
                Connection: "keep-alive",
            },
            body: dataJSON,
        };

        fetch(`http://localhost:8080/worker/signIn`, option)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    };



    return(
        <>

            <div className={"logInComp"}>
                <div className={"container-form"}>
                    <h1 className={"h1-content"}>Bienvenido</h1>
                    <form className={"logInForm"} onSubmit={handlerForm}>
                        <img className={"userIcon"} src={maleUser}></img>
                        <div className="form-floating mb-3">
                            <input onChange={handlerMailInput} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input onChange={handlerPasswordInput} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button  className={"bttn-access"} > ENTRAR</button>

                    </form>
                </div>

                <div className={"container-img-section"}>
                    <img/>
                </div>
            </div>

        </>
    )
}export default WorkerLogInComponent;