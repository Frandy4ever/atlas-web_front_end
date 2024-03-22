const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

// Check if session storage is available
function isSessionStorageAvailable() {
    try {
        const testKey = '__test__';
        sessionStorage.setItem(testKey, testKey);
        sessionStorage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
}

function getCartFromStorage() {
    const cartString = sessionStorage.getItem('cart');
    return cartString ? JSON.parse(cartString) : {};
}

function addItemToCart(item) {
    const cart = getCartFromStorage();
    cart[item] = cart[item] ? cart[item] + 1 : 1;
    sessionStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function removeItemFromCart(item) {
    const cart = getCartFromStorage();
    delete cart[item];
    sessionStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function clearCart() {
    sessionStorage.removeItem('cart');
    displayCart();
}

function createStore() {
    const productList = document.getElementById('product-list');
    availableItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.addEventListener('click', () => addItemToCart(item));
        productList.appendChild(listItem);
    });
}

function displayCart() {
    const cart = getCartFromStorage();
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    const ul = document.createElement('ul');

    if (Object.keys(cart).length === 0) {
        const emptyCart = document.createElement('li');
        emptyCart.textContent = 'Your cart is empty';
        ul.appendChild(emptyCart);
    } else {
        for (const item in cart) {
            const li = document.createElement('li');
            li.textContent = `${item} x ${cart[item]}`;
            const removeButton = document.createElement('button');
            removeButton.textContent = '(remove)';
            removeButton.addEventListener('click', () => removeItemFromCart(item));
            li.appendChild(removeButton);
            ul.appendChild(li);
        }
    }

    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear my cart';
    clearButton.addEventListener('click', clearCart);
    ul.appendChild(clearButton);

    cartElement.appendChild(ul);
}

// Check session storage availability and initialize the app
if (isSessionStorageAvailable()) {
    createStore();
    displayCart();
} else {
    alert('Sorry, your browser does not support Session storage. Try again with a better one.');
}
