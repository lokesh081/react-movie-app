import { ReducerCases } from "./Constants";

export const initialState = {
    IS_AUTHORISED : true,
    API_KEY : "7eb6dd8c",
    API_URL : "https://api.tvmaze.com",
    shows : [],
    current_location : 'home',
    is_show_selected : false,
    selected_show_id : null,
    prev_state : null,
    user_search : ''
}

export const reducer = (instate , action) => {

    const state = {...instate,prev_state : instate};

    switch(action.type){

        case action.type = ReducerCases.SET_LOCATION:
            return {...state,current_location : action.location , is_show_selected : action.is_show_selected , selected_show_id : action.selected_show_id };

        case action.type = ReducerCases.SET_SHOWS:
            return {...state,shows : action.shows};

        case action.type = ReducerCases.SET_IS_SHOW_SELECTED:
            return {...state, selected_show_id : action.id , is_show_selected : true};

        case action.type = ReducerCases.SET_PREV_STATE :
            return {...state,prev_state : action.prev_state};

        case action.type = ReducerCases.UPDATE_STATE :
            return action.state;

        case action.type = ReducerCases.USER_SEARCH:
            return {...state, user_search : action.user_search };

        default:
            return {state};
        
    }
}