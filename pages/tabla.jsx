import React,{useState,useEffect} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import Card from '../components/card';
import axios from 'axios';

const Tabla = () => {
    
    const [Fill,setFill] = useState('');
    const [data, setData] = React.useState([]);
    const [LastId, setLastId] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [hasMore, setHasMore] = React.useState(true);
    useEffect(() => {

        setData(Array.from({ length: 20 }));
        axios.post('/api/getData',{ID:LastId}).then(res => {
            const temp =  res.data.query;
            setData(data.concat(res.data.query));
            console.log(res.data.query.length >1 && "se ejecuta" || '')
            setLastId( res.data.query.length >1 && res.data.query[res.data.query.length-1]._id || '');
            setLoading(false);
            if(res.data.query.length<20){
                setHasMore(false);
            }
        })

}, []);

    const fetchMoreData = () => {
        axios.post('/api/getData',{ID:LastId}).then(res => {
            const temp =  res.data.query;
            setData(data.concat(res.data.query));
            setLastId(res.data.query[res.data.query.length-1]._id);
            setLoading(false);
            if(res.data.query.length<20){
                setHasMore(false);
            }
        })
    }

    const handleOnChange = (e) => {
        
        setFill(e.target.value);
    }
    if(loading){
        return(
            <h4>Cargando...</h4>
        )
    }
    //create  regex to search word in variable Fill
    

    return (
        <div>
            <h1 className='titulo'>Soportes de firmas</h1>

            <input className='search' placeholder='Digite el numero de cedula... ✍️'   onChange={handleOnChange}/>
            <InfiniteScroll

            dataLength={data.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Cargando...</h4>}
            
            >   
            <div className='card-container'>
                {
                
                data.map((item, index) => {
                    const ex = new RegExp(Fill,'g');

                    if(ex.test(item.Cedula) || Fill === ''){
                        
                        return(

                            <Card nombre={item.Nombre} 
    
                            celular={item.Celular}
                            
                            cedula={item.Cedula} 
    
                            uri={item.URI}
    
                            AceptoPolitica={item.AceptoPolitica}

                            AceptoMedico={item.AceptoMedico}


                            servicio={item.Servicio}

                            FechaI={item.FechaI}

                            FechaS={item.FechaF}

                            
                            key={index}/>
                        )
                    }

                    return null;
                    
                })}
            </div>
                
            </InfiniteScroll>
        </div>
    );
}

export default Tabla;
