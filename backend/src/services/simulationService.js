const {
    generateCustomerCount,
    generateCustomerType,
    generateBasketSize,
} = require("./customerService");

function simulateDay(day) {
    const isWeekend = day % 7 === 6 || day % 7 === 0;
    let revenue =0;
    let cogs = 0;

    const customerCount = generateCustomerCount(isWeekend);

    let totalTransactions = 0;
    let unitsSold = 0;
    let students = 0;
    let officeWorkers = 0;
    let residents = 0;
    let largestBasket = 0;

    for (let i = 0; i < customerCount; i++) {
        const customerType = generateCustomerType(isWeekend);
        const basketSize = generateBasketSize(customerType);

        if (basketSize > largestBasket){
            largestBasket = basketSize;
        }

        if (customerType === "Student"){
            students++;
        }

        if (customerType === "Office Workers"){
            officeWorkers++;
        }

        if (customerType === "Resident"){
            residents++;
        }

    revenue += basketSize * 5;
    cogs += basketSize * 5;

    totalTransactions++;

    unitsSold += basketSize;
    
}

    const grossProfit = revenue - cogs;
    const averageTransactionValue = revenue / totalTransactions;
    const averageBasketSize = unitsSold / totalTransactions;

    const dayType = isWeekend ? "Weekend" : "Weekday";


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
    };
}

module.exports = { simulateDay };
