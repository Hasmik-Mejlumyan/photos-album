import {createAsyncThunk} from "@reduxjs/toolkit";
import albumActionTypes from "./album.actionTypes";
import {IAlbum} from "../../types";
import albumService from "../../services/album";


export const getAlbums = createAsyncThunk<IAlbum[]>(albumActionTypes.GET_ALBUMS, async () => {
    try {
        const response = await albumService.getAlbums<IAlbum[]>();

        if (!response.data) {
            throw new Error('Something went wrong');
        }

        return response.data;
    } catch (error: any) {
        console.log(error)
        throw error.message;
    }
});