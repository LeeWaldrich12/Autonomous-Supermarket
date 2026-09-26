//customer type
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

//customer count
function generateCustomerCount(isWeekend) {
    if (isWeekend) {
        return Math.floor(Math.random() * 51) + 150;
    }

    return Math.floor(Math.random() * 51) + 100;
}

//basket size
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

//preference
function getPreferredCategories(customerType) {
    switch (customerType) {
        case "Student":
            return [
                "Drinks",
                "Snacks",
                "Ready-to-Eat Meals"
            ];

        case "Office Worker":
            return [
                "Drinks",
                "Dairy",
                "Ready-to-Eat Meals"
            ];

        case "Resident":
            return [
                "Frozen",
                "Vegetables",
                "Dairy",
                "Canned",
                "Household",
                "Personal Care"
            ];

        default:
            return [];
    }
}

//selection
function selectCategory(customerType) {
    const categories =
        getPreferredCategories(customerType);

    const randomIndex = Math.floor(
        Math.random() * categories.length
    );

    return categories[randomIndex];
}

//shopping type
function generateShoppingMission(customerType) {
    switch (customerType) {
        case "Student":
            return "Snack Run";

        case "Office Worker":
            return "Lunch Purchase";

        case "Resident":
            return "Grocery Shop";

        default:
            return "General Shopping";
    }
}

module.exports = {
    generateCustomerType,
    generateCustomerCount,
    generateBasketSize,
    getPreferredCategories,
    selectCategory,
    generateShoppingMission
};