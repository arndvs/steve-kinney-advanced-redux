import { configureStore } from '@reduxjs/toolkit';


// import each individual reducer from the slices folder
import { counterReducer}  from './slices/counter-slice';
import { tasksReducer } from './slices/tasks-slice';
import { usersReducer } from './slices/users-slice';


const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: tasksReducer,
    users: usersReducer,
  }
});

// Export the type of the store state. ReturnType is a TypeScript utility type that transforms
// the type definition of a function into the type of its return value so RootState contains
// the type definition that matches all the data in the redux store
export type RootState = ReturnType<typeof store.getState>;

// Export the type of the store dispatch actions into the redux store
export type AppDispatch = typeof store.dispatch;

export default store;
