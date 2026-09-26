const db = require("../database");

db.all(
    "SELECT day, revenue, closing_cash FROM daily_reports LIMIT 5",
    [],
    (err, rows) => {
        if (err) {
            throw err;
        }

        console.log(rows);

        db.close();
    }
);