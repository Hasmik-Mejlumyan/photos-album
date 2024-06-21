import request from "../utils/request";

const photoService = {
    getPhotos<T>() {
        return request<T>("GET", `albums/1/photos?_limit=2`)
    },
};

export default photoService;