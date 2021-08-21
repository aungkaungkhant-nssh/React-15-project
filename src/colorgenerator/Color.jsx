import React, { useState } from 'react'
import Values from 'values.js'
function Color() {
    const [color,setColor]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        let color=new Values(color).all(10);
        console.log(color);
    }
    return (
        <section className="contianer">
            <h3>color generator</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={color} onChange={(e)=>setColor(e.target.value)}/>
                <button className="btn" type="submit">
                    submit
                </button>
            </form>
        </section>
    )
}

export default Color
