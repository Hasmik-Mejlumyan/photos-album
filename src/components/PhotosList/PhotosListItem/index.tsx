import {FC} from 'react';
import {IPhotoListItemProps} from "./types";


const PhotosListItem:FC<IPhotoListItemProps> = ({photo}) => {
    return <li className="flex gap-2 flex-col justify-evenly p-1 rounded-md bg-slate-200 h-40 shadow-lg hover:bg-slate-400 ease-in duration-300">
        <span>Album {photo.id}</span>
        <div>
            <img src={photo.url} alt="" className="h-16 w-16"/>
        </div>
        <span>{photo.title}</span>
    </li>;
};

export default PhotosListItem;
