import { createSlice } from "@reduxjs/toolkit";
;
const initialState = {
    prompt: '',
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        globalSearch: (state, action) => {
            if (state.prompt) {
                state.prompt = ''
            }
            state.prompt = action.payload
        }
    }
})

export const { globalSearch } = searchSlice.actions;
export default searchSlice.reducer;