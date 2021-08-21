import React, { useEffect, useState } from 'react'

function Te() {
    const [index,setIndex]=useState(0)
    useEffect(()=>{
       let interval= setInterval(() => {
            setIndex(index+1)
        }, 1000);
        return ()=> clearInterval(interval)
    },[index])
    return (
        <div>
            {
                index
            }
        </div>
    )
}

export default Te
