import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const task = {
                id: uuidv4(),
                description: action.payload,
            }
            return [...state, task];
        },
        removeTask: (state, action) => {
            let newState = [...state];
            newState = newState.filter(item => item.id !== action.payload);
            return [...newState];
        }

    }
})

export const { addTask, removeTask } = tasksSlice.actions;

export default tasksSlice.reducer;