import {IAlbum} from "../../types";


export interface IAlbumState {
    list: IAlbum[];
    entry: IAlbum | null;
    loading: boolean;
    error: string | null;
}