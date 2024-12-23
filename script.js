let cart = [];

function showProducts(category) {
    const container = document.getElementById('products-container');
    container.innerHTML = ''; // Clear existing content
    products[category].forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        
        // Generate buttons for each size
        const sizeButtons = product.size.map(size => {
            return `<button class="size-btn">${size}</button>`;
        }).join(''); // Join all the buttons as a single string
        
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <p><strong>${product.name}</strong></p>
            <p>Price: ${product.price}</p>
            <p>Rating: ${getStars(product.rating)}</p>
            <p>Size: ${sizeButtons}</p> <!-- Added size buttons here -->
            <button class="add-to-cart" onclick="addToCart('${product.name}', '${product.price}')">Add to Cart</button>
        `;
        container.appendChild(productDiv);
    });
}

function getStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '★' : '☆';
    }
    return stars;
}

function addToCart(productName, productPrice) {
    // Create a product object to add to the cart
    const product = { name: productName, price: productPrice };

    // Add the product to the cart array
    cart.push(product);

    // Display an alert or a message
    alert(`${productName} added to cart for ${productPrice}`);
    
    // Optionally, update the cart display
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-container');
    
    // Clear the existing cart display
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        // Loop through the cart and display each item
        cart.forEach(product => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <p><strong>${product.name}</strong></p>
                <p>Price: ${product.price}</p>
            `;
            cartContainer.appendChild(cartItem);
        });

        // Optionally, show the total price
        const totalPrice = cart.reduce((total, product) => total + parseFloat(product.price.replace('RS ', '').replace('$', '')), 0);
        const totalElement = document.createElement('div');
        totalElement.className = 'cart-total';
        totalElement.innerHTML = `<p>Total Price: RS ${totalPrice}</p>`;
        cartContainer.appendChild(totalElement);
    }
}
