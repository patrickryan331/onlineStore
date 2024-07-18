import {useState} from 'react';
import "./styles/quantityPicker.css";

function QuantityPicker(props){
    const [quantity, setQuantity] = useState(1);

    function decrease(){
        console.log("Decrease button clicked");
        if(quantity <= 0) return;  // Stop decrease if quantity is 0 or less
        let val = quantity - 1;
        setQuantity(val);
        props.onChange(val);
    }

    function increase(){
        console.log("Increase button clicked");
        let val = quantity + 1;
        setQuantity(val);
        props.onChange(val);
    }


        return (
            <div className="qt-picker">
                <button className='btn btn-outline-primary' disabled={quantity === 0} onClick={decrease}><i class="fa-solid fa-minus"></i></button>
                <label>{quantity}</label>
                <button className='btn btn-outline-primary' onClick={increase}><i class="fa-solid fa-plus"></i></button>
            </div>
        )
}


export default QuantityPicker; 