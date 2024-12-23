// Function to load cart items
function loadCart() {
    // Fetch cart data from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Clear the cart container
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty!</p>';
        totalPriceElement.textContent = 'RS 0';
        return;
    }

    // Initialize total price
    let totalPrice = 0;

    // Render each cart item
    cart.forEach((item, index) => {
        totalPrice += parseFloat(item.price.replace('RS ', '')); // Extract numeric value and sum

        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';

        cartItemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <p><strong>${item.name}</strong></p>
                <p>Price: ${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });

    // Update total price
    totalPriceElement.textContent = `RS ${totalPrice.toFixed(2)}`;

}

// Function to remove an item from the cart
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove the item at the given index
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart
    loadCart(); // Refresh the cart display
}

// Function to handle checkout
function checkout() {
    alert('Proceeding to checkout...');
    // Additional checkout logic can be added here
}

// Load cart on page load
document.addEventListener('DOMContentLoaded', loadCart);