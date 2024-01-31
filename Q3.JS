function shoppingCart() {
    let cartItems = [];
    
    return {
        getCartItems: function() {
            return cartItems;
        },
        addItem: function(item) {
            cartItems.push(item);
        }
    };
}

const cart = shoppingCart();
cart.addItem("Apple");
cart.addItem("Banana");
console.log('Cart Items:', cart.getCartItems());
