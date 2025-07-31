import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userList: [],
        status: "idle",
        error: null
    },
    reducers: {
        usersFetched: (state, action) => {
            state.userList = action.payload;
            state.status = "succeeded";
            state.error = null;
        },
        fetchFailed: (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        },
        setLoading: (state) => {
            state.status = "loading";
        }
    }
});

export const { usersFetched, fetchFailed, setLoading } = userSlice.actions;
export default userSlice.reducer;

// thunk action center
export const fetchUsers = () => async (dispatch) => {
    dispatch(setLoading());
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            // throws for 4xx and 5xx responses
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        dispatch(usersFetched(data));
    } catch (err) {
        dispatch(fetchFailed(err.message));
    }
};