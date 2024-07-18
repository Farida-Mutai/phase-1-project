document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.querySelector('.product-container');

    // Fetch product data from db.json
    fetch('/db.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            renderProducts(data.Products);
        })
        .catch(error => console.error('Error fetching product data:', error));

    // Render products function
    const renderProducts = (products) => {
        productContainer.innerHTML = products.map(product => `
            <div class="product" data-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.wear}">
                </div>
                <h3>${product.wear} (${product.size})</h3>
                <p>Brand: ${product.brand}</p>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <button class="btn buy-btn">Buy</button>
                <button class="like-btn">❤️</button>
                <button class="unlike-btn" style="display: none;">🤍</button>
            </div>
        `).join('');
    };

    // Event delegation for buttons
    productContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('buy-btn')) {
            const productId = event.target.closest('.product').dataset.id;
            alert(`Product ${productId} added to cart`);
        }

        if (event.target.classList.contains('like-btn')) {
            event.target.style.display = 'none';
            event.target.nextElementSibling.style.display = 'inline';
            alert('Product liked!');
        }

        if (event.target.classList.contains('unlike-btn')) {
            event.target.style.display = 'none';
            event.target.previousElementSibling.style.display = 'inline';
            alert('Product unliked!');
        }
    });
});


