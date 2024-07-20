import './styles/cart.css'
import { useContext, useState } from 'react';
import DataContext from '../state/datacontext';


function Cart(props) {

    const cart = useContext(DataContext).cart;



        function getTotal() {
            let total = 0;
            for (let i = 0; i<cart.length; i++) {
                let prod = cart[i];
                total +=(prod.quantity * prod.price);
        }

        return total.toFixed(2);
    }


    return (
        <div className='cart page'>
            <h1>Eastern Shore Surf Shop</h1>
            <h1>Cart</h1>


            <div className='cartContainer'>
                <div className='cartList'>
                    
                    <h2>Your Items</h2>
                    <hr />
                        {cart.map(prod => 
                        <div className='cartProduct'>
                            <img src={"/images/" + prod.image} alt="" />
                            <h5> {prod.title} </h5>
                            <label>${prod.price} </label>
                            <label>x{prod.quantity} </label>
                            <h6 className='totalPrice'>$ {((prod.price) * (prod.quantity)).toFixed(2)} </h6>
                            <button className='btn btn-sm btn-danger deleteButton'>Remove</button>
                        </div>
                    )}



                </div>



                <div className='cartMenu'>
                    <h2>Subtotal</h2>
                    <h3>$ {getTotal()}</h3>

                    <hr />
                    <button className='btn btn-primary checkoutButton'>Checkout</button>
                    <hr />

                    <div className='paymentOptions'>
                    <h4>Payment Options</h4>
                    <i class="fa-brands fa-cc-visa"></i>  <i class="fa-brands fa-cc-mastercard"></i> <i class="fa-brands fa-cc-discover"></i> <i class="fa-brands fa-cc-apple-pay"></i> 
                    </div>


                </div>
            </div>



        </div>
    );
}




export default Cart;



