const { simulateDay } = require("./simulationService");
const { saveDailyReport } = require("./saveSimulation");

function runSimulation() {
    const runId = 1;

    for (let day = 1; day <= 60; day++) {
    const result = simulateDay(day);

    saveDailyReport(runId, result);
    }

    console.log("60 day simulation completed");
}

module.exports = { runSimulation };