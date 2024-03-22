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

function addItemToCart(item) {
    sessionStorage.setItem(item, 'true');
    displayCart();
}

function createStore() {
    const ul = document.createElement('ul');
    availableItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.addEventListener('click', () => addItemToCart(item));
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

function displayCart() {
    const cartItemsCount = Object.keys(sessionStorage).length;
    if (cartItemsCount > 0) {
        const message = `You previously had ${cartItemsCount} item${cartItemsCount > 1 ? 's' : ''} in your cart`;
        const p = document.createElement('p');
        p.textContent = message;
        document.body.appendChild(p);
    }
}

// Check session storage availability and initialize the app
if (isSessionStorageAvailable()) {
    createStore();
    displayCart();
} else {
    alert('Sorry, your browser does not support Session storage. Try again with a better one.');
}
