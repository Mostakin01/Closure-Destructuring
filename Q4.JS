function shoppingCart() {
    let cartItems = [];

    function addItems(product) {
        const existingProduct = cartItems.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            product.quantity = 1;
            cartItems.push(product);
        }
    }

    function getCartItems() {
        return cartItems;
    }

    return { 
        addItems, 
        getCartItems 
    };
}

const cart = shoppingCart();

const product1 = { id: 1, name: 'Product 1', price: 10 };
const product2 = { id: 2, name: 'Product 2', price: 20 };

cart.addItems(product1);
cart.addItems(product2);
cart.addItems(product1);

console.log('Cart Items:', cart.getCartItems());
