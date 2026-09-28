const db = require("../database");

function getProduct(productId, callback) {
    db.get(
        `
        SELECT *
        FROM products
        WHERE product_id = ?
        `,
        [productId],
        callback
    );
}

function getCurrentStock(product) {
    return Number(product.initial_quantity || 0);
}

function hasEnoughStock(product, quantityRequested) {
    return (
        getCurrentStock(product) >=
        quantityRequested
    );
}

function updateStock(
    productId,
    newQuantity,
    callback
) {
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

function reduceStock(
    product,
    quantitySold,
    callback
) {
    const currentStock =
        getCurrentStock(product);

    const newQuantity =
        Math.max(
            0,
            currentStock - quantitySold
        );

    updateStock(
        product.product_id,
        newQuantity,
        (err) => {
            if (err) {
                return callback(err);
            }

            product.initial_quantity =
                newQuantity;

            callback(
                null,
                newQuantity
            );
        }
    );
}

function addStock(
    product,
    quantityReceived,
    callback
) {
    const newQuantity =
        getCurrentStock(product) +
        quantityReceived;

    updateStock(
        product.product_id,
        newQuantity,
        (err) => {
            if (err) {
                return callback(err);
            }

            product.initial_quantity =
                newQuantity;

            callback(
                null,
                newQuantity
            );
        }
    );
}

function isOutOfStock(product) {
    return (
        getCurrentStock(product) <= 0
    );
}

function isLowStock(product) {
    return (
        getCurrentStock(product) <= 20
    );
}

module.exports = {
    getProduct,
    getCurrentStock,
    hasEnoughStock,
    reduceStock,
    addStock,
    updateStock,
    isOutOfStock,
    isLowStock,
};