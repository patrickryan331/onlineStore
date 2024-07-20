import "./styles/home.css"
import { Link, useNavigate } from 'react-router-dom';


function Home() {


    const navigate = useNavigate();

    const navigateToTop = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };


    return (
        <div className='home page'>
            <h1>Welcome to Eastern Shore Surf Shop</h1>
            <img className="shopImg" src="/images/homeBackground.jpg" alt="" />

            <div className="home-bottom">
                <h1>Our Mission</h1>
                <h3>Eastern Shore Surf Shop is dedicated to providing quality and affordable surfboards and gear for all ages, as well as surf classes throughout the summer. Come by the shop to check out our weekly specials!</h3>
                <Link to="/about">
                    <button className="btn btn-primary" onClick={() => navigateToTop('/about')}>
                        About Us
                    </button>
                </Link>
                <img className="homeImg" src="/images/waveRider.jpg" alt="" />
            </div>
            <div className="home-bottom">
                <h1>Our Products</h1>
                <h2>New and Trendy Surfboards and Gear</h2>
                <h3>Check out our latest collections and discover what's new in the surf world</h3>
                <Link to="/catalog">
                    <button className="btn btn-primary" onClick={() => navigateToTop('/catalog')}>
                        View Our Catalog
                    </button>
                </Link>
                <img className="homeImg" src="/images/surfboardShop.jpg" alt="" />
                
            </div>

            <div className="surf-camp-info">
                <h1>Summer Surf Camp</h1>
                <img className="campImg" src="/images/camp.jpg" alt="" />
                <h2>Coming June 2025 !</h2>
                <h3>Surfing is a Fun Way to Explore the World!</h3>
                <h3>Discover the Breathtaking Beaches of New England!</h3>
                <button className="btn btn-primary">Book Your Spot Today !</button>
                <h4>Join our summer surf camp to experience the thrill of surfing!</h4>
                <h4>• Surfing Sessions for Every Skill Level</h4>
                <h4>• Beach Bonfires and Barbecues</h4>
                <h4>• Adventure Activities</h4>
                <h4>• Yoga and Wellness</h4>

            </div>
        


        </div>



    );
}


export default Home;