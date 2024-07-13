import DataContext from "./datacontext";
import { useState } from 'react';


function GlobalProvider(props) {

    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({name: 'Patrick'});

    function addProductToCart() {
    }

    function resetCart() {
    }



    return (
        <DataContext.Provider value={{
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