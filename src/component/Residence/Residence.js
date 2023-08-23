import React from "react";
import "./Residence.css"
 import {Swiper,SwiperSlide,UseSwiper} from 'swiper/react' 
    import "swiper/css"                
        import "./Residence.css";    
            import data from '../../utils/slider.json' ;
            import { sliderSettings } from "../../utils/common";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
const Residence = () => {
    return (  
        <section className="r-container">
            <div className=" paddings innerWidth r-wrapper">
        <div className="r-head flexColstart">
            <span className="orangeText">Best Choices</span><br></br>
            <span className="primaryText">Popular Residences</span>
        </div>
        <Swiper {...sliderSettings}>
            {/* <SliderButton /> */}
            {data.map((card,i) => (
            <SwiperSlide key={i}>
                <div className="flexColStart r-card ">
            <img src={card.image} alt="home" />

            <span className="secondaryText r-price">
            <span style={{color:"purple"}}>$</span> 
            <span>{card.price}</span>
            </span>
            <span className="PrimaryText">{card.name}</span>
            <span className="secondaryText">{card.detail}</span>
            
                </div>
                </SwiperSlide>
                )
                )
            }
        </Swiper>
            </div>
        </section>
    );
}
 
export default Residence ;

// const SliderButton = () => {
//     const swiper=UseSwiper()
//     return (
//         <div className="r-button">
//         <button>
//             <button onClick={()=>swiper.slidePrev ()}>&lt;</button>
//             <buttononClick={()=>swiper.slideNext ()}>&gt;</button>
//         </button>
//         </div>
    //   );
// }
 
