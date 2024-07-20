import './styles/navbar.css'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DataContext from '../state/datacontext';


function Navbar() {


    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;

    
    const navigate = useNavigate();

    const navigateToTop = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

return (
    <nav className="navbar navbar-expand-lg" >
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        E. S. S. S. <img className='navIcon' src="/images/surficon.png" alt="" />
        </Link>
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
                Home
            </Link>
            <Link className="nav-link active" aria-current="page" to="/about">
                About Us
            </Link>
            <Link className="nav-link active" aria-current="page" to="/catalog">
                Shop
            </Link>
            </li>
        </ul>
        <form className="d-flex" role="search">

        <button className="btn btn-outline-dark" onClick={() => navigateToTop('/admin')}>
                        Admin
                    </button>

                <button className='btn btn-outline-dark'>{user.name}</button>



            <Link className="btn btn-primary" to="/cart">
                {cart.length} Items In Cart
                <i class="fa-solid fa-cart-shopping"></i>
            </Link>
        </form>
        </div>
    </div>
    </nav>
);
}



export default Navbar;