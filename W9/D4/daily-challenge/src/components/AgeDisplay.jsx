import { useSelector } from "react-redux";

export default function AgeDisplay() {
    const age = useSelector(state => state.age.value);
    const loading = useSelector(state => state.age.loading);

    return (
        <div>
            <h2>{loading ? "Updating..." : `Age: ${age}`}</h2>
        </div>
    );
}