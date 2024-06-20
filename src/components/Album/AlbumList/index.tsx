import React, {useEffect} from 'react';

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

    return <ul>
        <li>Album 1</li>
        <li>Album 2</li>
        <li>Album 3</li>
    </ul>;
};

export default AlbumList;