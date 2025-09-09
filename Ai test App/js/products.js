// Product data array - all products stored here
const products = [
    // Laptops
    {
        id: 1,
        name: "MacBook Pro 16-inch",
        category: "laptops",
        price: 2499.00,
        image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800",
        shortDescription: "Powerful laptop with M2 Pro chip, perfect for professionals and creators.",
        fullDescription: "The MacBook Pro 16-inch with M2 Pro chip delivers exceptional performance for professional workflows. Features a stunning Liquid Retina XDR display, up to 22 hours of battery life, and an advanced camera and audio system. Perfect for video editing, 3D rendering, and complex computational tasks. Includes 16GB unified memory and 512GB SSD storage.",
        inStock: true
    },
    {
        id: 2,
        name: "Dell XPS 13 Plus",
        category: "laptops",
        price: 1299.00,
        image: "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=800",
        shortDescription: "Ultra-thin laptop with stunning 13.4-inch display and premium build quality.",
        fullDescription: "The Dell XPS 13 Plus redefines premium laptop design with its edge-to-edge keyboard, seamless glass touchpad, and stunning 13.4-inch InfinityEdge display. Powered by 12th Gen Intel Core processors and featuring premium materials throughout. Perfect for professionals who demand both style and performance. Includes 16GB RAM and 512GB SSD.",
        inStock: true
    },
    {
        id: 3,
        name: "Gaming Laptop ROG Strix",
        category: "laptops",
        price: 1899.00,
        image: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=800",
        shortDescription: "High-performance gaming laptop with RTX graphics and RGB lighting.",
        fullDescription: "The ASUS ROG Strix gaming laptop delivers ultimate gaming performance with NVIDIA RTX 4060 graphics, AMD Ryzen 7 processor, and a blazing-fast 144Hz display. Features advanced cooling technology, customizable RGB lighting, and premium audio. Perfect for competitive gaming and content creation. Includes 16GB DDR5 RAM and 1TB NVMe SSD.",
        inStock: true
    },

    // Phones
    {
        id: 4,
        name: "iPhone 15 Pro",
        category: "phones",
        price: 999.00,
        image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800",
        shortDescription: "Latest iPhone with titanium design, A17 Pro chip, and advanced camera system.",
        fullDescription: "The iPhone 15 Pro features a stunning titanium design that's both lightweight and durable. Powered by the groundbreaking A17 Pro chip for incredible performance and efficiency. The advanced triple-camera system with 48MP main camera captures stunning photos and 4K videos. Features Action Button, USB-C connectivity, and up to 23 hours of video playback. Available in multiple premium colors.",
        inStock: true
    },
    {
        id: 5,
        name: "Samsung Galaxy S24 Ultra",
        category: "phones",
        price: 1199.00,
        image: "https://images.pexels.com/photos/165888/mobile-phone-android-apps-165888.jpeg?auto=compress&cs=tinysrgb&w=800",
        shortDescription: "Flagship Android phone with S Pen, quad camera system, and 6.8-inch display.",
        fullDescription: "The Samsung Galaxy S24 Ultra is the ultimate Android flagship featuring a built-in S Pen for productivity and creativity. Boasts a massive 6.8-inch Dynamic AMOLED 2X display, quad-camera system with 200MP main sensor, and all-day battery life. Powered by Snapdragon 8 Gen 3 processor with advanced AI capabilities. Perfect for power users who demand the best Android experience.",
        inStock: true
    },
    {
        id: 6,
        name: "Google Pixel 8",
        category: "phones",
        price: 699.00,
        image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800",
        shortDescription: "Pure Android experience with advanced AI photography and Google integration.",
        fullDescription: "The Google Pixel 8 delivers the purest Android experience with cutting-edge AI photography features. Features Google's custom Tensor G3 chip, computational photography that makes every shot perfect, and seamless integration with Google services. The 6.2-inch Actua display is bright and vibrant, while the dual-camera system captures incredible photos in any lighting condition. Includes 7 years of OS and security updates.",
        inStock: true
    },

    // Accessories
    {
        id: 7,
        name: "AirPods Pro (3rd Gen)",
        category: "accessories",
        price: 249.00,
        image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
        shortDescription: "Premium wireless earbuds with active noise cancellation and spatial audio.",
        fullDescription: "The AirPods Pro (3rd Generation) feature advanced active noise cancellation, transparency mode, and personalized spatial audio for an immersive listening experience. The H2 chip delivers improved audio quality and longer battery life. Includes four sizes of silicone tips for a comfortable, secure fit. Features touch control, wireless charging case, and seamless integration with all Apple devices.",
        inStock: true
    },
    {
        id: 8,
        name: "Mechanical Gaming Keyboard",
        category: "accessories",
        price: 159.00,
        image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=800",
        shortDescription: "RGB mechanical keyboard with Cherry MX switches and programmable keys.",
        fullDescription: "Professional gaming mechanical keyboard featuring genuine Cherry MX Red switches for lightning-fast response and smooth keystrokes. Per-key RGB backlighting with multiple lighting effects and zones. Durable aluminum frame construction with detachable USB-C cable. Includes programmable macro keys, media controls, and comfortable wrist rest. Compatible with all major operating systems and gaming software.",
        inStock: true
    },
    {
        id: 9,
        name: "4K Webcam Pro",
        category: "accessories",
        price: 199.00,
        image: "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=800",
        shortDescription: "Professional 4K webcam with autofocus and noise-canceling microphone.",
        fullDescription: "Professional-grade 4K webcam perfect for content creation, streaming, and video conferencing. Features advanced autofocus, automatic light correction, and a built-in noise-canceling microphone. The wide-angle lens captures more of your workspace while maintaining crystal-clear image quality. Works seamlessly with all major streaming and video calling platforms. Includes adjustable mount and privacy shutter.",
        inStock: true
    },
    {
        id: 10,
        name: "Wireless Charging Pad",
        category: "accessories",
        price: 49.00,
        image: "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=800",
        shortDescription: "Fast wireless charging pad compatible with all Qi-enabled devices.",
        fullDescription: "Sleek wireless charging pad that delivers fast, efficient charging for all Qi-enabled devices. Features LED indicators to show charging status, over-temperature protection, and foreign object detection. The non-slip surface keeps your device secure while charging. Compatible with phones, earbuds, and other wireless charging accessories. Includes USB-C cable and supports charging through cases up to 5mm thick.",
        inStock: true
    },
    {
        id: 11,
        name: "Bluetooth Gaming Mouse",
        category: "accessories",
        price: 89.00,
        image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=800",
        shortDescription: "Precision gaming mouse with customizable RGB lighting and programmable buttons.",
        fullDescription: "High-performance wireless gaming mouse with precision sensor up to 25,600 DPI for ultimate accuracy. Features 11 programmable buttons, customizable RGB lighting with multiple zones, and ultra-fast wireless connectivity. Ergonomic design ensures comfort during extended gaming sessions. Includes wireless charging dock, adjustable weight system, and gaming software for button mapping and lighting customization.",
        inStock: true
    },
    {
        id: 12,
        name: "Portable SSD 2TB",
        category: "accessories",
        price: 299.00,
        image: "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=800",
        shortDescription: "Ultra-fast portable SSD with 2TB capacity and USB-C connectivity.",
        fullDescription: "Ultra-portable external SSD with massive 2TB capacity and blazing-fast transfer speeds up to 1,050 MB/s. Features durable aluminum construction, shock and vibration resistance, and USB-C connectivity with included USB-A adapter. Perfect for photographers, videographers, and content creators who need reliable, fast storage on the go. Includes encryption software and 5-year limited warranty.",
        inStock: true
    }
];

// Function to get all products
function getAllProducts() {
    return products;
}

// Function to get products by category
function getProductsByCategory(category) {
    if (category === 'all') {
        return products;
    }
    return products.filter(product => product.category === category);
}

// Function to get a single product by ID
function getProductById(id) {
    console.log('Looking for product with ID:', id, 'Type:', typeof id);
    const numericId = parseInt(id);
    console.log('Converted to numeric ID:', numericId);
    const found = products.find(product => {
        console.log('Checking product:', product.id, 'Type:', typeof product.id);
        return product.id === numericId;
    });
    console.log('Found product:', found);
    return found;
}

// Function to display products on the products page
function displayProducts(productsToShow = products) {
    const container = document.getElementById('products-container');
    if (!container) return;

    container.innerHTML = '';

    if (productsToShow.length === 0) {
        container.innerHTML = '<p class="text-center">No products found in this category.</p>';
        return;
    }

    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

// Function to create a product card element
function createProductCard(product) {
    const card = document.createElement('a');
    card.href = `product.html?id=${product.id}`;
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.shortDescription}</p>
            <div class="product-price">$${product.price.toFixed(2)}</div>
        </div>
    `;
    return card;
}

// Function to set up product filtering
function setupProductFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category and filter products
            const category = this.getAttribute('data-category');
            const filteredProducts = getProductsByCategory(category);
            displayProducts(filteredProducts);
        });
    });
}

// Function to load and display product details
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (!productId) {
        document.getElementById('product-content').innerHTML = 
            '<p class="text-center">Product not found.</p>';
        return;
    }
    
    const product = getProductById(productId);
    
    if (!product) {
        document.getElementById('product-content').innerHTML = 
            '<p class="text-center">Product not found.</p>';
        return;
    }
    
    // Save as recently viewed
    saveRecentlyViewed(product);
    
    // Display product details
    displayProductDetails(product);
    
    // Load existing reviews
    loadProductReviews(productId);
}

// Function to display product details
function displayProductDetails(product) {
    const content = document.getElementById('product-content');
    content.innerHTML = `
        <div class="product-detail-content">
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-detail-info">
                <div class="product-detail-category">${product.category}</div>
                <h1>${product.name}</h1>
                <div class="product-detail-price">$${product.price.toFixed(2)}</div>
                <div class="product-detail-description">
                    <p>${product.fullDescription}</p>
                </div>
                <button class="btn btn-primary btn-large" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

// Function to save recently viewed product
function saveRecentlyViewed(product) {
    localStorage.setItem('recentlyViewed', JSON.stringify(product));
}

// Function to display recently viewed product on homepage
function displayRecentlyViewed() {
    const container = document.getElementById('recently-viewed-content');
    if (!container) return;
    
    const recentProduct = JSON.parse(localStorage.getItem('recentlyViewed'));
    
    if (!recentProduct) {
        container.innerHTML = '<p class="no-recent">No recently viewed products yet. <a href="products.html">Browse our products</a> to get started!</p>';
        return;
    }
    
    container.innerHTML = `
        <div class="recent-product">
            <img src="${recentProduct.image}" alt="${recentProduct.name}">
            <h3>${recentProduct.name}</h3>
            <p>${recentProduct.shortDescription}</p>
            <div class="price">$${recentProduct.price.toFixed(2)}</div>
            <a href="product.html?id=${recentProduct.id}" class="btn btn-primary">View Details</a>
        </div>
    `;
}

// Function to setup review form
function setupReviewForm() {
    const reviewForm = document.getElementById('review-form');
    if (!reviewForm) return;
    
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        
        const formData = new FormData(reviewForm);
        const review = {
            id: Date.now(), // Simple ID generation
            productId: productId,
            name: formData.get('name'),
            rating: parseInt(formData.get('rating')),
            comment: formData.get('comment'),
            date: new Date().toLocaleDateString()
        };
        
        // Save review to localStorage
        saveReview(review);
        
        // Reload reviews display
        loadProductReviews(productId);
        
        // Reset form
        reviewForm.reset();
        
        // Show success message
        alert('Thank you for your review!');
    });
}

// Function to save review
function saveReview(review) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

// Function to load and display product reviews
function loadProductReviews(productId) {
    const reviewsContainer = document.getElementById('reviews-container');
    if (!reviewsContainer) return;
    
    const allReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const productReviews = allReviews.filter(review => review.productId === productId);
    
    if (productReviews.length === 0) {
        reviewsContainer.innerHTML = '<p class="no-reviews">No reviews yet. Be the first to review this product!</p>';
        return;
    }
    
    reviewsContainer.innerHTML = '';
    productReviews.forEach(review => {
        const reviewElement = createReviewElement(review);
        reviewsContainer.appendChild(reviewElement);
    });
}

// Function to create review element
function createReviewElement(review) {
    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'review-item';
    
    // Create star rating display
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    
    reviewDiv.innerHTML = `
        <div class="review-header">
            <span class="review-author">${review.name}</span>
            <span class="review-rating">${stars} (${review.rating}/5)</span>
            <span class="review-date">${review.date}</span>
        </div>
        <div class="review-comment">${review.comment}</div>
    `;
    
    return reviewDiv;
}