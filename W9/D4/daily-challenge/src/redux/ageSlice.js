import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const ageSlice = createSlice({
    name: 'age',
    initialState: {
        value: 0,
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ageUpAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(ageUpAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.value += action.payload;
            })
            .addCase(ageDownAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(ageDownAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.value -= action.payload;
            });
    }
});

export default ageSlice.reducer;

// thunk actions
export const ageUpAsync = createAsyncThunk(
    'age/ageUpAsync', async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return 1;
    }
);

export const ageDownAsync = createAsyncThunk(
    'age/ageDownAsync', async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return 1;
    }
);