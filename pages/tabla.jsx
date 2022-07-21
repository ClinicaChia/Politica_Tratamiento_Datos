import React,{useState,useEffect} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import Card from '../components/card';
import axios from 'axios';


const Tabla = () => {
    
    const [data, setData] = React.useState([]);
    const [LastId, setLastId] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [hasMore, setHasMore] = React.useState(true);
    useEffect(() => {

        setData(Array.from({ length: 20 }));
        axios.post('/api/getData',{ID:LastId}).then(res => {
            const temp =  res.data.query;
            console.log(temp);
            setData(data.concat(res.data.query));
            setLastId(res.data.query[res.data.query.length-1]._id);
            setLoading(false);
            if(res.data.query.length<20){
                setHasMore(false);
            }
        })

}, []);

    const fetchMoreData = () => {
        axios.post('/api/getData',{ID:LastId}).then(res => {
            const temp =  res.data.query;
            console.log(temp);
            setData(data.concat(res.data.query));
            setLastId(res.data.query[res.data.query.length-1]._id);
            setLoading(false);
            if(res.data.query.length<20){
                setHasMore(false);
            }
        })
    }

    if(loading){
        return(
            <h4>Cargando...</h4>
        )
    }
    return (
        <div>
            <h1 className='titulo'>Soportes de firmas</h1>

            <InfiniteScroll

            dataLength={data.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Cargando...</h4>}
            
            >   
            <div className='card-container'>
                {
                data.map((item, index) => {
                    console.log(item);
                    return(

                        <Card nombre={item.Nombre} 

                        celular={item.Celular}
                        
                        cedula={item.Cedula} 

                        uri={item.URI}

                        acepto={item.Acepto}
                        
                        key={index}/>
                    )
                })}
            </div>
                
            </InfiniteScroll>
        </div>
    );
}

export default Tabla;
