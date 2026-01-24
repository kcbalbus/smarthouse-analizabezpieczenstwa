import React, { useMemo, useState } from "react";
import useSensorsStore from "../stores/SensorsStore.ts";
import ScenariosControlBar from "../components/Scenarios/ScenariosControlBar.tsx";
import ScenariosTable from "../components/Scenarios/ScenariosTable.tsx";
import { Scenario } from "../types/StoreTypes.ts";

const Scenarios: React.FC = () => {
    const { scenarios } = useSensorsStore();

    const [nameFilter, setNameFilter] = useState("All");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [triggerTypeFilter, setTriggerTypeFilter] = useState("All");

    const nameOptions = useMemo(() => {
        return Array.from(new Set(scenarios.map((s: Scenario) => s.name).filter(Boolean)));
    }, [scenarios]);

    const filteredScenarios = scenarios.filter((scenario: Scenario) => {
        const matchesName = nameFilter === "All" || scenario.name === nameFilter;

        const scenarioDate = scenario.timestamp ? new Date(scenario.timestamp) : null;
        const fromDate = dateFrom ? new Date(dateFrom) : null;
        const toDate = dateTo ? new Date(dateTo) : null;
        const matchesDate =
            (!fromDate || (scenarioDate && scenarioDate >= fromDate)) &&
            (!toDate || (scenarioDate && scenarioDate <= toDate));

        const matchesTrigger = triggerTypeFilter === "All" ||
            (scenario.triggerConditionId && scenario.triggerConditionId.toLowerCase().includes(triggerTypeFilter.toLowerCase()));

        return matchesName && matchesDate && matchesTrigger;
    });

    const resetFilters = () => {
        setNameFilter("All");
        setDateFrom("");
        setDateTo("");
        setTriggerTypeFilter("All");
    }

    return (
        <div className="alerts-page-container">
            <ScenariosControlBar
                nameFilter={nameFilter}
                setNameFilter={setNameFilter}
                nameOptions={nameOptions}
                dateFrom={dateFrom}
                setDateFrom={setDateFrom}
                dateTo={dateTo}
                setDateTo={setDateTo}
                triggerTypeFilter={triggerTypeFilter}
                setTriggerTypeFilter={setTriggerTypeFilter}
                resetFilters={resetFilters}
            />
            <ScenariosTable scenarios={filteredScenarios} />
        </div>
    );
};

export default Scenarios;

