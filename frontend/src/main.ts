import "./style.css";
// @ts-ignore
import Products from "./pages/Products.js";

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

loadDashboard();

document
  .getElementById("view-products")
  ?.addEventListener("click", () => {
    document.querySelector<HTMLDivElement>("#app")!.innerHTML =
      Products();
  });