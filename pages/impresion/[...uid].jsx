import axios from 'axios';
import React from 'react';
import Image from 'next/image'
import AceptoPolitica from '../../components/aceptoPolitica';
import AceptoTratamiento from '../../components/aceptoTratamiento';
const Impresion = ({user,parametro}) => {

    const User = user.user;

    console.log(parametro)
  
    return (
      
      <div>
        {parametro === "aceptoPolitica" ? <AceptoPolitica User={User} /> : <AceptoTratamiento User={User} />}
      </div>
      
    );
}

export async function getServerSideProps(context) {

  const cedula = context.query.uid[0];

  const parametro = context.query.uid[1];

  console.log(parametro);

  const user = await (await fetch("http://" + process.env.BASE_PATH + "api/getOne?cedula="+cedula)).json();


    
    return {
      props: {user,parametro}, // will be passed to the page component as props
    }
  }

export default Impresion;
