import React from 'react'
import CartContainer from './CartContainer'
import { useGlobalContext } from './context'
import Navbar from './Navbar'
function Cart() {
    const {loading}=useGlobalContext()
    if(loading){
        return(
           <div className="loading">
               <h1>loading....</h1>
           </div>
        )
    }
    return (
        <div>
            <Navbar />
            <CartContainer />
        </div>
    )
}

export default Cart
