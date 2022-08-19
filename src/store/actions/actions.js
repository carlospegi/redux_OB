//  funcion que retorna alguna accion  

//  ADD   y  Cambiar completa o incompleta


let nextTodoId = 0


export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO= 'TOGLE_TODO'
export const SET_VICIVILITY_FILTER = 'SET_VICIVILITY_FILTER '


/**
 * 
 * @param {string} text 
 * @returns action ADD_TODO */

export const addTodo =(text)=>{
return {
    type: ADD_TODO,
    payload:{
        id: nextTodoId ++,
        text 

    }
}
}

//------------------------------------------------

/**
 * 
 * @param {number} id 
 * @returns action TOGLE_TODO
 */

export const toggleTodo = (id)=>{
    return{
        type: TOGGLE_TODO,
        payload:{
            id
        }
    }
}

//-----------------------------------------------------------
/**
 * 
 * @param {string} filter 
 * @returns action SET_VICIVILITY_FILTER 
 */
export const setVisivilityFilter=(filter)=>{
return {
    type: SET_VICIVILITY_FILTER,
    payload:{
        filter
    }
}
}