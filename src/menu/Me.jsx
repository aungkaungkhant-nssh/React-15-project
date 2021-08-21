import React, { useState } from 'react'
import Categories from './Categories';
import items from './data'
import Menu from './Menu';
function Me() {
    const newCategories=['all',...new Set(items.map(item =>item.category))]
    const [menuItems,setMenuItems]=useState(items);
    const [categories,setCategories]=useState(newCategories);

    const filterCategories=(category)=>{
        if(category==="all"){
            setMenuItems(items);
            return;
        }
        const newItems=items.filter(item =>item.category===category);
        setMenuItems(newItems)
    }
    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our Title</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} filterCategories={filterCategories}/>
                <Menu menuItems={menuItems} />

            </section>
        </main>

    )
}

export default Me
