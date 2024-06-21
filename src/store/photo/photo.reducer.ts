import {createReducer} from "@reduxjs/toolkit";
import {IPhotoState} from "./types";
import {getPhotosList} from "./photo.action";

const initialState: IPhotoState = {
    list: [],
    entry: null,
    isLoading: false,
    error: null
};


const photoReducer = createReducer(initialState, builder => {
    builder
        // getPhotosList
        .addCase(getPhotosList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.list = action.payload;
        })
        .addCase(getPhotosList.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getPhotosList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = state.error = action.error.message || 'Something went wrong';
        })

    // Default state
    .addDefaultCase(state => state);
});

export default photoReducer;

