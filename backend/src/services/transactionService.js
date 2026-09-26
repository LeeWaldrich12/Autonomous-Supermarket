const { getProduct, hasEnoughStock, reduceStock, isLowStock, isOutOfStock } = require("./inventoryService");

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

    reduceStock(product, quantity);

    const soldOut = isOutOfStock(product);
    const lowStock = isLowStock(product);

    
    let event = null;

    if (soldOut){
        event = "SOLD_OUT";
    } else if (lowStock){
        event = "LOW_STOCK";
    }

    callback(null, {
        success : true,
        product_id: product.product_id,
        name: product.name,
        quantity,
        total,
        soldOut,
        lowStock,
        event,
        remainingStock: product.initial_quantity
        });
    });
}

module.exports = { createTransaction };
