import {createSelector} from "@reduxjs/toolkit";

import {RootState} from "../configureStore";

const photoState = (state: RootState) => state.photo;


export const selectList = createSelector(
    photoState,
    (state) => state.list
);

export const selectEntry = createSelector(
    photoState,
    (state) => state.entry
);

export const selectIsLoading = createSelector(
    photoState,
    (state) => state.isLoading
);