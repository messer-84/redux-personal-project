// Types

import { TOGGLE_FAVORITE_TASK } from './types';
import { tasks } from '../../components/Scheduler/tasks';

const initialState = tasks;

export const taskReducer = (state = initialState, action) => {
    console.log('reducer', action.payload);

    switch (action.type) {
        case TOGGLE_FAVORITE_TASK:
            console.log('reducer', action.payload);

            return state;
        default:
            return state;
    }
};
