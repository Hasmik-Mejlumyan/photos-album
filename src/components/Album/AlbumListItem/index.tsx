import {FC} from "react";

// Types
import {IAlbumListItemProps} from "./types";


const AlbumListItem: FC<IAlbumListItemProps> = ({album}) => {
    return <li className="flex gap-2 flex-col justify-evenly p-1 rounded-md cursor-pointer bg-slate-200 h-40 shadow-lg hover:bg-slate-400 ease-in duration-300">
        <span>Album {album.id}</span>
        <span>{album.title}</span>
    </li>;
};

export default AlbumListItem;