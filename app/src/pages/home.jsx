import "./styles/home.css"


function Home() {
    return (
        <div className='home page'>
            <h1>Welcome to Eastern Shore Surf Shop</h1>
            <img src="/images/homeBackground.jpg" alt="" />


            {/* <div className="home-top">
                
                <h2>When The Surf Is Up, The Vibes Are Up !</h2>
            </div> */}

            <div className="home-bottom">
                <h1>Our Mission</h1>
                <h4>Eastern Shore Surf Shop is dedicated to providing quality and affordable surfboards and gear for all ages, as well as surf classes throughout the summer. Come by the shop to check out our weekly specials!</h4>
                <button className="btn btn-primary">Visit Our Store</button>
            </div>

            <div className="surf-camp-info">
                <h1>Introducing Summer Surf Camp</h1>
                <h2>Coming June 2025 !</h2>
                <h3>Surfing is a Fun and Safe Way to Explore the World</h3>
                <h3>Discover the Breathtaking Beaches of New England</h3>
                <button className="btn btn-primary">Book Your Spot Today !</button>
                <h4>Join our summer surf camp to experience the thrill of surfing</h4>
                <h4>• Surfing Sessions for Every Level</h4>
                <h4>• Beach Bonfires and Barbecues</h4>
                <h4>• Adventure Activities</h4>
                <h4>• Yoga and Wellness</h4>

            </div>
        


        </div>



    );
}


export default Home;