const db = require("./database");

db.all("SELECT * FROM products", [], (err, rows) => {
  if (err) {
    throw err;
  }

  console.log(`Products found: ${rows.length}`);
  db.close();
});