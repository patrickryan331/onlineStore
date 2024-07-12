import { useState } from 'react';
import './styles/admin.css';


function Admin() {

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



    return (
        <div className='admin'>
            <h1>Admin Page</h1>
            

                <div className='admin-container'>

                    <div className='sec-products'>
                        <h2>Products</h2>
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

                                <button className="btn btn-primary">Save Coupon</button>
                            </div>



                    </div>

                </div>





        </div>
    )
}

export default Admin;