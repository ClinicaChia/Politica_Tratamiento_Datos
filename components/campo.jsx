import React,{useState} from 'react';
//Se realiza una variable de estilos para cuando cambia el className
const styles = {
    "borderBottom": "3px solid var(--primary)",
    "width": "50%"
  
  }

export default function Campo({word,setWord,Label}) {
    

    const onChange = (e) => {
        setWord(e.target.value);
        
    }
  return (
    <article className="field">

              <label className={word.length > 0? "prueba" : ""}>{Label}</label>
              <input type="text" value={word} onChange={onChange} style={word.length > 0? styles : {}}/>

    </article>
  )
}
