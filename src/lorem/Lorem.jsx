import React, { useState } from 'react'
import data from './data'
function Lorem() {
    const [count,setCount]=useState(0);
    const [text,setText]=useState([])
    const submitHandler=(e)=>{
        e.preventDefault();
        let amount=parseInt(count);
        if(amount<=0){
            amount=1;
        }
        if(amount>8){
            amount=8
        }
        setText(data.slice(0,amount));
    }
    return (
        <section className="section-center">
            <h3>tired of boring lorem ispum</h3>
            <form className="lorem-form" onSubmit={submitHandler}>
                <label htmlFor="amount">
                    paragraphs:
                </label>
                <input type="number" id="amount" name="amount" value={count} onChange={(e)=>setCount(e.target.value)}/>
                <button type="submit" className="btn">Genereate</button>
            </form>
            <article className="lorem-text">
            {
                text.map((te,index)=>{
                    return (
                        <p key={index}>{te}</p>
                    )
                })
            }
            </article>
        </section>
    )
}

export default Lorem
