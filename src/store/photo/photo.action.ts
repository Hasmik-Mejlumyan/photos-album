import {createAsyncThunk} from "@reduxjs/toolkit";
import photoActionTypes from "./photo.actionTypes";
import {IPhoto} from "../../types";
import photoService from "../../services/photo";


export const getPhotosList = createAsyncThunk<IPhoto[]>(photoActionTypes.GET_PHOTOS, async () => {
    try {
        const response = await photoService.getPhotos<IPhoto[]>();

        if (!response.data) {
            throw new Error('Something went wrong');
        }

        return response.data;
    } catch (error: any) {
        console.log(error)
        throw error.message;
    }
});