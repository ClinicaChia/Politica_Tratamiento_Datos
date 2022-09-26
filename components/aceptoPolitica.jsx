
import React from 'react';
import Image from 'next/image'
import Cabezera from '../components/formato/Cabezera'
import Texto from '../components/formato/Texto'
import styles from '../styles/formato.module.css';


const AceptoPolitica = ({User}) => {
    return (
        <div className={styles.container}>

        <button onClick={()=>print()} className={styles.Impresion} >Imprimir</button>

        <Cabezera codigo={"GC-AR-F-0007-V03"} />

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

export default AceptoPolitica;
