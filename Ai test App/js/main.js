// Main JavaScript file for shared functionality

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    setupMobileNavigation();
});

// Mobile navigation functionality
function setupMobileNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Cart functionality
function addToCart(productId) {
    console.log('addToCart called with productId:', productId, 'Type:', typeof productId);
    
    const product = getProductById(productId);
    console.log('Retrieved product:', product);
    
    if (!product) {
        console.error('Product not found for ID:', productId);
        alert('Product not found!');
        return;
    }
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Current cart:', cart);
    
    // Check if product already exists in cart
    const existingItem = cart.find(item => item.id === productId);
    console.log('Existing item in cart:', existingItem);
    
    if (existingItem) {
        existingItem.quantity += 1;
        console.log('Updated existing item quantity:', existingItem.quantity);
    } else {
        const newItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: 1
        };
        console.log('Adding new item to cart:', newItem);
        cart.push(newItem);
    }
    
    console.log('Cart before saving:', cart);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Cart saved to localStorage');
    
    updateCartCount();
    console.log('Cart count updated');
    
    // Show success message
    const button = event.target;
    const originalText = button.textContent;
    const originalColor = button.style.backgroundColor;
    
    button.textContent = 'Added to Cart!';
    button.style.backgroundColor = 'var(--success-color)';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = originalColor;
        button.disabled = false;
    }, 1500);
    
    console.log('Success feedback shown');
}

// Function to remove item from cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Refresh cart display and update count
    updateCartCount();
    displayCart();
}

// Function to update item quantity in cart
function updateCartQuantity(productId, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        // Remove item if quantity becomes 0
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        displayCart();
    }
}

// Function to update cart count in navigation
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
        element.style.display = totalItems > 0 ? 'inline' : 'none';
    });
}

// Function to display cart contents
function displayCart() {
    const cartContent = document.getElementById('cart-content');
    const cartSummary = document.getElementById('cart-summary');
    
    console.log('displayCart called');
    console.log('cartContent element:', cartContent);
    console.log('cartSummary element:', cartSummary);
    
    if (!cartContent) return;
    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Cart contents for display:', cart);
    
    if (cart.length === 0) {
        console.log('Cart is empty, showing empty message');
        cartContent.innerHTML = `
            <div class="empty-cart">
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added anything to your cart yet.</p>
                <a href="products.html" class="btn btn-primary">Start Shopping</a>
            </div>
        `;
        
        if (cartSummary) {
            cartSummary.style.display = 'none';
        }
        return;
    }
    
    console.log('Displaying cart items');
    // Display cart items
    let cartHTML = '<div class="cart-items">';
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        console.log('Processing cart item:', item, 'Item total:', itemTotal);
        
        cartHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p>Category: ${item.category}</p>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `;
    });
    
    cartHTML += '</div>';
    cartContent.innerHTML = cartHTML;
    console.log('Cart HTML updated');
    
    // Update cart summary
    if (cartSummary) {
        cartSummary.style.display = 'block';
        document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('cart-total').textContent = `$${subtotal.toFixed(2)}`;
        console.log('Cart summary updated, subtotal:', subtotal);
    }
}

// Function to simulate checkout process
function simulateCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Simulate checkout process
    const confirmPurchase = confirm(`Complete purchase for $${total.toFixed(2)}?`);
    
    if (confirmPurchase) {
        // Clear cart
        localStorage.removeItem('cart');
        updateCartCount();
        
        // Show success message
        alert('Thank you for your purchase! Your order has been placed.');
        
        // Redirect to homepage
        window.location.href = 'index.html';
    }
}

// Function to get cart total
function getCartTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Function to get cart item count
function getCartItemCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Function to clear entire cart
function clearCart() {
    const confirmClear = confirm('Are you sure you want to clear your entire cart?');
    
    if (confirmClear) {
        localStorage.removeItem('cart');
        updateCartCount();
        displayCart();
        alert('Cart cleared successfully!');
    }
}

// Utility function to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Function to handle search functionality (if implemented)
function searchProducts(query) {
    const allProducts = getAllProducts();
    return allProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
}

// Function to sort products
function sortProducts(products, sortBy) {
    const sortedProducts = [...products];
    
    switch(sortBy) {
        case 'price-low':
            return sortedProducts.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sortedProducts.sort((a, b) => b.price - a.price);
        case 'name':
            return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        case 'category':
            return sortedProducts.sort((a, b) => a.category.localeCompare(b.category));
        default:
            return sortedProducts;
    }
}

// Function to get product statistics
function getProductStats() {
    const products = getAllProducts();
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    return {
        totalProducts: products.length,
        totalCategories: [...new Set(products.map(p => p.category))].length,
        cartItems: cart.length,
        averagePrice: products.reduce((sum, p) => sum + p.price, 0) / products.length
    };
}

// Function to export cart data (for potential future use)
function exportCartData() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const dataStr = JSON.stringify(cart, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'cart-data.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// Function to handle form validation
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'var(--error-color)';
            isValid = false;
        } else {
            input.style.borderColor = 'var(--border-color)';
        }
    });
    
    return isValid;
}

// Function to show loading state
function showLoading(element) {
    const originalContent = element.innerHTML;
    element.innerHTML = '<span>Loading...</span>';
    element.disabled = true;
    
    return () => {
        element.innerHTML = originalContent;
        element.disabled = false;
    };
}

// Function to handle errors gracefully
function handleError(error, userMessage = 'An error occurred. Please try again.') {
    console.error('Error:', error);
    alert(userMessage);
}

// Function to debounce function calls (useful for search)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize any global event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading states to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Skip for navigation links
            if (this.tagName === 'A' && this.getAttribute('href')) {
                return;
            }
            
            // Add loading class temporarily
            this.classList.add('loading');
            setTimeout(() => {
                this.classList.remove('loading');
            }, 500);
        });
    });
});

// Export functions for use in other files (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addToCart,
        removeFromCart,
        updateCartQuantity,
        updateCartCount,
        displayCart,
        simulateCheckout,
        getCartTotal,
        getCartItemCount,
        clearCart,
        formatCurrency,
        searchProducts,
        sortProducts,
        getProductStats,
        validateForm,
        showLoading,
        handleError,
        debounce
    };
}