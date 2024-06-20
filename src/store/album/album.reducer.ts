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
        .addCase(getAlbums, (state, action) => {
            // state.list = action.payload;
        })
        .addDefaultCase(state => state)
});

export default albumReducer;