import {createAction} from "@reduxjs/toolkit";
import albumActionTypes from "./album.actionTypes";
import {IAlbumState} from "./types";


export const getAlbums = createAction<IAlbumState>(albumActionTypes.GET_ALBUMS);