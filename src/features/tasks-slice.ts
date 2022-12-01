import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
// PayloadAction is a type that helps us define the type of the action payload
// nanoid is a library that generates unique ids
// createSlice is a function that helps us create a slice of the store


export type TasksState = { // this is the type of the state
    entities: Task[]; // this is the type of the entities - Task[] is an array of Task
  };

  const initialState: TasksState = {
    entities: []
  };

  const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.entities.unshift(action.payload); // unshift adds the new task to the beginning of the array
        },
        removeTask: (state) => state,

    }
  });
