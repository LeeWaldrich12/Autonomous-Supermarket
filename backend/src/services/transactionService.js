const { getProduct, hasEnoughStock } = require("./inventoryService");

function createTransaction(productId, quantity, callback) {
    getProduct(productId, (err, product) => {
        if (err) return callback(err);

    if (!product) {
        return callback("Product not found");
    }

    if (!hasEnoughStock(product, quantity)) {
        return callback("Not enough stock");
    }

    const total = product.sale_price * quantity;

    callback(null, {
        product_id: product.product_id,
        name: product.name,
        quantity,
        total,
        });
    });
}

module.exports = { createTransaction };
