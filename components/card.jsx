import React from 'react';
import styles from '../styles/formato.module.css';
import { useRouter } from 'next/router'

const Card = ({nombre,cedula,celular,uri,AceptoPolitica,AceptoMedico,FechaI,FechaS,servicio}) => {
    const router = useRouter();
    return (
        <div className='card'>
            <h4>{nombre}</h4>
            <img src={uri} alt="Card" />
            
            <article className='part'>
                <h5>Cedula: </h5>
                <h6>{cedula}</h6>
            </article>

            <article className='part'>
                <h5>Fecha Ingreso: </h5>
                <h6>{(new Date(FechaI)).toLocaleDateString()}</h6>
            </article>

            <article className='part'>
                <h5>Fecha Egreso: </h5>
                <h6>{(new Date(FechaS)).toLocaleDateString()}</h6>
            </article>

            <article className='part'>
                <h5>Servicio: </h5>
                <h6>{servicio}</h6>
            </article>

            <article className='part'>
                <h5>Celular: </h5>
                <h6>{celular}</h6>
            </article>

            <article className='part'>
                <h5 className={styles.docN} 
                onClick={()=>{
                    router.push(`/impresion/${cedula}/aceptoPolitica`)
                }} 
                
                >¿Aceptó la politica?: </h5>
                <h6>{`${AceptoPolitica?"Si":"No"}`}</h6>
            </article>

            <article className='part'>
                <h5 className={styles.docN} 
                
                onClick={()=>{
                    router.push(`/impresion/${cedula}/aceptoTratamiento`)
                }}
                
                >¿Aceptó tratamiento?: </h5>
                <h6>{`${AceptoMedico?"Si":"No"}`}</h6>
            </article>
            

        </div>
    );
}

export default Card;
