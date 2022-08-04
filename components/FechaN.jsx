import React from 'react';

function  Fecha ({word, setWord, label}) {

    const HandleOnChange = (e) => {
        setWord(e.target.value);
    }
    return (
        <div className='field' >

            <label className={word.length > 0? "prueba" : ""}>{label}</label>
            <input type="datetime-local" onChange={ HandleOnChange}/>
            

        </div>
    );
}

export default Fecha;
