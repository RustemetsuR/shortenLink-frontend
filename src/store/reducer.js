import { CHANGE_INPUT_VALUE, GET_SHORTEN_LINK, GET_SHORTEN_LINK_FAILURE } from "./actionsTypes";

const initialState = {
    shortenLink: '',
    inputValue: '',
    error: null,
};

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case CHANGE_INPUT_VALUE:
            return {...state, inputValue: action.value};
        case GET_SHORTEN_LINK: 
            return {...state, shortenLink: action.shortenLink};
        case GET_SHORTEN_LINK_FAILURE:
            return {...state, error: action.error}
        default:
            return state;
    };
};

export default reducer