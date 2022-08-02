import React from 'react';

const PopUp = ({close,open}) => {
    const cerrar = (e) => {
        console.log("cerrando")
        close(false)
    }
    return (
        <div className="popUp">

            <div className="popUpContend">
                    <section className="popHeader">
                        <button onClick={cerrar()}>X</button>
                        
                    </section>
                        <section className="popBody">
                        <iframe src="/Tratamiento de datos personales de pacientes.pdf" width="100%" height="100%"></iframe>
                        </section>
            </div>

        </div>
    );
}

export default PopUp;
