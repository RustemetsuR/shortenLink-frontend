import { CHANGE_INPUT_VALUE, CHANGE_LINK_INFO, CHANGE_LINK_INFO_FAILURE } from "./actionsTypes";

const initialState = {
    shortenLink: '',
    originalLink: '',
    inputValue: '',
    error: null,
};

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case CHANGE_INPUT_VALUE:
            return {...state, inputValue: action.value};
        case CHANGE_LINK_INFO: 
            return {...state, shortenLink: action.info};
        case CHANGE_LINK_INFO_FAILURE:
            return {...state, error: action.error}
        default:
            return state;
    };
};

export default reducer