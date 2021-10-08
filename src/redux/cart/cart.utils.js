export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    //If the cart item does exist in the cart, increase its quantity.
    if(existingCartItem){
        return cartItems.map( cartItem =>
            cartItem.id === cartItemToAdd.id ?
            {... cartItem, quantity: cartItem.quantity + 1} :
            cartItem
        );
    }

    //if the cart item is new then just add it to the cart with default quantity of 1.
    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}