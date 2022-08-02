import React, {useEffect,useState,useRef}from 'react';
import SignatureCanvas from "react-signature-canvas";
const Canvas = ({signatureRef,GenLink}) => {
    const [Heigth, setHeigth] = useState(null);
    
    useEffect(() => {setHeigth(window.innerWidth) //Se mira la altura del dispositvo por primera vez, para ajustar la pantalla
    
        console.log(window.innerWidth)
    
    }, [Heigth]
    
    
    
    );

    return (
        
            <SignatureCanvas  
            ref={signatureRef}
            canvasProps={{
                width: Heigth? Heigth-80:200, height: 200, 
                style:{"border":"1px solid #000000"}
              }}

              onEnd={ () => (
                GenLink(signatureRef.current.toDataURL())
                )}
            />
        
    );
}

export default Canvas;
