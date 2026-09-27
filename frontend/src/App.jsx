import { useState } from "react";
import Products from "./pages/Products.jsx";
import Runs from "./pages/Runs.jsx";
import DailyReports from "./pages/DailyReports.jsx";
import BusinessPerformance from "./pages/BusinessPerformance.jsx";
import Operations from "./pages/Operations.jsx";
import CommercialAssurance from "./pages/CommercialAssurance.jsx";
import ModelDeclaration from "./pages/ModelDeclaration.jsx";
import CommercialDiagnosis from "./pages/CommercialDiagnosis.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div>
      {page === "dashboard" && (
        <>
          <h1>Autonomous Supermarket</h1>

          <Dashboard />

          <button onClick={() => setPage("products")}>
            Products
          </button>

          <button onClick={() => setPage("runs")}>
            Runs
          </button>

          <button onClick={() => setPage("reports")}>
            Daily Reports
          </button>

          <button onClick={() => setPage("business")}>
            Business Performance
          </button>

          <button onClick={() => setPage("operations")}>
            Operations
          </button>

          <button onClick={() => setPage("assurance")}>
            Commercial Assurance
          </button>

          <button onClick={() => setPage("model")}>
            Model Declaration
          </button>

          <button onClick={() => setPage("diagnosis")}>
            Commercial Diagnosis
          </button>
        </>
      )}

      {page !== "dashboard" && (
        <button onClick={() => setPage("dashboard")}>
          Back
        </button>
      )}

      {page === "products" && <Products />}
      {page === "runs" && <Runs />}
      {page === "reports" && <DailyReports />}
      {page === "business" && <BusinessPerformance />}
      {page === "operations" && <Operations />}
      {page === "assurance" && <CommercialAssurance />}
      {page === "model" && <ModelDeclaration />}
      {page === "diagnosis" && <CommercialDiagnosis />}
    </div>
  );
}