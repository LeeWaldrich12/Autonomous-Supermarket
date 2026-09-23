const {
  generateCustomerType,
  generateCustomerCount,
  generateBasketSize,
} = require("./services/customerService");

const isWeekend = false;

const customerType = generateCustomerType(isWeekend);

console.log("Customer Type:", customerType);
console.log("Customers Today:", generateCustomerCount(isWeekend));
console.log("Basket Size:", generateBasketSize(customerType));