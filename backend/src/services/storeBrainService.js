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
    const targetStock = 80;

    return targetStock - product.initial_quantity;
}

//Can replenish
function canReplenish(availableCash, orderCost){
    return availableCash => orderCost;
}

//creation event
function createEvent(productId, eventType){
    return {
        productId,
        eventType,
        Timestamp: new Date().toISOString(),
    };
}

//low stock event
function createLowStockEvent(product) {
    return createEvent(
        product.product_id,
        "LOW_STOCK"
    );
}
//sold out event
function createSoldOutEvent(product) {
    return createEvent(
        product.product_id,
        "SOLD_OUT"
    );
}

//expiry event
function createExpiryEvent(product) {
    return createEvent(
        product.product_id,
        "EXPIRY_WARNING"
    );
}

module.exports = {
    isLowStock,
    isSoldOut,
    isNearExpiry,
    isSlowMoving,
    calculateReorderQuantity,
    canReplenish,
    createEvent,
    createLowStockEvent,
    createSoldOutEvent,
    createExpiryEvent
};