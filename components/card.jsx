import React from 'react';

const Card = ({nombre,cedula,celular,uri,acepto}) => {
    return (
        <div className='card'>
            <h4>{nombre}</h4>
            <img src={uri} alt="Card" />
            
            <article className='part'>
                <h5>Cedula: </h5>
                <h6>{cedula}</h6>
            </article>

            <article className='part'>
                <h5>Celular: </h5>
                <h6>{celular}</h6>
            </article>

            <article className='part'>
                <h5>¿Aceptó?: </h5>
                <h6>{`${acepto?"Si":"No"}`}</h6>
            </article>
            

        </div>
    );
}

export default Card;