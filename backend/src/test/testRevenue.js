const db = require("../database");

db.get(
    "SELECT revenue FROM daily_reports LIMIT 1",
    [],
    (err, row) => {
        if (err) throw err;

        console.log(row);

        db.close();
    }
);