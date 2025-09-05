document.addEventListener('DOMContentLoaded', () => {
    // Define an array of product objects with mock data
    const products = [
        {
            id: 1,
            name: "Handmade Mug",
            price: 220.00,
            description: "A beautifully crafted ceramic mug, perfect for your morning coffee. Each mug is unique and hand-painted.",
            image: "https://www.homesake.in/cdn/shop/files/712Yu_xS36L._SX679.jpg?v=1747736673",
            category: "Home Goods",
            reviews: [
                { author: "Jane D.", text: "Love this mug! The quality is amazing." },
                { author: "Alex R.", text: "Looks even better in person. Great gift idea." }
            ]
        },
        {
            id: 2,
            name: "Organic Honey",
            price: 300.00,
            description: "Locally sourced, raw, and organic honey. Perfect for tea, toast, or a natural sweetener.",
            image: "https://media6.ppl-media.com/mediafiles/blogs/Honey_c6524912bd.PNG",
            category: "Food",
            reviews: [
                { author: "Sam P.", text: "The best honey I've ever tasted. So pure and delicious." }
            ]
        },
        {
            id: 3,
            name: "Artisanal Soap",
            price: 80.00,
            description: "Natural soap bar with lavender and oat. Gentle on the skin and has a calming scent.",
            image: "https://satopradhan.com/cdn/shop/files/Preview-1Almond_SheaSoap.jpg?v=1713608647",
            category: "Bath & Body",
            reviews: [
                { author: "Kelly J.", text: "My skin feels so soft after using this. Highly recommend!" }
            ]
        },
        {
            id: 4,
            name: "Leather Wallet",
            price: 600.00,
            description: "Slim, stylish, and durable wallet made from genuine leather. Features multiple card slots.",
            image: "https://urbanforest.co.in/cdn/shop/files/A7402041.jpg?v=1733571068",
            category: "Accessories",
            reviews: [
                { author: "Mark T.", text: "High quality and very practical. Exactly what I was looking for." },
                { author: "Laura B.", text: "Feels great in my hand. A bit pricey but worth it." }
            ]
        },
        {
            id: 5,
            name: "Hand-poured Candle",
            price: 250.00,
            description: "Soy wax candle with a subtle vanilla scent. Burns clean and has a long-lasting aroma.",
            image: "https://m.media-amazon.com/images/I/61EsuA7DE+L.jpg",
            category: "Home Goods",
            reviews: [
                { author: "Chris M.", text: "Love the scent. It's not overpowering at all." }
            ]
        },
        {
            id: 6,
            name: "Fresh Bread",
            price: 50.00,
            description: "A loaf of freshly baked artisan sourdough bread from a local bakery. No preservatives.",
            image: "https://www.rockrecipes.com/wp-content/uploads/2008/01/DSC_0221-4.jpg",
            category: "Food",
            reviews: []
        },
        {
            id: 7,
            name: "Wool Scarf",
            price: 550.00,
            description: "Warm and soft scarf made from 100% locally sourced wool. Perfect for chilly evenings.",
            image: "https://m.media-amazon.com/images/I/A1q3m2V-VJL._UY1100_.jpg",
            category: "Accessories",
            reviews: [
                { author: "Olivia S.", text: "So cozy! The color is beautiful too." }
            ]
        },
        {
            id: 8,
            name: "Lavender Sachet",
            price: 70.00,
            description: "Small sachet filled with dried lavender. Great for keeping clothes smelling fresh in a drawer.",
            image: "https://images.meesho.com/images/products/402507489/god7t_512.jpg",
            category: "Bath & Body",
            reviews: []
        },
        // New products added here
        {
            id: 9,
            name: "Notebook",
            price: 35.00,
            description: "A classic spiral notebook with a durable cover and college-ruled pages. Perfect for school or work.",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/2/383076536/VZ/LN/VQ/24391038/notebooks-500x500.jpg",
            category: "Stationery",
            reviews: []
        },
        {
            id: 10,
            name: "Ballpoint Pen (10-pack)",
            price: 45.00,
            description: "A pack of 10 smooth-writing ballpoint pens with black ink.",
            image: "https://scooboo.in/cdn/shop/files/pilot-bp-1-rt-fine-07mm-ball-point-pen-pack-of-20-ball-pen-scooboopilot89061689901651119-209235.jpg?v=1713584580&width=1214",
            category: "Stationery",
            reviews: [{ author: "David E.", text: "Great value for money, they write very well." }]
        },
        {
            id: 11,
            name: "Wooden Pencil (12-pack)",
            price: 25.00,
            description: "A pack of 12 standard No. 2 pencils with erasers. Ideal for drawing and writing.",
            image: "https://images-cdn.ubuy.co.in/64314929098a2f6cde2203e6-100-pieces-natural-wooden-pencils.jpg",
            category: "Stationery",
            reviews: []
        },
        {
            id: 12,
            name: "Basmati Rice (1kg)",
            price: 100.00,
            description: "High-quality, long-grain basmati rice. A staple for any kitchen.",
            image: "https://bsmedia.business-standard.com/_media/bs/img/article/2022-03/21/full/1647851191-8337.jpg",
            category: "Groceries",
            reviews: [{ author: "Priya K.", text: "Excellent quality and aroma. Perfect for biryani!" }]
        },
        {
            id: 13,
            name: "Assorted Biscuits",
            price: 55.00,
            description: "A variety pack of delicious biscuits. Great with tea or coffee.",
            image: "https://3.imimg.com/data3/GW/LB/MY-2651960/assorted-biscuits.jpg",
            category: "Snacks",
            reviews: [{ author: "Rahul S.", text: "My kids love this. A perfect afternoon snack." }]
        },
        {
            id: 14,
            name: "Potato Chips",
            price: 15.00,
            description: "Crispy and savory potato chips with a classic salted flavor.",
            image: "https://www.allrecipes.com/thmb/QO6I4DXnnrXZj1DjcOeRbFSmjk8=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/73135-homestyle-potato-chips-ddmfs-0348-3x4-hero-c21021303c8849bbb40c1007bfa9af6e.jpg",
            category: "Snacks",
            reviews: []
        },
        {
            id: 15,
            name: "Dried Lentils (500g)",
            price: 50.00,
            description: "Red lentils, a versatile pantry staple for soups and curries.",
            image: "https://thewonderfulworldofsprouts.com/wp-content/uploads/2023/11/7-Lentils.jpg",
            category: "Groceries",
            reviews: [{ author: "Sunita G.", text: "Cooks fast and tastes great. Highly recommend." }]
        },
        {
            id: 16,
            name: "Breakfast Cereal",
            price: 180.00,
            description: "A box of crunchy corn flakes. A healthy and quick breakfast option.",
            image: "https://5.imimg.com/data5/SF/MC/MY-2401161/breakfast-cereal.png",
            category: "Dry Food",
            reviews: []
        }
    ];

    let cart = []; // The shopping cart array
    const productsGrid = document.getElementById('products-grid');
    const cartCount = document.getElementById('cart-count');
    const cartIcon = document.getElementById('cart-icon');
    const cartModalOverlay = document.getElementById('cart-modal-overlay');
    const productModalOverlay = document.getElementById('product-modal-overlay');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    const sortSelect = document.getElementById('sort-select');
    const filterSelect = document.getElementById('filter-select');
    const reviewsContainer = document.getElementById('reviews-container');
    const reviewForm = document.getElementById('review-form');
    const trackOrderForm = document.getElementById('track-order-form');
    const contactForm = document.getElementById('contact-form');
    
    // Initial user reviews (mock data)
    const mockReviews = [
        { name: "John S.", text: "Great selection of local products! I love the fresh bread.", rating: 5 },
        { name: "Maria L.", text: "The wool scarf I bought is so soft and warm. Excellent quality.", rating: 5 },
        { name: "David M.", text: "Found a beautiful mug here. The details are amazing.", rating: 4 }
    ];

    // Get all page sections and nav links
    const pageSections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Function to display the correct section based on the URL hash
    const showSection = (hash) => {
        let sectionId = hash || '#home';
        if (!document.querySelector(sectionId)) {
            sectionId = '#home'; // Fallback to home if invalid hash
        }

        pageSections.forEach(section => {
            section.classList.remove('active');
        });
        document.querySelector(sectionId).classList.add('active');
    };

    // Add click event listeners to the navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const hash = link.getAttribute('href');
            history.pushState(null, '', hash);
            showSection(hash);
        });
    });

    // Listen for changes in the URL hash (e.g., back/forward buttons)
    window.addEventListener('hashchange', () => {
        showSection(window.location.hash);
    });

    // Initial call to show the correct section on page load
    showSection(window.location.hash);

    // Function to dynamically render products on the page
    const renderProducts = (productsToRender) => {
        productsGrid.innerHTML = ''; // Clear the grid
        productsToRender.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 cursor-pointer';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
                    <p class="text-stone-600 mb-4">₹${product.price.toFixed(2)}</p>
                    <button class="add-to-cart-btn bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-4 rounded-full w-full transition-colors" data-product-id="${product.id}">
                        Add to Cart
                    </button>
                </div>
            `;
            // Add a click listener to the product card itself to show details
            productCard.addEventListener('click', (e) => {
                // Prevent the click from triggering if the button was clicked
                if (!e.target.classList.contains('add-to-cart-btn')) {
                    showProductDetails(product);
                }
            });
            productsGrid.appendChild(productCard);
        });
    };

    // Initial render of all products
    renderProducts(products);
    
    // Function to show the product details modal
    const showProductDetails = (product) => {
        const modalDetails = document.getElementById('product-modal-details');
        let reviewsHtml = '';
        if (product.reviews.length > 0) {
            reviewsHtml = `<div class="mt-4">
                <h4 class="font-semibold text-lg mb-2">Customer Reviews</h4>
                <ul class="list-disc list-inside space-y-2 text-stone-700">
                    ${product.reviews.map(review => `<li><strong>${review.author}:</strong> "${review.text}"</li>`).join('')}
                </ul>
            </div>`;
        } else {
            reviewsHtml = `<p class="mt-4 text-stone-500">No reviews yet. Be the first!</p>`;
        }
        modalDetails.innerHTML = `
            <div class="md:flex md:space-x-8">
                <img src="${product.image}" alt="${product.name}" class="w-full md:w-1/2 rounded-lg object-cover">
                <div class="mt-6 md:mt-0">
                    <h2 class="text-3xl font-bold mb-2">${product.name}</h2>
                    <p class="text-2xl font-semibold text-black mb-4">₹${product.price.toFixed(2)}</p>
                    <p class="text-stone-700 leading-relaxed">${product.description}</p>
                    <button class="add-to-cart-btn bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 rounded-full mt-6 shadow-md transition-colors" data-product-id="${product.id}" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
                    ${reviewsHtml}
                </div>
            </div>
        `;
        productModalOverlay.style.display = 'flex';
        setTimeout(() => productModalOverlay.querySelector('.modal-content').classList.add('is-active'), 10);
    };

    // Function to add a product to the cart
    window.addToCart = (productId) => {
        const product = products.find(p => p.id === productId);
        if (product) {
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            updateCartDisplay();
            // Custom message box instead of alert()
            showMessageBox(`"${product.name}" added to cart!`);
            productModalOverlay.style.display = 'none';
        }
    };
    
    // Event delegation for "Add to Cart" buttons
    productsGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(e.target.dataset.productId);
            addToCart(productId);
        }
    });

    // Function to update the cart display
    const updateCartDisplay = () => {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-center text-stone-500">Your cart is empty.</p>';
        } else {
            cart.forEach(item => {
                total += item.price * item.quantity;
                const cartItemDiv = document.createElement('div');
                cartItemDiv.className = 'flex items-center justify-between border-b border-stone-200 pb-4';
                cartItemDiv.innerHTML = `
                    <div class="flex items-center space-x-4">
                        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-lg object-cover">
                        <div>
                            <h4 class="font-semibold">${item.name}</h4>
                            <p class="text-stone-600">₹${item.price.toFixed(2)} x ${item.quantity}</p>
                        </div>
                    </div>
                    <button class="text-red-500 hover:text-red-700 font-bold text-2xl" onclick="removeFromCart(${item.id})">&times;</button>
                `;
                cartItemsContainer.appendChild(cartItemDiv);
            });
        }
        cartTotalSpan.textContent = `₹${total.toFixed(2)}`;
    };

    // Function to remove an item from the cart
    window.removeFromCart = (productId) => {
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            if (cart[itemIndex].quantity > 1) {
                cart[itemIndex].quantity--;
            } else {
                cart.splice(itemIndex, 1);
            }
            updateCartDisplay();
        }
    };

    // Event listener for cart icon to open the cart modal
    cartIcon.addEventListener('click', () => {
        cartModalOverlay.style.display = 'flex';
        setTimeout(() => cartModalOverlay.querySelector('.modal-content').classList.add('is-active'), 10);
        updateCartDisplay();
    });

    // Close modal buttons
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modalOverlay = e.target.closest('.modal-overlay');
            modalOverlay.querySelector('.modal-content').classList.remove('is-active');
            setTimeout(() => {
                modalOverlay.style.display = 'none';
            }, 300);
        });
    });

    // Sort functionality
    sortSelect.addEventListener('change', (e) => {
        let sortedProducts = [...products];
        if (e.target.value === 'price-asc') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (e.target.value === 'price-desc') {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        renderProducts(sortedProducts);
    });
    
    // Filter functionality
    const populateFilterCategories = () => {
        const categories = ['all', ...new Set(products.map(p => p.category))];
        filterSelect.innerHTML = '';
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.toLowerCase().replace(/\s/g, '-');
            option.textContent = category === 'all' ? 'All Categories' : category;
            filterSelect.appendChild(option);
        });
    };
    populateFilterCategories();

    filterSelect.addEventListener('change', (e) => {
        const category = e.target.value;
        if (category === 'all') {
            renderProducts(products);
        } else {
            const filteredProducts = products.filter(p => p.category.toLowerCase().replace(/\s/g, '-') === category);
            renderProducts(filteredProducts);
        }
    });

    // Handle checkout
    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (cart.length > 0) {
            showMessageBox('Checkout successful! Thanks for your purchase!');
            cart = [];
            updateCartDisplay();
            cartModalOverlay.style.display = 'none';
        } else {
            showMessageBox('Your cart is empty. Please add items to checkout.');
        }
    });

    // Simple custom message box function to replace alert()
    const showMessageBox = (message) => {
        const modalDiv = document.createElement('div');
        modalDiv.classList.add('fixed', 'inset-0', 'bg-black/60', 'flex', 'items-center', 'justify-center', 'z-50');
        modalDiv.innerHTML = `
            <div class="bg-white p-8 rounded-lg shadow-xl max-w-sm mx-auto">
                <p class="text-center text-lg font-medium">${message}</p>
                <div class="flex justify-center mt-6">
                    <button class="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-6 rounded-full transition-colors" onclick="this.closest('.fixed').remove()">OK</button>
                </div>
            </div>
        `;
        document.body.appendChild(modalDiv);
    };

    // Review section logic
    const renderReviews = () => {
        reviewsContainer.innerHTML = '';
        mockReviews.forEach(review => {
            const reviewCard = document.createElement('div');
            reviewCard.className = 'bg-stone-50 rounded-lg p-4 shadow-sm';
            reviewCard.innerHTML = `
                <p class="font-semibold text-stone-800">${review.name}</p>
                <p class="text-stone-600 mt-2">${review.text}</p>
            `;
            reviewsContainer.appendChild(reviewCard);
        });
    };
    renderReviews();

    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('review-name').value;
        const text = document.getElementById('review-text').value;
        if (name && text) {
            mockReviews.push({ name, text });
            renderReviews();
            showMessageBox("Thank you for your review! It has been submitted.");
            reviewForm.reset();
        } else {
            showMessageBox("Please fill out both your name and review text.");
        }
    });

    // Support section logic
    const mockOrderStatuses = {
        'ORDER12345': 'Your order is on its way!',
        'ORDER67890': 'Your order has been delivered.',
        'ORDER11223': 'Your order is being processed.'
    };

    trackOrderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const orderId = document.getElementById('order-id').value.trim().toUpperCase();
        const statusDiv = document.getElementById('order-status');
        if (mockOrderStatuses[orderId]) {
            statusDiv.textContent = `Status: ${mockOrderStatuses[orderId]}`;
        } else {
            statusDiv.textContent = "Order ID not found. Please try again or contact support.";
        }
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;
        if (name && email && message) {
            showMessageBox("Thank you for your message! We will get back to you shortly.");
            contactForm.reset();
        } else {
            showMessageBox("Please fill out all fields.");
        }
    });
});
