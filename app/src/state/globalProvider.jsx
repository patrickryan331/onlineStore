import DataContext from "./datacontext";
import { useState } from 'react';


function GlobalProvider(props) {

    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({name: 'Patrick'});

    function addProductToCart(product) {
        console.log("Adding product to cart");


        var copy = [...cart];

            let found = false;
            for (var i = 0; i < copy.length; i++) {
                let prod = copy[i];

                if(prod._id == product._id) {
                    prod.quantity += product.quantity;
                    found =  true;
                }
            }
            if(!found) {
                copy.push(product);
            }
            

        setCart(copy);

    }

    function resetCart() {
    }



    return (
        <DataContext.Provider 
            value={{
                cart: cart,
                user: user,
                addProductToCart: addProductToCart,
                resetCart: resetCart,
            }}>
                {props.children}
        </DataContext.Provider>
    );
}


export default GlobalProvider;