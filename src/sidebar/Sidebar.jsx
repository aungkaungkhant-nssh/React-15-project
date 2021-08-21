import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { useGlobalContext } from './context'
import {social,links} from './data'
function Sidebar() {
    const {isOpenSideBar,closeSideBar}=useGlobalContext();
    return (
       <aside className={`${isOpenSideBar?'sidebar show-sidebar':'sidebar'}`}>
          
           <div className="sidebar-header">
               <h3>Coding Addict</h3>
               <button className="close-btn" onClick={()=>closeSideBar()}>
                    <FaTimes />
               </button>
           </div>
          <ul className="links">
                {
                    links.map((link,index)=>{
                        const {id,url,text,icon}=link;
                        return(
                            <li key={id}>
                                <a href={url}>
                                    {icon}
                                    {text}
                                </a>
                            </li>
                        )
                    })
                }
          </ul>
       </aside>

    )
}

export default Sidebar
