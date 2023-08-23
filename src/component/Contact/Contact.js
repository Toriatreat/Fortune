import React from "react";
import "./Contact.css"
import {MdCall} from 'react-icons/md'
    import{BsFillChatDotsFill} from 'react-icons/bs'
    import{HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
    return (  
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                 {/*left side*/}
        <div className="flexColStart c-left">
            <span className="orangeText">Our Contacts</span>
            <span className="primaryText">Easy to Contact Us</span>
            <span className="secondaryText">We always ready to help by providing the best services
                Believing a good place to live can make life better for you and i.
            </span>

            <div className="flexColStart contactModes">
                {/*first row*/} 
                <div className="flexColStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25} />
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Call</span>
                                <span className="secondaryText">08126866278</span>
                                <span className="secondaryText">09022130714</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Call Now</div>

                    </div>
                    {/*second mode */}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25} />
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Chat</span>
                                <span className="secondaryText">08176934003</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Chat Now</div>
                    
                    </div>
                    </div>
                    </div>
        </div>

        
        {/*right side*/}
        <div className="c-right">
            <div className="image-container">
            <img src="./images/contact.jpg" alt="" />
            </div>
        </div>
       
            </div>
        </section>
        );
}
 
export default Contact;