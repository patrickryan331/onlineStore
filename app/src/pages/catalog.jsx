import './styles/catalog.css';
import Product from '../components/product';

const catagories = [  'Surfboard', 'Surf Wax', 'Wetsuit',]

const data = [
    {
        "title": "Short Board 5'11",
        "price": 499.99,
        "catagory": "surfboard",
        "image": "product1.webp",
        "_id": "123abc"
    },
    {
        "title": "Fish Tail 7'5",
        "price": 575.99,
        "catagory": "surfboard",
        "image": "product2.jpg",
        "_id": "456rty"
    },
    {
        "title": "Fun Board 8'0",
        "price": 799.99,
        "catagory": "surfboard",
        "image": "product3.webp",
        "_id": "789poy"
    },
    {
        "title": "Long Board 9'0",
        "price": 999.99,
        "catagory": "surfboard",
        "image": "product4.jpg",
        "_id": "853sgj"
    },
    {
        "title": "Sticky Bumps 6 pack",
        "price": 19.99,
        "catagory": "surf wax",
        "image": "wax1sticky.jpg",
        "_id": "853sgj"
    },
    {
        "title": "Mr Zoggs 6 pack",
        "price": 24.99,
        "catagory": "surf wax",
        "image": "wax2mrzog.jpg",
        "_id": "825fhs"
    },
    {
        "title": "Full Wetsuit",
        "price": 149.99,
        "catagory": "wetsuit",
        "image": "wetsuitLong.jpg",
        "_id": "397kvd"
    },
    {
        "title": "Short Wetsuit",
        "price": 99.99,
        "catagory": "wetsuit",
        "image": "wetsuitShort.jpg",
        "_id": "397kvd"
    },
];


function Catalog(){ 
    return(
        <div className='catalog'>
            <h1>Eastern Shore Surf Shop</h1>
        
            <div className='filterButton'>
            {/* {catagories.map(cat => <button className='btn btn-primary'>{cat}</button>)} */}
            {catagories.map(cat => <button className='catButton'>{cat}</button>)}
        </div>
        
            {data.map(prod => <Product info={prod} />)}


        </div>
    );

}


export default Catalog;