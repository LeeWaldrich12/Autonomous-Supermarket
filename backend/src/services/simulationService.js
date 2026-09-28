const {
    generateCustomerCount,
    generateCustomerType,
    generateBasketSize,
    selectCategory,
    generateShoppingMission,
} = require("./customerService");

const {
    saveTransaction,
    saveTransactionItem,
    saveStoreBrainEvent,
    saveReplenishment,
} = require("./historyService");

function simulateDay(day) {
    const runId = 1;

    const isWeekend =
        day % 7 === 6 || day % 7 === 0;

    let revenue = 0;
    let cogs = 0;
    let totalTransactions = 0;
    let unitsSold = 0;

    let students = 0;
    let officeWorkers = 0;
    let residents = 0;

    let largestBasket = 0;

    let snackRuns = 0;
    let lunchPurchases = 0;
    let groceryShops = 0;

    let stockoutEvents = 0;
    let lowStockEvents = 0;

    let expiryValue = 0;
    let writeOffValue = 0;

    let replenishmentCost = 0;
    let storeBrainActions = 0;

    const customerCount =
        generateCustomerCount(isWeekend);

    const categorySales = {};

    for (let i = 0; i < customerCount; i++) {
        const customerType =
            generateCustomerType(isWeekend);

        const shoppingMission =
            generateShoppingMission(customerType);

        const selectedCategory =
            selectCategory(customerType);

        const basketSize =
            generateBasketSize(customerType);

        categorySales[selectedCategory] =
            (categorySales[selectedCategory] || 0) +
            basketSize;

        if (basketSize > largestBasket) {
            largestBasket = basketSize;
        }

        if (customerType === "Student") {
            students++;
        }

        if (customerType === "Office Worker") {
            officeWorkers++;
        }

        if (customerType === "Resident") {
            residents++;
        }

        if (shoppingMission === "Snack Run") {
            snackRuns++;
        }

        if (shoppingMission === "Lunch Purchase") {
            lunchPurchases++;
        }

        if (shoppingMission === "Grocery Shop") {
            groceryShops++;
        }

        const salePricePerItem = 5;
        const costPricePerItem = 2;

        const transactionRevenue =
            basketSize * salePricePerItem;

        const transactionCogs =
            basketSize * costPricePerItem;

        revenue += transactionRevenue;
        cogs += transactionCogs;

        totalTransactions++;
        unitsSold += basketSize;

        saveTransaction(
            runId,
            day,
            customerType,
            transactionRevenue
        );

        saveTransactionItem(
            1,
            selectedCategory,
            basketSize,
            salePricePerItem
        );
    }

    if (day % 10 === 0) {
        lowStockEvents =
            Math.floor(Math.random() * 5);

        if (lowStockEvents > 0) {
            saveStoreBrainEvent(
                runId,
                day,
                "SIMULATED",
                "LOW_STOCK",
                "REORDER"
            );
        }

        storeBrainActions += lowStockEvents;

        replenishmentCost =
            lowStockEvents * 50;

        if (replenishmentCost > 0) {
            saveReplenishment(
                runId,
                day,
                "SIMULATED",
                lowStockEvents,
                replenishmentCost
            );
        }
    }

    if (day % 15 === 0) {
        stockoutEvents =
            Math.floor(Math.random() * 3);

        storeBrainActions += stockoutEvents;

        if (stockoutEvents > 0) {
            saveStoreBrainEvent(
                runId,
                day,
                "SIMULATED",
                "SOLD_OUT",
                "REVIEW_STOCK"
            );
        }
    }

    if (day % 20 === 0) {
        expiryValue =
            Math.floor(Math.random() * 30);

        writeOffValue = expiryValue;
    }

    const grossProfit =
        revenue - cogs - writeOffValue;

    const averageTransactionValue =
        totalTransactions > 0
            ? revenue / totalTransactions
            : 0;

    const averageBasketSize =
        totalTransactions > 0
            ? unitsSold / totalTransactions
            : 0;

    const dayType =
        isWeekend ? "Weekend" : "Weekday";

    return {
        day,
        dayType,
        customerCount,
        totalTransactions,
        unitsSold,
        revenue,
        cogs,
        grossProfit,
        averageTransactionValue,
        averageBasketSize,
        students,
        officeWorkers,
        residents,
        largestBasket,
        snackRuns,
        lunchPurchases,
        groceryShops,
        stockoutEvents,
        lowStockEvents,
        expiryValue,
        writeOffValue,
        replenishmentCost,
        storeBrainActions,
        categorySales,
    };
}

module.exports = {
    simulateDay,
};