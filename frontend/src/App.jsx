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
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                padding: "20px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "900px",
                }}
            >
                {page === "dashboard" && (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <h1>Autonomous Supermarket</h1>

                        <Dashboard />

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px",
                                marginTop: "25px",
                                width: "100%",
                                maxWidth: "350px",
                            }}
                        >
                            <button
                                onClick={() => setPage("products")}
                                style={{ padding: "12px" }}
                            >
                                Products
                            </button>

                            <button
                                onClick={() => setPage("runs")}
                                style={{ padding: "12px" }}
                            >
                                Runs
                            </button>

                            <button
                                onClick={() => setPage("reports")}
                                style={{ padding: "12px" }}
                            >
                                Daily Reports
                            </button>

                            <button
                                onClick={() => setPage("business")}
                                style={{ padding: "12px" }}
                            >
                                Business Performance
                            </button>

                            <button
                                onClick={() => setPage("operations")}
                                style={{ padding: "12px" }}
                            >
                                Inventory & Operations
                            </button>

                            <button
                                onClick={() => setPage("diagnosis")}
                                style={{ padding: "12px" }}
                            >
                                Commercial Diagnosis
                            </button>

                            <button
                                onClick={() => setPage("assurance")}
                                style={{ padding: "12px" }}
                            >
                                Commercial Assurance
                            </button>

                            <button
                                onClick={() => setPage("model")}
                                style={{ padding: "12px" }}
                            >
                                Model Declaration
                            </button>
                        </div>
                    </div>
                )}

                {page !== "dashboard" && (
                    <>
                        <button
                            onClick={() => setPage("dashboard")}
                            style={{
                                marginBottom: "20px",
                                padding: "10px 20px",
                            }}
                        >
                            ← Back to Dashboard
                        </button>

                        {page === "products" && <Products />}
                        {page === "runs" && <Runs />}
                        {page === "reports" && <DailyReports />}
                        {page === "business" && <BusinessPerformance />}
                        {page === "operations" && <Operations />}
                        {page === "assurance" && <CommercialAssurance />}
                        {page === "model" && <ModelDeclaration />}
                        {page === "diagnosis" && <CommercialDiagnosis />}
                    </>
                )}
            </div>
        </div>
    );
}