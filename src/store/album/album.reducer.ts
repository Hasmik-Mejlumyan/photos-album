import {createReducer} from "@reduxjs/toolkit";
import {getAlbums} from "./album.action";
import {IAlbumState} from "./types";

const initialState: IAlbumState = {
    list: [],
    entry: null,
    loading: false,
    error: null
}

const albumReducer = createReducer(initialState, builder => {
    builder
        // Get albums
        .addCase(getAlbums.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.list = action.payload;
        })
        .addCase(getAlbums.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getAlbums.rejected, (state, action) => {
            state.loading = false;
            state.error = state.error = action.error.message || 'Something went wrong';
        })

        // Default state
        .addDefaultCase(state => state)
});

export default albumReducer;