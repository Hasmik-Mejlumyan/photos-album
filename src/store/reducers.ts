import albumReducer from "./album/album.reducer";
import photoReducer from "./photo/photo.reducer";


const reducers = {
    album: albumReducer,
    photo: photoReducer,
}

export default reducers;