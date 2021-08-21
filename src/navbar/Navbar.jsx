import React, { useEffect, useRef, useState } from 'react'
import { icons } from 'react-icons'
import { FaBars, FaTwitter } from 'react-icons/fa'
import {links,social} from "./data"
console.log(links)
function Navbar() {
    const [show,setShow]=useState(false);
    const linksRef=useRef(null);
    const linksContainerHeight=useRef(null);
    useEffect(()=>{
        const linksHeight=linksRef.current.getBoundingClientRect().height;
        if(show){
            linksContainerHeight.current.style.height=`${linksHeight}px`
        }else{
            linksContainerHeight.current.style.height=`0px`
        }
    },[show])
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <h3>Coding Addict</h3>
                    <button className="nav-toggle">
                        <FaBars onClick={()=>setShow(!show)}/>
                    </button>
                </div>
                <div className="links-container" ref={linksContainerHeight}>
                    <ul className="links" ref={linksRef}>
                        {
                            links.map((link,index)=>{
                                const {id,url,text}=link;
                               return <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            })
                        }
                       
                    </ul>
                </div>
                <ul className="social-icons">
                        {
                            social.map((ic)=>{
                                const {id,url,icon}=ic;
                                return(
                                    <li key={id}>
                                        <a href={url}>{icon}</a>
                                    </li>
                                )
                            })
                        }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
