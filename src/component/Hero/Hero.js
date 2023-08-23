import React from "react"
import "./Hero.css"
import CountUp from "react-countup"
// import {FaLocationDot} from 'react-icons'
const Hero = () => {
    return ( 
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
<div className="flexColStart hero-left">
    <div className="hero-title">
        <div className="orange-circle" />
        <h1>
            Discover<span><br/> Most Suitable <br/>Properties</span>
        </h1>
    </div>
    <div className="flexColStart hero-des">
        <span className="SecondaryText">
            Find A Variety Of Properties That Suits You Very Easily
        </span>
        <span className="SecondaryText">
            Forget All Difficulties In Finding A Residence For You
        </span>
    </div>
    <div className="flexCenter search-bar">
        {/* <FaLocationDot color="var(--blue)" siize={25} /> */}
        <input type="text" />
    <button className="button">search</button>
    </div>
    <div className="flexCenter stats">
        <div className="flexColStart stat">
            <span>
                <CountUp start={10} end={100} duration={10}   />   
                    <span>+</span>
                </span>
                <span >Premium Products</span>
        </div> 
    </div>
    <div className="flexCenter stats">
        <div className="flexColStart stat">
            <span>
                <CountUp start={20} end={200} duration={10}   />   
                    <span>+</span>
                </span>
                <span>Happy Clients</span>
        </div>
    </div>
    <div className="flexCenter stats">
        <div className="flexColStart stat">
            <span>
                <CountUp start={10} end={500} duration={10}   />   
                    <span>+</span>
                </span>
                <span>Properties Available</span>
        </div>
    </div>
</div>
 {/* right side */}
        <div className="flexCenter hero-right">
            <div className="image-container">
                <img src="./images/hero-image.png" alt="hero"></img>
            </div>
        </div>
            </div>
        </section>
     );
}
 
export default Hero;