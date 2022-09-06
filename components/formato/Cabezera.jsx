import React from 'react'
import styles from '../../styles/formato.module.css';
import Image from 'next/image'
export default function Cabezera() {
  return (
    <div className={styles.Cabezera_Container}>

        <section className={styles.Cabezera_Titulo}>
            <h1>DOCUMENTO NORMALIZADO CLÍNICA CHIA S.A.S.</h1>
        </section>
        
        <div className={styles.Row}>
            
 
            <section className={styles.Cabezera_Side} >

                <article className={styles.Image_Container}>
                    <Image 
                    src="/logo.png"
                    width="250"
                    height="90"
                    />
                </article>


                <article className={styles.Cabezera_texto}>
                        <span className={styles.bold}>Revisión: Cada cuatro años</span>
                </article>
            </section>

            <section className={styles.Cabezera_codigo}>
                    
                    <h4 className={styles.bold}>Autorización para la recolección de datos personales y Manifiesto de atención médica</h4>
                    <h3 className={styles.bold} >CÓDIGO:</h3>
                    <h4 >GC-AR-F-0007-V03</h4>
            </section>


            <section className={styles.Cabezera_Side} >

                <article className={styles.Image_Container}>
                    <Image 
                    src="/clinica.jpg"
                    width="150"
                    height="90"
                    />
                </article>


                <article className={styles.Cabezera_texto}>
                        <span className={styles.bold}>Revisión: Cada cuatro años</span>
                </article>
            </section>


        </div>

        
    </div>
  )
}
