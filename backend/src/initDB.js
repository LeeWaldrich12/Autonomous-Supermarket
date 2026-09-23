const db = require("./database");

db.serialize(() => {
  //products
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

  //runs
  db.run(`
    CREATE TABLE IF NOT EXISTS runs (
      run_id INTEGER PRIMARY KEY AUTOINCREMENT,
      start_date TEXT,
      opening_cash REAL,
      inventory_budget REAL
    )
  `);

  //inventory batches
  db.run(`
    CREATE TABLE IF NOT EXISTS inventory_batches (
      batch_id INTEGER PRIMARY KEY AUTOINCREMENT,
      run_id INTEGER,
      product_id TEXT,
      quantity INTEGER,
      received_day INTEGER,
      expiry_day INTEGER
    )
  `);

  //transactions
  db.run(`
    CREATE TABLE IF NOT EXISTS transactions (
      transaction_id INTEGER PRIMARY KEY AUTOINCREMENT,
      run_id INTEGER,
      day INTEGER,
      customer_type TEXT,
      total_amount REAL
    )
  `);

    //transaction items
    db.run(`
    CREATE TABLE IF NOT EXISTS transaction_items (
      transaction_item_id INTEGER PRIMARY KEY AUTOINCREMENT,
      transaction_id INTEGER,
      product_id TEXT,
      quantity INTEGER,
      unit_price REAL
    )
  `);

  //replenishments
  db.run(`
    CREATE TABLE IF NOT EXISTS replenishments (
      replenishment_id INTEGER PRIMARY KEY AUTOINCREMENT,
      run_id INTEGER,
      day INTEGER,
      product_id TEXT,
      quantity INTEGER,
      cost REAL
    )
  `);

  //brain events
  db.run(`
    CREATE TABLE IF NOT EXISTS store_brain_events (
      event_id INTEGER PRIMARY KEY AUTOINCREMENT,
      run_id INTEGER,
      day INTEGER,
      product_id TEXT,
      event_type TEXT,
      action_taken TEXT
    )
  `);

  //daily reports
  db.run(`
    CREATE TABLE IF NOT EXISTS daily_reports (
      report_id INTEGER PRIMARY KEY AUTOINCREMENT,
      run_id INTEGER,
      day INTEGER,
      customers INTEGER,
      transactions INTEGER,
      units_sold INTEGER,
      revenue REAL,
      closing_cash REAL
    )
  `);

  console.log("Products tables created");
});

db.close();