import { useEffect, useState } from "react";

export default function Operations() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        async function loadReports() {
        const data = await fetch(
            "http://localhost:5000/daily-reports"
        ).then((res) => res.json());

        setReports(data);
        }

        loadReports();
    }, []);

    const highestRevenueDay =
        reports.length > 0 ? reports.reduce((max, report) => report.revenue > max.revenue ? report : max
        ) : null;

    return (
        <div>
            <h2>Inventory & Operations</h2>

                {highestRevenueDay && (
                <>
            <p>
                Highest Revenue Day: Day {highestRevenueDay.day}
            </p>

            <p>
                Revenue: ${highestRevenueDay.revenue}
            </p>

            <p>
                Closing Cash: ${highestRevenueDay.closing_cash}
            </p>
            </>
        )}
        </div>
    );
}