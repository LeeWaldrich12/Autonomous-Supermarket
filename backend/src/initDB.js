const db = require("./database");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      product_id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      cost_price REAL NOT NULL,
      sale_price REAL NOT NULL,
      initial_quantity INTEGER NOT NULL,
      perishable INTEGER NOT NULL,
      shelf_life_days INTEGER
    )
  `);

  console.log("Products table created");
});

db.close();