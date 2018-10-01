// Types
import { TOGGLE_FAVORITE_TASK } from './types';

export const toggleFavoriteTask = (taskIndex) => {
    console.log('taskIndexAction', taskIndex);

    return {
        type:    TOGGLE_FAVORITE_TASK,
        payload: taskIndex,
    };

};
