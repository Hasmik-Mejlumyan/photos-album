import {IAlbum} from "../../types";


export interface IAlbumState {
    list: IAlbum[];
    entry: IAlbum | null;
    isLoading: boolean;
    error: string | null;
}