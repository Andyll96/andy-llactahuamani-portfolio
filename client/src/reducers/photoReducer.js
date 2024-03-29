import { GET_ALBUMS, ALBUMS_ERROR, SET_LOADING_ALBUMS, SET_LOADING_IMAGES, SET_CURRENT_ALBUM, SET_FILTERED_IMAGES, GET_IMAGES, IMAGES_ERROR, CLEAR_CURRENT_ALBUM, SET_CURRENT_IMAGE, CLEAR_CURRENT_IMAGE } from '../actions/types';


const initialState = {
    albums: null,
    loadingAlbums: null,
    currentAlbum: null,

    images: null,
    loadingImages: false,
    filteredImages: null,
    currentImage: null,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALBUMS:
            return {
                ...state,
                albums: action.payload,
                loadingAlbums: false,
            }
        case GET_IMAGES:
            return {
                ...state,
                images: action.payload,
            }
        case ALBUMS_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload
            }
        case SET_CURRENT_ALBUM:
            console.log(action.payload, 'is now current');
            return {
                ...state,
                currentAlbum: action.payload
            }
        case CLEAR_CURRENT_ALBUM:
            return {
                ...state,
                currentAlbum: null,
                filteredImages: null,
                images: null
            }
        case SET_LOADING_ALBUMS:
            return {
                ...state,
                loadingAlbums: true
            }
        case SET_LOADING_IMAGES:
            return {
                ...state,
                loadingImages: true
            }
        case SET_FILTERED_IMAGES:
            console.log('SETTING FILTERED IMAGES');
            return {
                ...state,
                filteredImages: action.payload
            }
        case IMAGES_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload
            }
        case SET_CURRENT_IMAGE:
            console.log(action.payload, 'is now the current image');
            return{
                ...state,
                currentImage: action.payload
            }
        case CLEAR_CURRENT_IMAGE:
            return{
                ...state,
                currentImage: null
            }
        default:
            return state;
    }
}