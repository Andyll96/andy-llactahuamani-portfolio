import { GET_ALBUMS, ALBUMS_ERROR, SET_LOADING, SET_CURRENT_ALBUM, CLEAR_CURRENT_ALBUM, SET_IMAGES, IMAGES_ERROR } from './types';
import axios from 'axios';

export const getAlbums = () => async dispatch => {
    try {
        setLoading();
        const res = await axios.get('/albums');
        console.log('Albums Retrieved in Actions');
        // console.log(res.data);
    
        dispatch({
            type: GET_ALBUMS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: ALBUMS_ERROR,
            payload: error.response.data
        })
    }

};

export const setCurrentAlbum = album => dispatch => {
    dispatch ({
        type: SET_CURRENT_ALBUM,
        payload: album
    })
}

// images folder in public folder must be called 'img' and not 'images', there's is a naming conflict when using axios. It'll try to pull the images from the public folder instead of mongodb
export const setImages = album => async dispatch => {
    try {
        const res = await axios.get('/images');
        console.log('ALL Images Retrieved');
        console.log('RES.DATA', res.data);

        // if the currentALbum's image object is null OR the currentAlbum's photoCount is 0 OR the currentAlbum's image object doesn't equal the 
        if (album.images === null || album.photoCount === 0) {
            console.log('IMAGES ARE NULL');
            dispatch({
                type: SET_IMAGES,
                payload: null
            })
        } else {
            // TODO: THIS WORKS BUT IS IT BETTER TO USE THE FILTERED STATE???
            let filtered = res.data.filter(image => image.albumName === album.title);
            console.log('FILTERED OVER HERE!!!', filtered);

            dispatch({
                type: SET_IMAGES,
                payload: filtered
            })
        }
    } catch (error) {
        dispatch({
            type: IMAGES_ERROR,
            payload: error.response.data
        })
    }
}

export const clearCurrentAlbum = () => dispatch => {
    dispatch ({
        type: CLEAR_CURRENT_ALBUM
    })
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};