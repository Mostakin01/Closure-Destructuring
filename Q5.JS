const shoppingCart = () => {
    const cartItems = [];

    const addItem = (product) => {
        cartItems.push(product);
    };

    const getCartItems = () => {
        return cartItems;
    };

    const removeItem = (productId) => {
        const index = cartItems.findIndex(item => item.id === productId);
        if(index !== -1) {
            cartItems.splice(index, 1);
        }
    };

    return { addItem, getCartItems, removeItem };
};

const cart = shoppingCart();

cart.addItem({ id: 1, name: 'Product 1', price: 10 });
cart.addItem({ id: 2, name: 'Product 2', price: 20 });

console.log('Cart Items:', cart.getCartItems());

cart.removeItem(2);

console.log('Cart Items:', cart.getCartItems());
