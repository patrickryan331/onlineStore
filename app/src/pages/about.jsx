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
                    <p><b>Phone:</b> 203-555-1234</p>
                    <p><b>Address:</b> 123 Main Street New London CT 06320</p>
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
            <p className='aboutP'>Eastern Shore Surf Shop is a family owned and operated business located on the beach front of southeast Connecticut. We provide quality and affordable surfboards and gear for all ages, as well as surf classes thoughout the summer! Come by the shop to check out our weekly specials!</p>
            <table className='hours'>
                <tr><th>Monday</th><td>Closed</td></tr>
                <tr><th>Tuesday</th><td>9am - 5pm</td></tr>
                <tr><th>Wednesday</th><td>9am - 5pm</td></tr>
                <tr><th>Thursday</th><td>9am - 5pm</td></tr>
                <tr><th>Friday</th><td>9am - 5pm</td></tr>
                <tr><th>Saturday</th><td>10am - 4pm</td></tr>
                <tr><th>Sunday</th><td>10am - 4pm</td></tr>
            </table>
            

            {getInfo()}

            {isInfoVisible ? "" : (
                <button onClick={showInfo} className='btn btn btn-primary'>Click Here to View Contact Information</button>
            )}



        </div>
    );
}




export default About;