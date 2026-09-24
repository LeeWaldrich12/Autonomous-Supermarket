const db = require("../database");

db.all("SELECT * FROM runs", [], (err, rows) => {
    if (err) throw err;

    console.log(rows);

    db.close();
});