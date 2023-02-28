
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getlist = createAsyncThunk(
    'posts/getlist',
    async () => {
        return fetch(`https://fakestoreapi.com/products`).then(y => y.json())

    }
)

const initialState = {
    data: [],
    isLoading: null
}

const Reducertoool = createSlice({
    name: "posts",
    initialState,
    extraReducers: {
        [getlist.pending]: (state, action) => {
            state.isLoading = "loading"
        },
        [getlist.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = "success"
        },
        [getlist.rejected]: (state, action) => {
            state.isLoading = "failed"
        }
    }
});



export default Reducertoool.reducer
