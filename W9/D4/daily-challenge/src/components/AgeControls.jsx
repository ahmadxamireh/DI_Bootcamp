import { ageDownAsync, ageUpAsync } from "../redux/ageSlice.js";
import { useDispatch, useSelector } from "react-redux";

export default function AgeControls() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.age.loading);
    return (
        <div>
            <button onClick={() => dispatch(ageUpAsync())} disabled={loading}>+1</button>
            <button onClick={() => dispatch(ageDownAsync())} disabled={loading}>-1</button>
        </div>
    );
}