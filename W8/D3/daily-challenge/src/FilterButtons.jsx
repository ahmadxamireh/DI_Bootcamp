import { useContext } from "react";
import TaskContext from "./TaskContext";

function FilterButtons() {
    const { state, dispatch } = useContext(TaskContext);

    const filters = [ "all", "completed", "active" ];

    return (
        <div>
            {filters.map(filter => (
                <label key={filter}>
                    <input
                        type="radio"
                        name="tasks-filter"
                        value={filter}
                        checked={state.filter === filter}
                        onChange={(e) => dispatch({ type: "FILTER_TASKS", payload: e.target.value })}
                    />
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </label>
            ))}
        </div>
    );
}

export default FilterButtons;