import React from 'react'

import { useGlobalContext } from './context'
import {FaTimes} from 'react-icons/fa'
import sublinks from './data'
import { linkSync } from 'fs'
function Sidebar() {
    const {isSidebarOpen,closeSideBar}=useGlobalContext()
    return (
        <aside className={`${isSidebarOpen ? 'sidebar-wrapper show':'sidebar-wrapper'}`}>
            <div className="sidebar">
                <button className='close-btn' onClick={()=>closeSideBar()}>
                    <FaTimes />
                </button>
                <div className="sidebar-links">
                        {
                            sublinks.map((item,index)=>{
                            const {links,page}=item;
                                return (
                                    <article key={index}>
                                        <h4>{page}</h4>
                                        <div className="sidebar-sublinks">
                                            {
                                                links.map((link,index)=>{
                                                    const {url,icon,label}=link;
                                                    return (
                                                        <a href={url} key={index}>
                                                            {icon}
                                                            {label}
                                                        </a>
                                                    )
                                                })
                                            }
                                        </div>
                                    </article>
                                )
                            })
                        }
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
