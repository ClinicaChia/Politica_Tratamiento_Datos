import React from 'react';
import styles from '../../styles/formato.module.css';
const Texto = () => {
    return (
        <>
        
        <p>Clínica Chía S.A., con NIT 800200789 le 
                informa que será el responsable del 
                <span className={styles.bold}> tratamiento de sus datos 
                personales </span> 
                 y, en tal virtud, podrá <span className={styles.bold}>recolectar, almacenar, 
                conservar, modificar, actualizar y suprimir</span> sus datos para las 
                siguientes finalidades: 
            </p>

            <table className={styles.Tabla}>
                <thead>
                    <tr>
                        <th>Finalidad del tratamiento de datos personales</th>
                    </tr>
                </thead>

                <tbody>
                    <tr><td>Prestar los servicios de salud solicitados.</td></tr>
                    <tr><td>Solicitar autorización a quien corresponda, para la prestación de los servicios de salud requeridos.</td></tr>
                    <tr><td>Solicitar a terceros los insumos, productos o servicios requeridos para la prestación de los servicios de salud.</td></tr>
                    
                    <tr>
                    <td>Realizar y presentar informes estadísticos, analíticos, epidemiológicos, de riesgo, entre otros, que permitan la optimización de los servicios brindados en la Clínica.</td>
                    </tr>
                    <tr><td>Contactar al Titular con el fin de evaluar la calidad y/o satisfacción de los servicios de salud recibidos.</td></tr>
                    
                    
                    
                </tbody>
            </table>

            <p>
                Nota: Según la Ley 1581 del 2012 sobre protección de datos 
                personales en su artículo 10. 
                <span className={styles.bold}> Casos en que no es necesaria la 
                autorización. La autorización del Titular no será necesaria </span> 
                cuando se trate de: <span className={styles.bold}> Casos de urgencia médica o sanitaria.</span>
                <span className={styles.bold}></span>
            </p>

            <p>
            Manifiesto que me informaron que en caso de recolección de mi información sensible; tengo derecho a contestar o no las preguntas que me formulen y a entregar o no los datos solicitados. 
            Entiendo que son datos sensibles aquellos que afectan mi intimidad o cuyo uso indebido puede generar discriminación (ejemplo: orientación política, convicciones religiosas, datos relativos a la salud, a la vida sexual y los datos biométricos). Manifiesto que me informaron que los datos sensibles que se recolectarán serán utilizados para las finalidades listadas anteriormente.
            </p>

            <p>
            <br /><br /><br />
            <span className={styles.bold}>DERECHOS DEL TITULAR: </span>La Clínica Chía, me informa que como
            titular de datos personales tengo derecho a conocer, actualizar y rectificar mis datos personales, solicitar prueba de la autorización otorgada para su tratamiento, ser informado sobre el uso que se ha dado a los mismos, presentar quejas ante la SIC por infracción a la ley, revocar la autorización y/o solicitar la supresión de mis datos en los casos en que sea procedente y acceder en forma gratuita a los mismos mediante solicitud. 

            </p>

            <p>
            La Clínica Chía cuenta con un oficial de protección de datos personales; quien tiene la función de proteger los datos personales de los titulares y dar trámite a sus solicitudes; estos derechos los podré ejercer a través de los canales dispuestos por la Clínica Chía para la atención al público, ubicada en la calle 6  número 10-125; Teléfono: 601 8629190 al correo electrónico protecciondedatos@clinicachia.com y la oficina de servicio al paciente de clínica Chía, con horario de lunes a viernes de 8:00 a.m. a 6:00 p.m. en donde se atenderán los requerimientos relacionados con el tratamiento de mis datos personales y el ejercicio de los derechos mencionados en esta autorización.
            </p>

            <p>
            Por todo lo anterior, he otorgado mi consentimiento a Clínica Chía S.A. para que trate mi información personal de acuerdo con la Política de Tratamiento de Datos Personales y que me dio a conocer antes de recolectar mis datos personales. Manifiesto que la presente autorización me fue solicitada antes de entregar mis datos y que la suscribo de forma libre y voluntaria una vez leída en su totalidad.
            </p>
        
        
        </>
    );
}

export default Texto;
