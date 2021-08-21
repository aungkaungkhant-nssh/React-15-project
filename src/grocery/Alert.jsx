import React, { useEffect } from 'react'

function Alert({msg,type,removeAlert,lists}) {
    useEffect(()=>{
        const timeOut=setTimeout(() => {
            removeAlert();
        }, 3000);
        return ()=>{
            clearTimeout(timeOut);
        }
    },[lists])
    return (
        <div>
            <p className={`alert alert-${type}`}>{msg}</p>
        </div>
    )
}

export default Alert
