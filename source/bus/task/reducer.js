// Core
import { List, Map } from 'immutable';
// Types
import { types } from './types';

const initialState = List();

console.log('init state', initialState);

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TASK:
            const newTask = Map({
                id:        action.payload.id,
                message:   action.payload.message,
                completed: false,
                favorite:  false,
            });

            return state.unshift(newTask);
        case types.TOGGLE_FAVORITE_TASK:
            return state.update(action.payload, (item) =>
                item.set("favorite", !item.get("favorite")));
        case types.TOGGLE_COMPLETED_TASK:
            return state.update(action.payload, (item) =>
                item.set("completed", !item.get("completed")));

        default:
            return state;
    }
};
