import React, {useEffect} from 'react';

// Components
import AlbumListItem from "../AlbumListItem";

// Store
import {getAlbumsList, selectIsLoading, selectList} from "../../../store/album";
import {useAppDispatch, useAppSelector} from "../../../store";


const AlbumList = () => {
    const dispatch = useAppDispatch();
    const albumsList = useAppSelector(selectList);
    const isLoading = useAppSelector(selectIsLoading);

    useEffect(() => {
        dispatch(getAlbumsList());
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return <ul className="flex flex-wrap">
        {albumsList.map(album => (
            <AlbumListItem
                key={album.id}
                album={album}
            />
        ))}
    </ul>;
};

export default AlbumList;