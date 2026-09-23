const db = require("../database");

function getProduct(productId, callback) {
    db.get(
        "SELECT * FROM products WHERE product_id = ?",
        [productId],
        callback
    );
}

function getCurrentStock(product) {
    return product.initial_quantity;
}

function hasEnoughStock(product, quantityRequested) {
    return product.initial_quantity >= quantityRequested;
}

module.exports = { getProduct, getCurrentStock, hasEnoughStock };