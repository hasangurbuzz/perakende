export const getTotalPriceOfCart = (cart) => {
    let totalPrice = 0.0;
    for (let i = 0; i < cart.length; i++) {
        let currentItem = cart[i];
        let price = currentItem.product.price * currentItem.quantity;
        totalPrice += Number(price.toFixed(2));
    }
    return totalPrice;
}

export const addToCart = (cart, cartItem) => {

    for (let i = 0; i < cart.length; i++) {
        let currentItem = cart[i];
        if (currentItem.product.id === cartItem.product.id) {
            currentItem.quantity += cartItem.quantity
            cart[i] = currentItem;
            return [...cart];
        }
    }
    return [...cart, cartItem];
}

export const removeItemFromCart = (cart, cartItem) => {
    for (let i = 0; i < cart.length; i++) {
        let currentItem = cart[i];
        if (currentItem.product.id === cartItem.product.id) {
            if (currentItem.quantity > 1) {
                currentItem.quantity -= cartItem.quantity
                cart[i] = currentItem;
                return [...cart];
            } else {
                return cart.filter((item) => {
                    return item.product.id !== cartItem.product.id
                });
            }


        }
    }
}

export const getProductQuantityInCart = (cart, product) => {
    for (let i = 0; i < cart.length; i++) {
        let currentItem = cart[i];
        if (currentItem.product.id === product.id) {
            return currentItem.quantity;
        }
    }
}