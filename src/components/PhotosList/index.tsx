import {useEffect} from "react";

// Store
import {useAppDispatch, useAppSelector} from "../../store";
import {getPhotosList, selectList, selectIsLoading} from "../../store/photo";

// Components
import PhotosListItem from "./PhotosListItem";


const PhotosList = () => {
    const dispatch = useAppDispatch();
    const photosList = useAppSelector(selectList);
    const isLoading = useAppSelector(selectIsLoading);

    useEffect(() => {
        dispatch(getPhotosList());
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <section>
            <ul>
                {photosList.map(photo => (
                    <PhotosListItem
                        key={photo.id}
                        photo={photo}
                    />
                ))}
            </ul>
        </section>
    );
};

export default PhotosList;