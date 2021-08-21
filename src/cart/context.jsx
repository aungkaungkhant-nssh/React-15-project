import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItem from './data'
import reducer from './reducer'
const url = 'https://course-api.com/react-useReducer-cart-project'

export const AppContext=React.createContext();

const initialState={
    loading:false,
    cart:cartItem,
    total:0,
    amount:0
}

export const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)
        const clearCart=()=>{
            dispatch({type:"CLEAR_CART"});
        }
        const removeCart=(id)=>{
            dispatch({type:"REMOVE_CART",payload:id});
        }
        // const increase=(id)=>{
        //     dispatch({type:"INCREASE",payload:id});
        // }
        // const decrease=(id)=>{
        //     dispatch({type:"DECREASE",payload:id});
        // }
        const toggleAmount=(id,type)=>{
            dispatch({type:"TOGGLE_AMT",payload:{id:id,type:type}})
        }
        const fetchData=async()=>{
            dispatch({type:"LOADING"})
            let res=await fetch(url);
            let cart=await res.json();
          
            dispatch({type:"FETCH_DATA",payload:cart})
            dispatch({type:"NO_LOADING"})
        }
        useEffect(()=>{
            fetchData()
        },[])
        useEffect(()=>{
                dispatch({type:"GET_TOTAL"});
        },[state.cart])
        return( 
            <AppContext.Provider value={{...state,clearCart,removeCart,toggleAmount}}>
                {children}
            </AppContext.Provider>
        )
}
export const useGlobalContext=()=>{
    return useContext(AppContext);
}