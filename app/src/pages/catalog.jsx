import './styles/catalog.css';
import Product from '../components/product';
import { useEffect, useState } from 'react';
import dataservice from '../services/dataservice';



function Catalog(){ 
    const [products, setProducts ] = useState([])
    const [categories, setCategories] = useState([])

    // do something when the component loads
    useEffect(function() {

        // const prods = dataservice.getProducts();
        // setProducts(prods);
        loadCatalog();
        loadCategories();

        // const cats = dataservice.getCategories();
        // setCategories(cats);

    }, 
    []);


    async function loadCatalog() {
        // fetch data from server and set products

        let prods = await dataservice.getProducts();
        setProducts(prods)
        console.log(prods);
    };


    async function loadCategories() {

        let cats = await dataservice.getCategories();
        setCategories(cats)
        console.log(cats);
    }


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