import React, { useState , useRef} from "react";

import Campo from "../components/campo";
import Canvas from "../components/canvas";
import axios from "axios";

export default function Home() {
  const [Nombre, setNombre] = useState("");
  const [Cedula, setCedula] = useState("");
  const [Celular, setCelular] = useState("");
  const [URI, setURI] = useState("");
  const [Acepto, setAcepto] = useState(false);
  const signatureRef = useRef({});
  const onChange = (e) => {

    setAcepto(e.target.checked);
  }

  const Limpiar = () => {
    signatureRef.current.clear();
    setURI("");
  }
    

  const Enviar = () => {
    if(Nombre!="" && Cedula!="" && Celular!="" && URI!=""){
        axios.post("/api/postData",{Nombre,Cedula,Celular,URI,Acepto}).then(res => {
        alert(res.data);
      }
      )
    }
    else{
        alert("UPS, se te olvidó llenar algun campo revisa nuevamente 🤓");
    }
    
  }


  return (
    <div className="container">
      <h1>Encuesta Tratamiento de datos</h1>
      <section className="encuesta">
        <Campo word={Nombre} setWord={setNombre} Label="Nombre:" />

        <Campo word={Cedula} setWord={setCedula} Label="Cedula:" />

        <Campo word={Celular} setWord={setCelular} Label="Celular:" />

        <p>Autorizo que la Clínica Chía S.A utilice mis datos personales según la política de tratamientos de datos según lo dicta la norma 1581 de 2012 para efectos de calidad.</p>

        <label>
          <input type="checkbox" name="acepto" value={Acepto}  onChange={onChange}/> Acepto
        </label>

        <Canvas signatureRef={signatureRef} GenLink={setURI}/>

        <div className="botonera">
          <button onClick={Enviar}>Enviar</button>
          <button onClick={Limpiar}>Limpiar</button>
        </div>

      </section>
    </div>
  );
}