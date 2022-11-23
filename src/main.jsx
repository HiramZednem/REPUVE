import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from "./components/Footer.jsx";
import './assets/styles/Footer.css'
import Formulario from "./components/Formulario.jsx";
import WorkerRegistrer from "./pages/WorkerRegistrer.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WorkerRegistrer/>
  </React.StrictMode>
)
