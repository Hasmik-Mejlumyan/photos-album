import {createSelector} from "@reduxjs/toolkit";

import {RootState} from "../configureStore";

const albumState = (state: RootState) => state.album;


export const selectList = createSelector(
    albumState,
    (state) => state.list
)

export const selectEntry = createSelector(
    albumState,
    (state) => state.entry
)