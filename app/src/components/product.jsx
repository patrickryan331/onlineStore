import  { useState } from 'react';
import QuantityPicker from "./quantityPicker";
import "./styles/product.css";

function Product(props){

    const [quantity, setQuantity] = useState(0);

    function add(){
        console.log("adding " + props.info.title);
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