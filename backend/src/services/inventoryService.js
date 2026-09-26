const db = require("../database");

//get product
function getProduct(productId, callback) {
    db.get(
        "SELECT * FROM products WHERE product_id = ?",
        [productId],
        callback
    );
}

//current stock
function getCurrentStock(product) {
    return product.initial_quantity;
}

//enough stock
function hasEnoughStock(product, quantityRequested) {
    return product.initial_quantity >= quantityRequested;
}

//reduce
function reduceStock(product, quantitySold, callback) {
    const newQuantity =
        product.initial_quantity - quantitySold;

    updateStock(
        product.product_id,
        newQuantity,
        (err) => {
            if (err) {
                return callback(err);
            }

            product.initial_quantity = newQuantity;

            callback(null, newQuantity);
        }
    );
}

//update stock
function updateStock(productId, newQuantity, callback) {
    db.run(
        `
        UPDATE products
        SET initial_quantity = ?
        WHERE product_id = ?
        `,
        [newQuantity, productId],
        callback
    );
}

//add
function addStock(product,quantityReceived){
    product.initial_quantity += quantityReceived;

    return product.initial_quantity;
}

//out of stock
function isOutOfStock(product){
    return product.initial_quantity <=0;
}

//low stock
function isLowStock(product){
    return product.initial_quantity <= 20;
}

module.exports = { getProduct, getCurrentStock, hasEnoughStock, reduceStock, addStock, updateStock, isOutOfStock, isLowStock};