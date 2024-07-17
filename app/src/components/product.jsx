import  { useContext, useState } from 'react';
import QuantityPicker from "./quantityPicker";
import "./styles/product.css";
import DataContext from '../state/datacontext';

function Product(props){
    const [quantity, setQuantity] = useState(1);

    let addProductToCart = useContext(DataContext).addProductToCart;

    function add(){
        // obj that contains all info + quantity
        let cartQuantity = {
            ...props.info,
            quantity: quantity,  // add quantity to the object
        };
        
        addProductToCart(cartQuantity);  // call context functions to add
    }

    function handleQuantityChange(val) {
        console.log('testing value', val);
        setQuantity(val);
    }

    function getTotal() {
        let total = props.info.price * quantity;
        return total.toFixed(2);
    }


    return(
        <div className="product">

            <img src={"/images/" + props.info.image} alt="" />

            <h5>{props.info.title}</h5>

            <label>${props.info.price.toFixed(2)}</label>
            <label className="total">${getTotal()}</label>

            <div className="controls">
                <QuantityPicker onChange={handleQuantityChange} />


                <button  onClick={add} className="btn btn-sm btn-primary">Add to Cart  <i class="fa-solid fa-square-plus"></i></button>
            </div>
        </div>
    );
}







export default Product;