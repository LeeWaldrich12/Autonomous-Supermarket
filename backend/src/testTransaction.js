const { createTransaction } = require("./services/transactionService");

createTransaction("DR001", 5, (err, transaction) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(transaction);
});