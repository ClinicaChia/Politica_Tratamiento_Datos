import axios from 'axios';
import React from 'react';
import Image from 'next/image'
import Cabezera from '../../components/formato/Cabezera'
import Texto from '../../components/formato/Texto'
import styles from '../../styles/formato.module.css';
const Impresion = ({user}) => {

    const User = user.user;
  
    return (
        <div className={styles.container}>

            <button onClick={()=>print()} className={styles.Impresion} >Imprimir</button>

            <Cabezera />

            <Texto />
            
            <p> Yo <span className={styles.bold}>{User.Nombre}</span>  identificado con la 
            C.C <span className={styles.bold}>{ User.Cedula }</span>  la politica de tramiento de Datos
             <span className={styles.bold}>{User.AceptoPolitica?" Acepto ":" No acepto "}</span>
            expuesta por parte de la clinica chia en el presente documento
             </p>

            <div className={styles.Image_Container2}>

              <Image 

              src={User.URI}
              width={400}

              height={200}

             
              
              />

            </div>
            




            
        </div>
    );
}

export async function getServerSideProps(context) {

  const cedula = context.query.uid;
  console.log("http//:" + process.env.BASE_PATH + "api/getOne")
  const user = await (await fetch("http://" + process.env.BASE_PATH + "api/getOne?cedula="+cedula)).json();

  console.log(user)
    
    return {
      props: {user}, // will be passed to the page component as props
    }
  }

export default Impresion;
