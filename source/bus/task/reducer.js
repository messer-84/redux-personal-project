// Types

import { TOGGLE_FAVORITE_TASK, ADD_TASK } from './types';
// import tasks from '../../components/Scheduler/tasks';

// console.log('ins', tasks);

const initialState = [
    {
        "id":        "xjh",
        "message":   "Успешно пройти React-интенсив компании Lectrum",
        "completed": false,
        "favorite":  true,
    },
    {
        "id":        "xjr",
        "message":   "Взять автограф у Джареда Лето",
        "completed": false,
        "favorite":  false,
    }
];

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    id:        action.payload.id,
                    message:   action.payload.message,
                    completed: false,
                    favorite:  false,
                }
            ];
        case TOGGLE_FAVORITE_TASK:
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
