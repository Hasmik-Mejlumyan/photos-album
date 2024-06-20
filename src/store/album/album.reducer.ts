import {createReducer} from "@reduxjs/toolkit";
import {getAlbumsList} from "./album.action";
import {IAlbumState} from "./types";

const initialState: IAlbumState = {
    list: [],
    entry: null,
    isLoading: false,
    error: null
}

const albumReducer = createReducer(initialState, builder => {
    builder
        // getAlbumsList
        .addCase(getAlbumsList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.list = action.payload;
        })
        .addCase(getAlbumsList.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getAlbumsList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = state.error = action.error.message || 'Something went wrong';
        })

        // Default state
        .addDefaultCase(state => state)
});

export default albumReducer;