import React, { useEffect, useState } from 'react'
import data from './data'
import {FaQuoteRight} from 'react-icons/fa'
function Slider() {
    const [people,setPeople]=useState(data);
    const [index,setIndex]=useState(0);
    useEffect(()=>{
        let lastIndex=data.length-1;
        if(index<0){
            setIndex(lastIndex)
        }
        if(index>lastIndex){
            setIndex(0)
        }
    },[index,people])
    useEffect(()=>{
        let interval=setInterval(() => {
            setIndex(index+1)
        }, 3000);
        return ()=> clearInterval(interval)
    },[index])
    return (
       <section className="section">
           <div className="title">
               <h3><span>/</span>Review</h3>
           </div>
           <div className="section-center">
               {
                   people.map((person,personIndex)=>{
                       const {id,image,name,title,quote}=person;
                       let position="nextSlide"
                        if(personIndex===index){
                            position="activeSlide"
                        }
                        if(personIndex===index-1){
                            position="lastSlide"
                        }
                        return(
                            <article key={id} className={position}>
                                    <img src={image} alt=""  className="person-img"/>
                                    <h4>{name}</h4>
                                    <p className="title">{title}</p>
                                    <p className="text">{quote}</p>
                                    <FaQuoteRight className="icon" />
                            </article>
                        )
                   })
               }
                 <button className="prev" onClick={()=>setIndex(index-1)}>
                    L      
                  </button>
                  <button className="next"  onClick={()=>setIndex(index+1)}>
                    R     
                  </button>
           </div>
       </section>
    )
}

export default Slider
