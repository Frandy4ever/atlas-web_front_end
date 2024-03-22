const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

// Check if local storage is available
function isLocalStorageAvailable() {
    try {
        const testKey = '__test__';
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
}

function addItemToCart(item) {
    localStorage.setItem(item, 'true');
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
    const cartItemsCount = Object.keys(localStorage).length;
    if (cartItemsCount > 0) {
        const message = `You previously had ${cartItemsCount} item${cartItemsCount > 1 ? 's' : ''} in your cart`;
        const p = document.createElement('p');
        p.textContent = message;
        document.body.appendChild(p);
    }
}

// Check local storage availability and initialize the app
if (isLocalStorageAvailable()) {
    createStore();
    displayCart();
} else {
    alert('Sorry, your browser does not support Web storage. Try again with a better one.');
}
