const db = require("../database");

db.get(
    "SELECT COUNT(*) AS count FROM daily_reports",
    [],
    (err, row) => {
        if (err) throw err;

        console.log(row);
        db.close();
    }
);
``