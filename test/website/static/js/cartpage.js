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
