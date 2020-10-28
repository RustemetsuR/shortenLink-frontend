import axiosApi from "../axiosApi";
import { CHANGE_INPUT_VALUE, CHANGE_LINK_INFO, CHANGE_LINK_INFO_FAILURE } from "./actionsTypes"

export const changeInput = value => {
    return { type: CHANGE_INPUT_VALUE, value };
};

const changeLinkInfo = info => {
    return { type: CHANGE_LINK_INFO, info };
};

const fetchShortLinkFailure = error =>{
    return {type: CHANGE_LINK_INFO_FAILURE, error};
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