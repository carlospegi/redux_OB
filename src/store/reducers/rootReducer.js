import { combineReducers } from "@reduxjs/toolkit";
import { filterReducer } from "./filterReducer";
import { todoReducer } from "./todosReducers";

// estado inicial de todos los reducer de sus swtch case que controlan 

export const rootReducer = combineReducers(
    {
        // state name  --- reducer that will control it

        todosState: todoReducer,
        filterState : filterReducer
    }
)