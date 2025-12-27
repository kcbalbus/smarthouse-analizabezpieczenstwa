import React, { useMemo, useState } from "react";
import useSensorsStore from "../stores/SensorsStore.ts";
import ScenariosControlBar from "../components/Scenarios/ScenariosControlBar.tsx";
import ScenariosTable from "../components/Scenarios/ScenariosTable.tsx";
import { Scenario } from "../types/StoreTypes.ts";

const Scenarios: React.FC = () => {
    const { scenarios } = useSensorsStore();

    const [nameFilter, setNameFilter] = useState("");
    const [triggerTypeFilter, setTriggerTypeFilter] = useState("All");

    const filteredScenarios = useMemo(() => {
        return scenarios.filter((scenario: Scenario) => {
            const matchesName = nameFilter === "" || scenario.name.toLowerCase().includes(nameFilter.toLowerCase());
            const matchesTrigger = triggerTypeFilter === "All" || scenario.triggerType === triggerTypeFilter;
            return matchesName && matchesTrigger;
        });
    }, [scenarios, nameFilter, triggerTypeFilter]);

    const resetFilters = () => {
        setNameFilter("");
        setTriggerTypeFilter("All");
    }

    return (
        <div className="alerts-page-container">
            <ScenariosControlBar
                nameFilter={nameFilter}
                setNameFilter={setNameFilter}
                triggerTypeFilter={triggerTypeFilter}
                setTriggerTypeFilter={setTriggerTypeFilter}
                resetFilters={resetFilters}
            />
            <ScenariosTable scenarios={filteredScenarios} />
        </div>
    );
};

export default Scenarios;

