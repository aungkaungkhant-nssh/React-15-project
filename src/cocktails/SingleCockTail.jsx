import React, { useEffect, useState } from 'react'
import {useParams,Link} from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
function SingleCockTail() {
    const {id}=useParams();
    const [loading,setloading]=useState(false);
    const [cocktail,setCocktail]=useState(null);
    useEffect(()=>{
        setloading(true);
        async function getCocktails(){
            try{
                let res=await fetch(`${url}${id}`);
                let data=await res.json();
                const {drinks}=data;
                if(drinks){
                    const {strDrink:name,strDrinkThumb:image,strAlcoholic:info,
                    strCategory:category,strGlass:glass,strInstructions:instructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5
                    }=drinks[0];
                    const ingredients=[
                        strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5
                    ]
                    const newCocktail={
                        name,image,info,category,glass,instructions,ingredients
                    }
                    setCocktail(newCocktail)
                  
                    console.log(cocktail)
                }else{
                    setCocktail(null)
                }
            }catch(error){
                console.log(error)
            }
        }
        getCocktails();
    },[id])
    return (
        <div>
            <h1>Single CockTail</h1>
        </div>
    )
}

export default SingleCockTail
