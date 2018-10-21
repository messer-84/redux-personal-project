// Core
import { fromJS, List } from 'immutable';
// Types
import { types } from './types';
// import tasks from '../../components/Scheduler/tasks';

// console.log('ins', tasks);

const initialState = List([]);

console.log('init state', initialState);

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TASK:
            console.log('state', state);

            // return state;
            return state.unshift(fromJS({
                id:        action.payload.id,
                message:   action.payload.message,
                completed: false,
                favorite:  false,
            }));
        case types.TOGGLE_FAVORITE_TASK:
            // console.log('state - case', state);

            // const newState = state.map((task, ind) => {
            //     if (ind === action.payload) {
            //         console.log('task check', task);
            //
            //         return {
            //             ...task,
            //             favorite: !task.favorite,
            //         };
            //     }
            //     console.log('another', task);
            //
            //     return task;
            //
            // });
            // console.log('newState', newState);

            //
            // return [...state, newState];
            console.log('last', state);

            return state;
        default:
            return state;
    }
};
