import './styles/cart.css'
import { useContext } from 'react';
import DataContext from '../state/datacontext';


function Cart() {

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
            <h1>Cart</h1>


            <div className='cartContainer'>
                <div className='cartList'>
                    <h2>Cart List</h2>

                        {cart.map(prod => 
                        <div className='cartProduct'>
                            <img src={"/images/" + prod.image} alt="" />
                            <h5> {prod.title} </h5>
                            <label> {prod.quantity} </label>
                            <label> {prod.price} </label>
                            <label className='totalPrice'>$total$ </label>
                            <button className='btn btn-sm btn-danger deleteButton'>Remove</button>

                        </div>
                    )}



                </div>




                <div className='cartMenu'>
                    <h2>Total</h2>
                    <h3>{getTotal()}</h3>

                    <hr />
                    <button className='btn btn-primary checkoutButton'>Checkout</button>


                </div>
            </div>



        </div>
    );
}




export default Cart;