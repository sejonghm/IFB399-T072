// Function to switch main product image
function changeImage(thumbnail) {
    const mainImage = document.querySelector('.main-product-img');
    mainImage.src = thumbnail.src; // Update the main image to the clicked thumbnail
}

// Function to increase or decrease quantity
function changeQuantity(amount) {
    const quantityInput = document.querySelector('.quantity-input');
    let currentQuantity = parseInt(quantityInput.value);

    // Prevent quantity from being less than 1
    if (currentQuantity + amount >= 1) {
        quantityInput.value = currentQuantity + amount;
    }
}

// Function to validate search input
function validateSearch() {
    const searchInput = document.querySelector('input[placeholder="Search"]').value;
    if (!searchInput) {
        alert('Please enter a search term!');
    } else {
        // You can handle search logic here, for example:
        console.log('Searching for:', searchInput);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for image thumbnails
    document.querySelectorAll('.thumbnail-img').forEach(img => {
        img.addEventListener('click', () => changeImage(img));
    });

    // Add event listeners for quantity buttons
    document.querySelectorAll('.select-quantity-btn').forEach(button => {
        button.addEventListener('click', () => {
            const amount = button.textContent === '+' ? 1 : -1;
            changeQuantity(amount);
        });
    });

    // Add event listener for search input
    document.querySelector('input[placeholder="Search"]').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            validateSearch();
        }
    });
});

// Function to handle Add to Cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const productId = this.getAttribute('data-id');
        const productName = this.getAttribute('data-product');
        const productColor = this.getAttribute('data-color');
        
        // Get current cart data from localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Check if item is already in the cart
        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            // Increase quantity if item already exists
            existingItem.quantity += 1;
        } else {
            // Add new item to the cart
            cart.push({
                id: productId,
                name: productName,
                color: productColor,
                quantity: 1
            });
        }

        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(productName + " added to cart!");
    });
});
