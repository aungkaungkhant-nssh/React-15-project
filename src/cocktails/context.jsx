import React, { useContext, useState,useEffect} from 'react'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
export const AppContext=React.createContext();

export const AppProvider=({children})=>{
    const [loading,setLoading]=useState(false);
    const [cocktails,setCocktails]=useState([]);
    const [searchTerm,setSearchTerm]=useState("a");
    const fetchDrink=async()=>{
        setLoading(true);
        try{
            const response=await fetch(`${url}${searchTerm}`)
            const data=await response.json();
            const {drinks}=data;
            if(drinks){
                const newDrinks=drinks.map((drink)=>{
                   const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass}=drink;
                   return {id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,glass:strGlass};
                })
                setCocktails(newDrinks);
            }else{
                setCocktails([]);
            }
            setLoading(false)
        }catch(error){
            console.log(error.message);
        }
    }
    useEffect(() => {
        fetchDrink();
    }, [searchTerm]);
    return (
        <AppContext.Provider value={{loading,cocktails,searchTerm,setSearchTerm}}>{children}</AppContext.Provider>
    )
}
export const useGlobalContext=()=>{
    return useContext(AppContext);
}


