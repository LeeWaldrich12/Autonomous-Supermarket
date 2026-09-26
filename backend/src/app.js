const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const runRoutes = require("./routes/runRoutes");
const dailyReportRoutes = require("./routes/dailyReportRoutes");
const simulationRoutes = require("./routes/simulationRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/runs", runRoutes);
app.use(
    "/daily-reports",
    dailyReportRoutes
);
app.use("/simulation", simulationRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Autonomous Supermarket API Running"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});