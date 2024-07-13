import { useState } from 'react';
import './styles/admin.css';


function Admin() {

    const [product, setProduct] = useState({
        title: "",
        image: "",
        price: "",
        catagory: "",
    });

    const [coupon, setCoupon] = useState({
        code: '',
        discount: '',
    });

    function handleCoupon(e) {
        const text = e.target.value; // the value of the field
        const name = e.target.name; // what input field changed?
        
        // create a copy
        let copy = {...coupon};
        // modify the copy
        copy[name] = text;
        // set the copy back
        setCoupon(copy);
    }


    function handleProduct(e) {
        const text = e.target.value;
        const name = e.target.name;
        
        let copy = {...product};
        copy[name] = text;
        setProduct(copy);
    }



    function saveCoupon() {
        console.log(coupon);
    }

    function saveProduct() {
        console.log(product);
    }


    return (
        <div className='admin page'>
            <h1>Administration Page</h1>
            

                <div className='admin-container'>

                    <div className='sec-products'>
                        <h2>Products</h2>

                        <div className='form'>
                            <label className='form-label'>Title</label>
                            <input onBlur={handleProduct} name='title' type="text" className="form-control" />

                            <label className='form-label'>Image</label>
                            <input onBlur={handleProduct} name='image' type="file" className="form-control" />

                            <label className='form-label'>Price</label>
                            <input onBlur={handleProduct} name='price' type="number" className="form-control" />

                            <label className='form-label'>Catagory</label>
                            <select onBlur={handleProduct} className='form-select' name="catagory">
                            <option value="Surfboards">-- Choose a Catagory --</option>
                            <option value="Surfboards">Surfboard</option>
                            <option value="Surf Wax">Surf Wax</option>
                            <option value="Wetsuits">Wetsuit</option>
                            <option value="Accessories">Accessories</option>
                        </select>
                        </div>
                        <button  onClick={saveProduct} className="btn btn-primary">Save Product</button>

                    </div>




                    <div className='sec-coupons'>
                        <h2>Coupons</h2>

                            <div className='form'>

                                <div className='mb3'>
                                    <label className="form-label">Discount Code</label>
                                    <input onBlur={handleCoupon} name='code' type="text" className="form-control" />
                                </div>
                                <div>
                                    <label className="form-label">Discount Percentage %</label>
                                    <input onBlur={handleCoupon} name='discount' type="text" className="form-control" />
                                </div>

                                <button onClick={saveCoupon} className="btn btn-primary">Save Coupon</button>
                            </div>



                    </div>

                </div>





        </div>
    )
}

export default Admin;