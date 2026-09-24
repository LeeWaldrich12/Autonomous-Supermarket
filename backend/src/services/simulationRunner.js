const { simulateDay } = require("./simulationService");

function runSimulation() {
    const results = [];

    for (let day = 1; day <= 60; day++) {
        const dayResult = simulateDay(day);
        results.push(dayResult);
    }

    return results;
}

module.exports = { runSimulation };