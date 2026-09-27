import { useEffect, useState } from "react";

export default function Runs() {
    const [runs, setRuns] = useState([]);

    useEffect(() => {
        async function loadRuns() {
        const data = await fetch(
            "http://localhost:5000/runs"
        ).then((res) => res.json());

        setRuns(data);
        }

        loadRuns();
    }, []);

    return (
        <div>
            <h2>Runs ({runs.length})</h2>

            <ul>
                {runs.map((run) => (
            <li key={run.run_id}>
                Run {run.run_id}
            </li>
            ))}
            </ul>
        </div>
    );
}