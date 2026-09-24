const { createRun } = require("../services/runService");

createRun((err, runId) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Run ID:", runId);
});