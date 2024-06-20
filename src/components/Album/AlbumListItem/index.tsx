import {FC} from "react";

// Types
import {IAlbumListItemProps} from "./types";


const AlbumListItem: FC<IAlbumListItemProps> = ({album}) => {
    return <li className="flex gap-2 dirirection-column p-1 bg-slate-200">
        <span>Album {album.id}</span>
        <span>{album.title}</span>
    </li>;
};

export default AlbumListItem;