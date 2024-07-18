import './styles/catalog.css';
import Product from '../components/product';

const catagories = [  'Surfboards', 'Surf Wax', 'Wetsuits', 'Accessories']

const data = [
    {
        "title": "Short Board 5'11",
        "price": 499.99,
        "catagory": "Surfboards",
        "image": "product1.jpg",
        "_id": "123abc"
    },
    {
        "title": "Short Board 6'5",
        "price": 549.99,
        "catagory": "Surfboards",
        "image": "product5.jpg",
        "_id": "853sgj"
    },
    {
        "title": "Fish Tail 7'5",
        "price": 575.99,
        "catagory": "Surfboards",
        "image": "product2.jpg",
        "_id": "456rty"
    },
    {
        "title": "Fun Board 8'0",
        "price": 799.99,
        "catagory": "Surfboards",
        "image": "product3.jpg",
        "_id": "789poy"
    },
    {
        "title": "Long Board 9'0",
        "price": 999.99,
        "catagory": "Surfboards",
        "image": "product4.jpg",
        "_id": "853sgj"
    },
    {
        "title": "Long Board 10'0",
        "price": 1299.99,
        "catagory": "Surfboards",
        "image": "product6.jpg",
        "_id": "853sgj"
    },
    {
        "title": "Sticky Bumps 6 pack",
        "price": 19.99,
        "catagory": "Surf Wax",
        "image": "wax1sticky.jpg",
        "_id": "853sgj"
    },
    {
        "title": "Mr Zoggs 6 pack",
        "price": 24.99,
        "catagory": "Surf Wax",
        "image": "wax2mrzog.jpg",
        "_id": "825fhs"
    },
    {
        "title": "Full Wetsuit",
        "price": 149.99,
        "catagory": "Wetsuits",
        "image": "wetsuitLong.jpg",
        "_id": "397kvd"
    },
    {
        "title": "Short Wetsuit",
        "price": 99.99,
        "catagory": "Wetsuits",
        "image": "wetsuitShort.jpg",
        "_id": "397kvd"
    },
    {
        "title": "Wetsuit Hood",
        "price": 69.99,
        "catagory": "Wetsuits",
        "image": "wetsuitHood.jpeg",
        "_id": "397kvd"
    },
    {
        "title": "Wetsuit Booties",
        "price": 59.99,
        "catagory": "Wetsuits",
        "image": "wetsuitBooties.jpeg",
        "_id": "397kvd"
    },
    {
        "title": "Surfboard Leash Blue",
        "price": 39.99,
        "catagory": "Accessories",
        "image": "leash.jpg",
        "_id": "397kvd"
    },
    {
        "title": "Surfboard Leash",
        "price": 29.99,
        "catagory": "Accessories",
        "image": "leash2.jpg",
        "_id": "397kvd"
    },
    {
        "title": "Surfboard Pad",
        "price": 29.99,
        "catagory": "Accessories",
        "image": "pad.jpeg",
        "_id": "397kvd"
    },
    {
        "title": "Surfboard Pad Red",
        "price": 39.99,
        "catagory": "Accessories",
        "image": "pad2.jpeg",
        "_id": "397kvd"
    },
    {
        "title": "Surfboard Fins Quad",
        "price": 79.99,
        "catagory": "Accessories",
        "image": "fins1.jpg",
        "_id": "397kvd"
    },
    {
        "title": "Surfboard Fins Tri",
        "price": 89.99,
        "catagory": "Accessories",
        "image": "fins2.jpg",
        "_id": "397kvd"
    },
];


function Catalog(){ 
    return(
        <div className='catalog page'>
            <h1>Eastern Shore Surf Shop</h1>
        
            <div className='filterButton'>
            {catagories.map(cat => <button className='catButton'>{cat}</button>)}
        </div>
        
            {data.map(prod => <Product info={prod} />)}


        </div>
    );

}


export default Catalog;