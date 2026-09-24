//Low stock
function isLowStock(product) {
    return product.initial_quantity <= 20;
}

//sold out
function isSoldOut(product) {
    return product.initial_quantity === 0;
}

//expiry warning
function isNearExpiry(product) {
    if (!product.perishable) return false;

    return product.shelf_life_days <= 3;
}

//slow moving
function isSlowMoving(stock, soldLast7Days) {
    return stock > 50 && soldLast7Days < 10;
}

//Replenishment calculation
function calculateReorderQuantity(product) {
    const targetStock =
        Math.floor(product.initial_quantity * 0.8);

    return targetStock;
}

module.exports = {
    isLowStock,
    isSoldOut,
    isNearExpiry,
    isSlowMoving,
    calculateReorderQuantity,
};