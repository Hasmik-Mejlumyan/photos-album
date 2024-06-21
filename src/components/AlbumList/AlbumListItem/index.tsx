import {FC} from "react";
import {Link} from "react-router-dom";

// Types
import {IAlbumListItemProps} from "./types";


const AlbumListItem: FC<IAlbumListItemProps> = ({album}) => {
    return <li className="flex gap-2 flex-col justify-evenly p-1 rounded-md bg-slate-200 h-40 shadow-lg hover:bg-slate-400 ease-in duration-300">
        <span>Album {album.id}</span>
        <span>{album.title}</span>
        <Link
            to={`/album/${album.id}`}
            className="text-white-600 bg-amber-600 hover:bg-amber-700 px-2 py-1 rounded cursor-pointer"
        >
            View Photos
        </Link>
    </li>;
};

export default AlbumListItem;