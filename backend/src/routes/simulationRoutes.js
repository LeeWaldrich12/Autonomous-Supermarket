const express = require("express");
const { runSimulation } = require("../services/simulationRunner");

const router = express.Router();

router.post("/run", (req, res) => {
    runSimulation();

    res.json({
        message: "Simulation started",
    });
});

module.exports = router;