// Core
import { combineReducers } from 'redux';

// Reducers
import { taskReducer } from '../bus/task/reducer';

export const rootReducer = combineReducers({
    tasks: taskReducer,
});
