const {
    getProduct,
    hasEnoughStock,
    reduceStock,
    isLowStock,
    isOutOfStock,
} = require("./inventoryService");

function createTransaction(productId, quantity, callback) {
    getProduct(productId, (err, product) => {
        if (err) {
            return callback(err);
        }

        if (!product) {
            return callback("Product not found");
        }

        if (!hasEnoughStock(product, quantity)) {
            return callback("Not enough stock");
        }

        const total =
            product.sale_price * quantity;

        const cogs =
            product.cost_price * quantity;

        reduceStock(
            product,
            quantity,
            (stockError, newQuantity) => {
                if (stockError) {
                    return callback(stockError);
                }

                const soldOut =
                    newQuantity <= 0;

                const lowStock =
                    newQuantity <= 20;

                let event = null;

                if (soldOut) {
                    event = "SOLD_OUT";
                } else if (lowStock) {
                    event = "LOW_STOCK";
                }

                callback(null, {
                    success: true,

                    product_id:
                        product.product_id,

                    name:
                        product.name,

                    category:
                        product.category,

                    quantity,

                    unit_price:
                        product.sale_price,

                    unit_cost:
                        product.cost_price,

                    total,

                    cogs,

                    soldOut,

                    lowStock,

                    event,

                    remainingStock:
                        newQuantity,
                });
            }
        );
    });
}

module.exports = {
    createTransaction,
};