import request from "../utils/request";

const photoService = {
    getPhotos<T>() {
        return request<T>("GET", "photos")
    },
};

export default photoService;