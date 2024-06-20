import request from "../utils/request";

const albumService = {
    getAlbums<T>() {
        return request<T>("GET", "albums")
    },
}

export default albumService;