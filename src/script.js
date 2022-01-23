const grid = document.querySelector(".grid");

const getCardComponent = (cardNum) => `
        <div class="card">
					
					<div class="card-image">
						<!-- <img src="http://placehold.it/140x100" alt=""> -->
						<img src="https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/latitude_notebooks/14_7410/pdp/laptop-latitude-14-7410-pdp-gallery-504x350.jpg?fmt=jpg" alt="image">
					</div>
					<div class="card-text">
						<p class='product-name'>
							Dell Inspiron 15 7000 Gaming Laptop, 15.6" FHD IPS Touchscreen, Intel Core i7-9750H, 16GB DDR4, 1TB HDD, NVIDIA GeForce GTX 1660 Ti 6GB, Windows 10 Home 64-bit
						</p>
						<p class='brand'>Dell</p>
						<p class='price'>R1,000.00</p>
					</div>
					<div class="card-button-container">
						<button class='card-add-to-cart'>Add to cart</button>
						<button class='card-view-more'>View More</button>
					</div>
				</div>`;

let i = 0;
while (i++ < 16) {
	grid.innerHTML += getCardComponent(i);
}
