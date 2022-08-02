import React from 'react';

function  PopUp ({close}) {
    const cerrar = (e) => {
        
        close(false)
    }
    return (
        <div className="popUp">

            <div className="popUpContend">
                    <section className="popHeader">
                        <button onClick={cerrar}>X</button>
                        
                    </section>
                        <section className="popBody">
                        
                        <iframe src="https://docs.google.com/viewerng/viewer?url=https://www.clinicachia.com.co/Tratamiento%20de%20datos%20personales%20de%20pacientes.pdf&embedded=true"  height="100%" width="100%">
</iframe>
                        </section>
            </div>

        </div>
    );
}

export default PopUp;
