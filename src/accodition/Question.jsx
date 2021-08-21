import React, { useState } from 'react'
import {AiOutLineMinus,AiOutLinePlus} from 'react-icons'
function Question({id,title,info}) {
    const [showInfo,setShowInfo]=useState(false);
    return (
       <article className="question">
           <header>
               <h4>{title}</h4>
               <button className="btn" onClick={()=>setShowInfo(!showInfo)}>
                   {
                       showInfo?"hide":'show'
                   }
               </button>
              
           </header>
           {
               showInfo &&  <p>{info}</p>
           }
          
       </article>
    )
}

export default Question
