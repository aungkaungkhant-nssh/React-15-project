import React, { useContext } from 'react'
import {FaBars} from 'react-icons/fa'
import { useGlobalContext } from './context'
function Home() {
    const {openSideBar,openModal}=useGlobalContext();;
    return (
       <main>
           <button className="sidebar-toggle" onClick={()=>openSideBar()}>
                <FaBars />
               
           </button>
           <button className="btn" onClick={()=>openModal()}>show modal</button>
       </main>

    )
}

export default Home
