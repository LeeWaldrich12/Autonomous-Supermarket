const { runSimulation } = require("./services/simulationRunner");

const results = runSimulation();

console.log(`Days Simulated: ${results.length}`);
console.log(results[0]);
console.log(results[59]);