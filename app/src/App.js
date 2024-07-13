import logo from './logo.svg';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import About from './pages/about';
import Admin from './pages/admin';
import Home from './pages/home';
import './App.css';
import GlobalProvider from './state/globalProvider';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
  <GlobalProvider>
    <BrowserRouter>
      <div className='App'>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />

        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  </GlobalProvider>
  );
}


export default App;