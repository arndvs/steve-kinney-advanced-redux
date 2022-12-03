import { createAsyncThunk, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
// PayloadAction is a type that helps us define the type of the action payload
// nanoid is a library that generates unique ids
// createSlice is a function that helps us create a slice of the store

// Task is being imported from src\global.d.ts

import { removeUser } from './users-slice';

export type TasksState = { // this is the type of the state
    entities: Task[]; // this is the type of the entities - Task[] is an array of Task
    loading?: boolean; // this is the type of the loading - boolean
  };

type DraftTask = RequireOnly<Task, 'title'>; // RequireOnly is a custom global type combining Partial & Pick utility Types that has all the properties of the Type where some are optional and others are required

export const createTask = (draftTask: DraftTask): Task => {
    return { id: nanoid() , ...draftTask, }; // everything that is on draftTask, and id. nanoid() generates a unique id
}

const initialState: TasksState = {
    entities: [],
    loading: false,
  };

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (thunkApi): Promise<Task[]> => { // promise of Task[]
    const response = await fetch('/api/tasks').then(response =>
        response.json(),
        );
    return response.tasks;
  });

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

    },
    // go through every task and remove the task that matches the id of the user that was removed
    extraReducers: (builder) => {
        builder.addCase(removeUser, (state, action) => { // bringing in removeUser from users-slice
            const userId = action.payload;
            for (const task of state.entities) {
              if (task.user === userId) {
                task.user = undefined;
              }
            }
        });
        builder.addCase(fetchTasks.pending, (state) => {
            state.loading = true;
            });

        builder.addCase(fetchTasks.fulfilled, (state, action) => { // filled, pending, rejected are the three states of a promise
           state.loading = false
            state.entities = action.payload;
        });
    },
    });




  export const tasksReducer = tasksSlice.reducer;
  export const { addTask, removeTask } = tasksSlice.actions;

  export default tasksSlice;
