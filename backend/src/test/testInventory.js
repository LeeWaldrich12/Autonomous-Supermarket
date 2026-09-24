const {
  getProduct,
  getCurrentStock,
  hasEnoughStock,
} = require("../services/inventoryService");

getProduct("DR001", (err, product) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(product);
  console.log("Stock:", getCurrentStock(product));
  console.log("Can buy 50?", hasEnoughStock(product, 50));
  console.log("Can buy 500?", hasEnoughStock(product, 500));
});
