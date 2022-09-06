import React, { useState , useRef} from "react";

import Campo from "../components/campo";
import Canvas from "../components/canvas";
import axios from "axios";
import PopUp from "../components/popUp";
import FechaN from "../components/FechaN";

export default function Home() {
  const [Nombre, setNombre] = useState("");
  const [Cedula, setCedula] = useState("");
  const [Celular, setCelular] = useState("");
  const [URI, setURI] = useState("");
  const [Acepto, setAcepto] = useState({
    "0": false,
    "1": false,
  });
  const [open, setOpen] = useState({
    "0": false,
    "1": false,
  });;
  const signatureRef = useRef({});
  const [Existe, setExiste] = useState(false);
  const [FechaE, setFechaE] = useState("");
  const [FechaS, setFechaS] = useState("");
  const [Servicio, setServicio] = useState("");


  const showDoc = (e) => {
    const id = e.target.id;
    setOpen({open, [id]: true});
  }

  const onChange = (e) => {
    const index = e.target.id;
  
    setAcepto({ ...Acepto,[index]: e.target.checked} );
  }

  const Limpiar = () => {
    signatureRef.current.clear();
    setURI("");
  }
    

  const Enviar = () => {
    if(Nombre!="" && Cedula!="" && Celular!="" && URI!=""){
        axios.post("/api/postData",{Nombre,Cedula,Celular,URI,Acepto,["FechaI"]:FechaE,FechaS,Servicio}).then(res => {
        alert(res.data);
      }
      )
    }
    else{
        alert("UPS, se te olvidó llenar algun campo revisa nuevamente 🤓");
    }
    
  }

  const Verificar = () =>{

    const res = axios.get("/api/queryCedula",{params:{Cedula}}).then(res => {
      const data = res.data.hasId
      
      setExiste(data)
      data?alert('😎 Encontramos que aun estas registrado en el sistema,si quieres cambiar algun dato, rellena el formulario y actualizaremos tu informacion '):alert('😢 No encontramos tu registro, debes rellenar el formulario')
    })
  }


  return (
    <>
    <div className="container">
      <h1>Encuesta Tratamiento de datos</h1>
      <section className="encuesta">
        <Campo word={Nombre} setWord={setNombre} Label="Nombre:" />

        <Campo word={Cedula} setWord={setCedula} Label="Cedula:" />

        <button className="Query" onClick={Verificar}>Consultar cedula</button>

        <Campo word={Celular} setWord={setCelular} Label="Celular:" />

        <FechaN label={"Fecha de Ingreso"} word={FechaE} setWord={setFechaE}/>

        <FechaN label={"Fecha de Egreso"} word={FechaS} setWord={setFechaS}/>

        <Campo word={Servicio} setWord={setServicio} Label="Servicio:" />

        <p>Autorizo que la Clínica Chía S.A utilice mis datos personales 
          según la política de tratamientos de datos elaborada por la clinica, ajustada a la norma 1581 del 
          2012 para efectos de calidad, asimismo aclaro el manifiesto de la atención medica</p>

        <div className="acept-form">
          <label>
          <input type="checkbox" id="0" name="acepto" value={Acepto["0"]}  onChange={onChange}/> Acepto el tratamiento de datos 
          </label>
          <span> <a id="0" onClick={showDoc}> (documento)</a> </span>
        </div>

        <div className="acept-form"  >
          <input type="checkbox" id="1" name="acepto" value={Acepto["1"]}  onChange={onChange}/> Acepto la atención medica 
          <span> <a id="1" onClick={showDoc}> (documento)</a> </span>
        </div>

        
         
        
        <Canvas signatureRef={signatureRef} GenLink={setURI}/>

        <div className="botonera">
          <button onClick={Enviar}>Enviar</button>
          <button onClick={Limpiar}>Limpiar</button>
        </div>

      </section>
      
    </div>
    
    {open["0"] && <PopUp close={()=>{setOpen({...open,"0":false})}}/>}
    
    {open["1"] && <PopUp close={()=>{setOpen({...open,"1":false})}}/>}
    
    </>
    
  );
}
