const {
    generateCustomerCount,
    generateCustomerType,
    generateBasketSize,
} = require("./customerService");

function simulateDay(day) {
    const isWeekend = day % 7 === 6 || day % 7 === 0;
    let revenue =0;

    const customerCount = generateCustomerCount(isWeekend);

    let totalTransactions = 0;
    let unitsSold = 0;

    for (let i = 0; i < customerCount; i++) {
        const customerType = generateCustomerType(isWeekend);
        const basketSize = generateBasketSize(customerType);

    revenue += basketSize * 5;

    totalTransactions++;

    unitsSold += basketSize;
    
}

    return {
        day,
        customerCount,
        totalTransactions,
        unitsSold,
        revenue,
    };
}

module.exports = { simulateDay };
