const reducer=(state,action)=>{
    switch(action.type){
        case "CLEAR_CART":
        return {...state,cart:[]};
        case "REMOVE_CART":
        return {
            ...state,
            cart:state.cart.filter((c)=>c.id!==action.payload)
        };
        case "INCREASE":
        const cartItem=state.cart.map((c)=>{
            if(c.id===action.payload){
                return {...c,amount:c.amount+1}
            }
            return c;
        })
        return {...state,cart:cartItem};
        case "DECREASE":
        const newCart=state.cart.map((c)=>{
            if(c.id===action.payload){
                return {...c,amount:c.amount-1}
            }
            return c
        }).filter((item)=>item.amount>=1)
        return {...state,cart:newCart};
        case "GET_TOTAL":
        const {total,amount}=state.cart.reduce((cartTotal,itemCart)=>{
            cartTotal.total+=itemCart.price*itemCart.amount;
            cartTotal.amount+=itemCart.amount
            return cartTotal
        },{total:0,amount:0});
        return {...state,total,amount};
        case "FETCH_DATA":
        return {...state,cart:action.payload};
        case "LOADING":
        return {...state,loading:true}         
        case "NO_LOADING":
        return {...state,loading:false} ;
        case "TOGGLE_AMT":
        let tempCart=state.cart.map((c)=>{
            if(c.id===action.payload.id){
                if(action.payload.type==="inc"){
                    return {...c,amount:c.amount+1}
                }
                else{
                    return {...c,amount:c.amount-1}
                }
            }
            return c
        }).filter((item)=>item.amount>=1)
        return {...state,cart:tempCart}              
    }
}
export default reducer;