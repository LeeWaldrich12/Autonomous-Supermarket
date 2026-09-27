export default async function Runs() {
    const runs = await fetch(
        "http://localhost:5000/runs"
    ).then((res) => res.json());

    return `
        <div>
            <button id="back-button" class="back-button">
                Back
            </button>

        <h1>Runs (${runs.length})</h1>

        <ul>
            ${runs.map((run) => `
                <li>
                    Run ${run.run_id}
                </li>
                `
            ).join("")}
        </ul>
        </div>
    `;
}