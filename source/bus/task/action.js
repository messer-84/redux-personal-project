import uniqid from 'uniqid';
// Types
import { types } from './types';

export const taskActions = {
    addTask: (message) => {
        return {
            type:    types.ADD_TASK,
            payload: {
                id: uniqid.time(),
                message,
            },

        };
    },

    toggleFavoriteTask: (taskIndex) => {
        return {
            type:    types.TOGGLE_FAVORITE_TASK,
            payload: taskIndex,
        };
    },
    toggleCompletedTask: (taskIndex) => {
        return {
            type:    types.TOGGLE_COMPLETED_TASK,
            payload: taskIndex,
        };
    },
};
