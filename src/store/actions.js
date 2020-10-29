import axiosApi from "../axiosApi";
import { CHANGE_INPUT_VALUE, GET_SHORTEN_LINK, GET_SHORTEN_LINK_FAILURE } from "./actionsTypes"

export const changeInput = value => {
    return { type: CHANGE_INPUT_VALUE, value };
};

const changeLinkInfo = shortenLink => {
    return { type: GET_SHORTEN_LINK, shortenLink };
};

const fetchShortLinkFailure = error =>{
    return {type: GET_SHORTEN_LINK_FAILURE, error};
};


export const fetchShortLink = data => {
    return async dispatch => {
        try {
            const response = await axiosApi.post('/', data);
            dispatch(changeLinkInfo('http://localhost:8000/' + response.data.shortenLink));
        } catch (e) {
            dispatch(fetchShortLinkFailure(e));
        };
    };
};