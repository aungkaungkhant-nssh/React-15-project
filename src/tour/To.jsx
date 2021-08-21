import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Tours from './Tours';
const url = 'https://course-api.com/react-tours-project';

function To() {
    const [loading,setLoading]=useState(false)
    const [tours,setTours]=useState([]);
    const fetchTour=async ()=>{
        setLoading(true)
        try{
            let response=await fetch(url);
            let data=await response.json();
            setTours(data)
            setLoading(false)
        }catch(error){
            console.log(error.message)
        }
     
    }
    const removeTour=(id)=>{
        const newTours=tours.filter(tour =>tour.id !==id);
        setTours(newTours);
    }
    useEffect(()=>{
        fetchTour()
    },[])
    if(loading){
        return(
            <Loading />
        )
    }
    return(
        <main>
               <h1>Tour Project Setup</h1>
               {
                   tours.length===0?<button className="btn" onClick={fetchTour}>refresh</button>:<Tours tours={tours} removeTours={removeTour}/>
               }
                
             
        </main>
     
        
    )
}

export default To
