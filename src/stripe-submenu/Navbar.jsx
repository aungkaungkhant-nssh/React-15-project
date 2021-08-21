import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
function Navbar() {
    const {openSidebar,closeSubmenu, openSubmenu}=useGlobalContext();
    const displayMenu=(e)=>{
       const page=e.target.textContent;
       const tempBtn=e.target.getBoundingClientRect();
       const center=(tempBtn.left+tempBtn.right)/2;
       const bottom=tempBtn.bottom;
       openSubmenu(page,{center,bottom});
    }
   const handleSubmenu=()=>{
       closeSubmenu()
   }
    return ( 
        <nav className="nav" onMouseLeave={handleSubmenu}>
            <div className="nav-center">
                <div className="nav-header">
                    <h3 className="nav-logo">Codding Addict</h3>
                    <button className="btn toggle-btn">
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    <li>
                        <button className="link-btn" onMouseOver={(e)=>displayMenu(e)}>
                            products
                        </button>
                    </li>
                    <li>
                         <button className="link-btn" onMouseOver={(e)=>displayMenu(e)}>
                         developers
                         </button>
                    </li>
                    <li>
                         <button className="link-btn" onMouseOver={(e)=>displayMenu(e)}>
                            company
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
