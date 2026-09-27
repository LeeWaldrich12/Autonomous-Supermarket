import "./style.css";
// @ts-ignore
import Products from "./pages/Products.js";
// @ts-ignore
import Runs from "./pages/Runs.js";
// @ts-ignore
import DailyReports from "./pages/DailyReports.js";
// @ts-ignore
import BusinessPerformance from "./pages/BusinessPerformance.js";
// @ts-ignore
import Operations from "./pages/Operations.js";
// @ts-ignore
import CommercialAssurance from "./pages/CommercialAssurance.js";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="card">
    <h2>Products</h2>
    <p id="products-count">Loading...</p>

    <button id="view-products">
      View Products
    </button>
  </div>

  <div class="card">
    <h2>Runs</h2>
    <p id="runs-count">Loading...</p>

    <button id="view-runs">
      View Runs
    </button>
  </div>

  <div class="card">
    <h2>Daily Reports</h2>
    <p id="reports-count">Loading...</p>

    <button id="view-reports">
      View Reports
    </button>
  </div>

  <div class="card">
    <h2>Business Performance</h2>

    <button id="view-business-performance">
      View Business Performance
    </button>
  </div>

  <div class="card">
    <h2>Inventory & Operations</h2>

    <button id="view-operations">
      View Operations
      </button>
  </div>

  <div class="card">
    <h2>Commercial Assurance</h2>

    <button id="view-commercial-assurance">
      View Commercial Assurance
    </button>
  </div>

`;

async function loadDashboard() {
  const products = await fetch(
    "http://localhost:5000/products"
  ).then((res) => res.json());

  const runs = await fetch(
    "http://localhost:5000/runs"
  ).then((res) => res.json());

  const reports = await fetch(
    "http://localhost:5000/daily-reports"
  ).then((res) => res.json());

  document.getElementById("products-count")!.textContent =
    products.length;

  document.getElementById("runs-count")!.textContent =
    runs.length;

  document.getElementById("reports-count")!.textContent =
    reports.length;
}

function setupBackButton() {
  document
    .getElementById("back-button")
    ?.addEventListener("click", () => {
      window.location.reload();
    });
}

loadDashboard();

document
  .getElementById("view-products")
  ?.addEventListener("click", async () => {
    document.querySelector<HTMLDivElement>("#app")!.innerHTML =
      await Products();

  setupBackButton();
  });

document
  .getElementById("view-runs")
  ?.addEventListener("click", async () => {
    document.querySelector<HTMLDivElement>("#app")!.innerHTML =
      await Runs();

  setupBackButton();
  });

document
  .getElementById("view-reports")
  ?.addEventListener("click", async () => {
    document.querySelector<HTMLDivElement>("#app")!.innerHTML =
      await DailyReports();

  setupBackButton();
  });

document
  .getElementById("view-business-performance")
  ?.addEventListener("click", async () => {
    document.querySelector<HTMLDivElement>("#app")!.innerHTML =
      await BusinessPerformance();

    setupBackButton();
  });

document
  .getElementById("view-operations")
  ?.addEventListener("click", async () => {
    document.querySelector<HTMLDivElement>("#app")!.innerHTML =
      await Operations();

    setupBackButton();
  });

  document
  .getElementById("view-commercial-assurance")
  ?.addEventListener("click", async () => {
    document.querySelector<HTMLDivElement>("#app")!.innerHTML =
      await CommercialAssurance();

    setupBackButton();
  });