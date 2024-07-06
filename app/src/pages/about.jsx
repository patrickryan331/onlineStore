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
                    <p>email:  EasterShoreSurfShop@gmail.com</p>
                    <p>phone: 203 555 1234</p>
                </div>
            );
        }
        else {
            return <p>Click the button to view my info</p>
        }
    }


    return (
        <div className="about">
            <h2>About Us</h2>

            {getInfo()}

            {isInfoVisible ? "" : (
                <button onClick={showInfo} className='btn btn-sm btn-primary'>View Contact Information</button>
            )}



        </div>
    );
}




export default About;