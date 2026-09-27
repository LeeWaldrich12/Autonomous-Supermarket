import { useEffect, useState } from "react";

export default function DailyReports() {
    const [reports, setReports] = useState([]);
    console.log("REPORTS:", reports);
    const [selectedDay, setSelectedDay] = useState("");

    useEffect(() => {
        async function loadReports() {
        const data = await fetch(
            "http://localhost:5000/daily-reports"
        ).then((res) => res.json());

        setReports(data);
        }

        loadReports();
    }, []);

    const selectedReport = reports.find(
        (report) => report.day == selectedDay
    );

    return (
        <div>
        <h2>Daily Reports</h2>

        <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}> 

        <option value="">Select a Day</option>

        {reports.map((report) => (
            <option
                key={report.report_id}
                value={report.day}
            >
                Day {report.day}
            </option>
        ))}
        </select>

        <pre> {JSON.stringify(selectedReport, null, 2)}</pre>

        <p>Selected Day: {selectedDay}</p>

        {selectedReport && (
            <div>
                <h3>Day {selectedReport.day}</h3>

                <p> Customers: {selectedReport.customers}
                </p>

                <p> Transactions:{" "} {selectedReport.transactions}
                </p>

            <p>
                Units Sold: {selectedReport.units_sold}
            </p>

            <p>
                Revenue: ${selectedReport.revenue}
            </p>

            <p>
                Closing Cash: $ {selectedReport.closing_cash}
            </p>
            </div>
        )}
    </div>
    );
}