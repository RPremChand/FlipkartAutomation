class ProductPage {
    constructor() {
        this.productTitle = '//h1[@class="product-title"]';
        this.productPrice = '//span[@class="product-price"]';
        this.productDescription = '//div[@class="product-description"]';
        this.addToCartButton = '//button[@class="add-to-cart"]';
    }

    getProductTitle() {
        return $(this.productTitle);
    }

    getProductPrice() {
        return $(this.productPrice);
    }

    getProductDescription() {
        return $(this.productDescription);
    }

    clickAddToCart() {
        return $(this.addToCartButton).click();
    }
}

module.exports = new ProductPage();