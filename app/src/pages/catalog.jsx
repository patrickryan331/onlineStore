import './styles/catalog.css';
import Product from '../components/product';
import { useEffect, useState } from 'react';
import dataservice from '../services/dataservice';



function Catalog(){ 
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    // do something when the component loads
    useEffect( function() {

        const prods = dataservice.getProducts();
        setProducts(prods);

        const cats = dataservice.getCategories();
        setCategories(cats);

    }, 
    []);


    return(
        <div className='catalog page'>
            <h1>Eastern Shore Surf Shop</h1>
        
            <div className='filterButton'>
            {categories.map(cat => <button className='catButton'>{cat}</button>)}
        </div>
        
            {products.map(prod => <Product info={prod} />)}


        </div>
    );

}


export default Catalog;