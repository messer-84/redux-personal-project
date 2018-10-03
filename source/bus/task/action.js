import uniqid from 'uniqid';
// Types
import { TOGGLE_FAVORITE_TASK } from './types';

export const addTask = (message) => {
    return {
        type:    'ADD_TASK',
        payload: {
            id: uniqid.time(),
            message,
        },

    };
};

export const toggleFavoriteTask = (taskIndex) => {
    console.log('taskIndexAction', taskIndex);

    return {
        type:    TOGGLE_FAVORITE_TASK,
        payload: taskIndex,
    };

};
