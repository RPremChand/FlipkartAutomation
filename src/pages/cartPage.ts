class CartPage {
    constructor(driver) {
        this.driver = driver;
        this.cartIcon = 'css-selector-for-cart-icon';
        this.checkoutButton = 'css-selector-for-checkout-button';
        this.productList = 'css-selector-for-product-list';
    }

    async clickCartIcon() {
        await this.driver.findElement(this.cartIcon).click();
    }

    async proceedToCheckout() {
        await this.driver.findElement(this.checkoutButton).click();
    }

    async getProductList() {
        return await this.driver.findElements(this.productList);
    }
}

module.exports = CartPage;