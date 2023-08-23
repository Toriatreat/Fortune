import React from 'react'
import "./Footer.css"
const Footer = () => {
    return ( 
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
        <div className='flexColStart f-left'>
            <span className='primaryText'>Our Motto</span>
            <span className='secondaryText'>
                Selling solution, not promises.
            </span>
        </div>
        <div className='flexColStart f-right'>
            <span className='primaryText'>Information</span>
            <span className='secondaryText'>24,Adedeji Street,Itire-Mushin,Lagos.</span>

            <div className='flexCenter f-menu'>
        <span>Property</span>
        <span>Services</span>
        <span>Product</span>
            </div>
        </div>
            </div>
        </section>
     );
}
 
export default Footer;