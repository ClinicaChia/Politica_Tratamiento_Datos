
import React from 'react';
import Image from 'next/image'
import Cabezera from './formato/Cabezera'
import styles from '../styles/formato.module.css';


const AceptoPolitica = ({User}) => {
    return (
        <div className={styles.container}>

        <button onClick={()=>print()} className={styles.Impresion} >Imprimir</button>

        <Cabezera />

        <p>YO: <span className={styles.bold}>{User.Nombre}</span>  identificado con la cedula <span className={styles.bold} >{User.Cedula}</span>, por medio del presente documento, obrando en calidad de
        paciente en pleno uso de mis facultades mentales manifiesto que {User.AceptoMedico? "he" : "no he"} recibido atención médica y/o hospitalaria en la Clínica Chía S.A.
        </p>

        <span className={styles.bold}>Fecha de ingreso: { (new Date( User.FechaI)).toLocaleDateString()} - Fecha de egreso: { (new Date( User.FechaF)).toLocaleDateString()}</span>
        
        <span className={styles.bold}>Servicio: {User.Servicio}</span>

        <div className={styles.Image_Container2}>

          <Image 

          src={User.URI}
          width={400}

          height={200}

         
          />

        </div>

        <span className={styles.bold} style={{textAlign:'center'}} >FIRMA DEL PACIENTE/PERSONA RESPONSABLE</span>


        
    </div>
    );
}

export default AceptoPolitica;
