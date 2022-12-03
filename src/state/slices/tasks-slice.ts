import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
// PayloadAction is a type that helps us define the type of the action payload
// nanoid is a library that generates unique ids
// createSlice is a function that helps us create a slice of the store

// Task is being imported from src\global.d.ts

import data from '../../api/supertasker/data.json';

export type TasksState = { // this is the type of the state
    entities: Task[]; // this is the type of the entities - Task[] is an array of Task
  };

  const initialState: TasksState = {
    entities: data.tasks,
  };

  type DraftTask = RequireOnly<Task, 'title'>; // RequireOnly global type combining Partial & Pick utility Types that has all the properties of the Type where some are optional and others are required

export const createTask = (draftTask: DraftTask): Task => {

    return { id: nanoid() , ...draftTask, }; // everything that is on draftTask, and id. nanoid() generates a unique id

}

  export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            const task = createTask(action.payload);
            state.entities.unshift(task); // unshift adds the new task to the beginning of the array
        },
        removeTask: (state, action: PayloadAction<Task['id']>) => {
            const index = state.entities.findIndex(
              (task) => task.id === action.payload,
            );
            state.entities.splice(index, 1);
          },

    }
  });

  export const tasksReducer = tasksSlice.reducer;
  export const { addTask, removeTask } = tasksSlice.actions;

  export default tasksSlice;
