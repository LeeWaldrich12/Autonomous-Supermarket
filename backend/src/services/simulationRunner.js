const { simulateDay } = require("./simulationService");
const { saveDailyReport } = require("./saveSimulation");
const { createRun } = require("./runService");

function runSimulation() {
    createRun((err, runId) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(`Starting Run ${runId}`);

        for (let day = 1; day <= 60; day++) {
            const result = simulateDay(day);

            saveDailyReport(runId, result);
        }

        console.log(`Run ${runId} completed`);
    });
}

module.exports = { runSimulation };