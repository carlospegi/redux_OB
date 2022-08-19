//  contenido del Store de la APP 



import { legacy_createStore as createStore } from 'redux';

//import { createStore } from "redux"
import { rootReducer } from "../reducers/rootReducer"

/// crear store de APP y vamos a dar un reducer --> rootReducer

// store asociado a un reducer

export const createAPPStore = ()=>{
    let store = createStore(rootReducer)
    return store
}