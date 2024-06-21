import {IPhoto} from "../../types";

export interface IPhotoState {
    list: IPhoto[];
    entry: IPhoto | null;
    isLoading: boolean;
    error: string | null;
}