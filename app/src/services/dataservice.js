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
        "_id": "8uhh5gj"
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
        "_id": "o8usgj"
    },
    {
        "title": "Long Board 10'0",
        "price": 1299.99,
        "catagory": "Surfboards",
        "image": "product6.jpg",
        "_id": "88iugj"
    },
    {
        "title": "Sticky Bumps 6 pack",
        "price": 19.99,
        "catagory": "Surf Wax",
        "image": "wax1sticky.jpg",
        "_id": "y6f4gj"
    },
    {
        "title": "Mr Zoggs 6 pack",
        "price": 24.99,
        "catagory": "Surf Wax",
        "image": "wax2mrzog.jpg",
        "_id": "829kus"
    },
    {
        "title": "Full Wetsuit",
        "price": 149.99,
        "catagory": "Wetsuits",
        "image": "wetsuitLong.jpg",
        "_id": "397hte"
    },
    {
        "title": "Short Wetsuit",
        "price": 99.99,
        "catagory": "Wetsuits",
        "image": "wetsuitShort.jpg",
        "_id": "4d7hvd"
    },
    {
        "title": "Wetsuit Hood",
        "price": 69.99,
        "catagory": "Wetsuits",
        "image": "wetsuitHood.jpeg",
        "_id": "398j5d"
    },
    {
        "title": "Wetsuit Booties",
        "price": 59.99,
        "catagory": "Wetsuits",
        "image": "wetsuitBooties.jpeg",
        "_id": "39gh4e"
    },
    {
        "title": "Surfboard Leash Blue",
        "price": 39.99,
        "catagory": "Accessories",
        "image": "leash.jpeg",
        "_id": "0oj6vd"
    },
    {
        "title": "Surfboard Leash",
        "price": 29.99,
        "catagory": "Accessories",
        "image": "leash2.jpg",
        "_id": "djsrvd"
    },
    {
        "title": "Surfboard Pad",
        "price": 29.99,
        "catagory": "Accessories",
        "image": "pad.jpeg",
        "_id": "3snbvd"
    },
    {
        "title": "Surfboard Pad Red",
        "price": 39.99,
        "catagory": "Accessories",
        "image": "pad2.jpeg",
        "_id": "d9dvd"
    },
    {
        "title": "Surfboard Fins Quad",
        "price": 79.99,
        "catagory": "Accessories",
        "image": "fins1.jpg",
        "_id": "3f7fvd"
    },
    {
        "title": "Surfboard Fins Tri",
        "price": 89.99,
        "catagory": "Accessories",
        "image": "fins2.jpg",
        "_id": "237avd"
    },
    {
        "title": "Surfboard Padded Bag",
        "price": 99.99,
        "catagory": "Accessories",
        "image": "bag.jpg",
        "_id": "fh7sky"
    },
    {
        "title": "Surfboard Sock",
        "price": 59.99,
        "catagory": "Accessories",
        "image": "sock.jpg",
        "_id": "k8hcd3"
    },
];


class DataService {

    getProducts() {
    // call the server and get the products
        return data;


    }



    getCategories() {
    // call the server and get the categories
        return catagories;


    }


}


export default new DataService();