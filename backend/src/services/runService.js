const db = require("../database");

function createRun(callback) {
    db.run(
    `
    INSERT INTO runs (
        start_date,
        opening_cash,
        inventory_budget,
        current_cash
    )
    VALUES (?, ?, ?, ?)
    `,
    [
        new Date().toISOString(),
        15000,
        40000,
        15000
    ],
    function (err) {
        if (err) {
            return callback(err);
        }

        callback(null, this.lastID);
        }
    );
}

module.exports = { createRun };