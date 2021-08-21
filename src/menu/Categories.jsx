import React from 'react'

function Categories({categories,filterCategories}) {
    return (
        <div className="btn-container">
            {
                categories.map((cat,index) =>{
                    return (
                        <button key={index} className="filter-btn" onClick={()=>filterCategories(cat)}>{cat}</button>
                    )
                })
            }
        </div>
    )
}

export default Categories
