import React, { useEffect } from 'react'
import { useGlobalContext } from './context'

function SearchForm() {
    const {serachTerm,setSearchTerm}=useGlobalContext();
    const searchValue=React.useRef();
    const searchCocktails=()=>{
        setSearchTerm(searchValue.current.value);
    }
    useEffect(()=>{
        searchValue.current.focus()
    },[])
    return (
       <section className="section search">
           <form className="search-form">
               <div className="form-control">
                   <label htmlFor="">Search Your Favorite CockTails</label>
                   <input type="text" ref={searchValue} onChange={searchCocktails}/>
               </div>
           </form>
       </section>
    )
}

export default SearchForm
