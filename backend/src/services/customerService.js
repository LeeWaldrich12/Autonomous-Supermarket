function generateCustomerType(isWeekend) {
    const random = Math.random();

    if (isWeekend) {
        if (random < 0.3) return "Student";
        if (random < 0.5) return "Office Worker";
        return "Resident";
    }

    if (random < 0.4) return "Student";
    if (random < 0.75) return "Office Worker";
    return "Resident";
}

function generateCustomerCount(isWeekend) {
    if (isWeekend) {
        return Math.floor(Math.random() * 51) + 150;
    }

    return Math.floor(Math.random() * 51) + 100;
}

function generateBasketSize(customerType) {
    switch (customerType) {
        case "Student":
        return Math.floor(Math.random() * 3) + 1;

        case "Office Worker":
            return Math.floor(Math.random() * 4) + 2;

        case "Resident":
            return Math.floor(Math.random() * 7) + 4;

    default:
        return 1;
    }
}

module.exports = {
    generateCustomerType,
    generateCustomerCount,
    generateBasketSize,
};