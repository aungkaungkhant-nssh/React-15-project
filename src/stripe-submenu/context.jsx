import React, { useContext, useState } from 'react'
import sublinks from './data'
export const AppContext=React.createContext();

export const AppProvider=({children})=>{
    const [isSidebarOpen,setIsSidebarOpen]=useState(false);
    const [isSubMenuOpen,setIsSubMenuOpen]=useState(false);
    const [location,setLocation]=useState({});
    const [page,setPage]=useState({page:'',links:[]})
    const openSideBar=()=>{
        setIsSidebarOpen(true);
    }
    const closeSideBar=()=>{
        setIsSidebarOpen(false)
    }
    const openSubmenu=(text,coordinate)=>{
        const page=sublinks.find((link)=>link.page===text);
        setPage(page);
        setLocation(coordinate);
        setIsSubMenuOpen(true)
    }
    const closeSubmenu=()=>{
        setIsSubMenuOpen(false)
    }
    return <AppContext.Provider value={{isSidebarOpen,isSubMenuOpen,openSideBar,openSubmenu,closeSideBar,closeSubmenu,location,page}}>{children}</AppContext.Provider>
}
export const useGlobalContext=()=>{
    return useContext(AppContext)
}

