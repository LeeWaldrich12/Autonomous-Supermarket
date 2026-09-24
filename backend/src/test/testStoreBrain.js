const {
    isLowStock,
    isSoldOut,
} = require("../services/storeBrainService");

const product = {
    initial_quantity: 15,
};

console.log("Low Stock:", isLowStock(product));
console.log("Sold Out:", isSoldOut(product));