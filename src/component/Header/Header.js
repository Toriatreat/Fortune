import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from "react-icons/bi"
const Header = () => {
    const [menuOpened,SetMenuOpened]=useState(false)
    const getMenuStyles=(menuOpened)=>{
        if (document.documentElement.clientWidth<= 800)
        return{right: !menuOpened && "-100%" }
    
    }

    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
      

    <outsideClickHandler
    onOutsideClick={() =>{
        SetMenuOpened=(false)
    }
    }
    >
        <div className='flexCenter h-menu'
        style={getMenuStyles(menuOpened)}
        >
            
            <a href=" ">Residences</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className='button'>
            <a href="">Contact</a>
            </button>
        </div>
        </outsideClickHandler
        >
        
        <div className='menu-icon' onClick ={()=>SetMenuOpened((prev)=>!prev)}>
            <BiMenuAltRight size={30} />
        </div>
            
        </div>
            </section>
        );
}
 
export default Header; 

