import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './features/counter-slice';
import { tasksReducer } from './features/tasks-slice';
import { usersReducer } from './features/users-slice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: tasksReducer,
    users: usersReducer,
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;

export default store;
