import React from "react";
import {Provider as ProductProvider} from './src/context/ProductContext'
import CustomNavigation from "./src/navigation/createNavigator";
import {Provider as CartProvider} from "./src/context/CartContext";

const App = () => {
    return (
        <ProductProvider>
            <CartProvider>
                <CustomNavigation/>
            </CartProvider>
        </ProductProvider>
    )
}

export default App;
