//  inicia mostrando todos por defecto

import { SET_VICIVILITY_FILTER } from "../actions/actions";

let initialState = 'SHOW_ALL'

export const filterReducer = (state= initialState, action)=>{
    switch (action.type) {
        case SET_VICIVILITY_FILTER:
            return action.payload.filter
        default:
            return state;
    }
}