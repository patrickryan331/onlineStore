import './styles/about.css';
import { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function About() {
    const [isInfoVisible, setIsInfoVisible] = useState(false);


    function showInfo() {
        setIsInfoVisible(true);
    }

    function getInfo() {
        if (isInfoVisible) {
            return (
                <div  className='info'>
                    <p><b>Email:</b>  EasterShoreSurfShop@gmail.com</p>
                    <p><b>Phone:</b> 203 555 1234</p>
                </div>
            );
        }
        else {
            return <p></p>
        }
    }


    return (
        <div className="about">
            <h2>About Us</h2>
            <p className='aboutP'>Eastern Shore Surf Shop is a family owned and operated business located on the beach of southeast Connecticut. We provide quality and affordable surfboards and gear for all ages, as well as surf classes thoughout the summer! Come by the shop to check out our weekly specials!</p>

            {getInfo()}

            {isInfoVisible ? "" : (
                <button onClick={showInfo} className='btn btn-sm btn-primary'>Click to View Contact Information</button>
            )}



        </div>
    );
}




export default About;