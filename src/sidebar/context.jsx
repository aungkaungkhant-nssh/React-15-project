import React, { useContext, useState } from 'react'

const AppContext=React.createContext();
const AppProvider=({children})=>{
    const [isOpenModal,setIsOpenModal]=useState(false);
    const [isOpenSideBar,setIsOpenSidebar]=useState(false);
    
    const openSideBar=()=>{
        setIsOpenSidebar(true);
    }
    const closeSideBar=()=>{
        setIsOpenSidebar(false);
    }
    const openModal=()=>{
        setIsOpenModal(true)
    }
    const closeModal=()=>{
        setIsOpenModal(false)
    }
    return <AppContext.Provider value={{isOpenModal,isOpenSideBar,openSideBar,closeSideBar,openModal,closeModal}}>{children}</AppContext.Provider>
}
export const useGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}
// export default context
