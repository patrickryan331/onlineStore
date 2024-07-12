import './styles/navbar.css'

import { Link } from 'react-router-dom';


function Navbar() {
return (
    <nav className="navbar navbar-expand-lg" >
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        E. S. S. S. <img src="/images/surfIcon.jg" alt="" />
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
                About
            </Link>
            <Link className="nav-link active" aria-current="page" to="/catalog">
                Catalog
            </Link>
            <Link className="nav-link active" aria-current="page" to="/admin">
                Admin
            </Link>
            <Link className="nav-link active" aria-current="page" to="/catalog">
                Cart <i class="fa-solid fa-cart-shopping"></i>
            </Link>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">
            Search
            </button>
        </form>
        </div>
    </div>
    </nav>
);
}



export default Navbar;