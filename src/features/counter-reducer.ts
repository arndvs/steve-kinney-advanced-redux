import {  createAction, createReducer } from '@reduxjs/toolkit'; // createAction is a helper function for defining a Redux action type and creator

type CounterState = { count: number }; // this is the type of the state - it's an object with a count property that is a number


  const increment = createAction('INCREMENT', (amount: number) => { // createAction takes two arguments - the name of the action and an action creator function. The action creator function takes the payload as an argument and returns an object with the payload and the type of the action
    return { payload: amount }; // the action creator function returns an object with the payload and the type of the action
});

  const decrement = createAction('DECREMENT', (amount: number) => {
    return { payload: amount };
  });

  const reset = createAction('RESET'); // createAction can also be used without an action creator function

  type CounterAction = // this is the type of the action - it's a union of the action types
  | ReturnType<typeof increment> // ReturnType is a type that takes a function type as an argument and returns the return type of the function
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>;


  export const counterReducer = createReducer({ count: 0 }, (builder) => { // createReducer takes two arguments - the initial state and a builder function. The builder function takes a builder object as an argument
    builder.addCase(increment, (state, action) => { // builder.addCase takes two arguments - the action creator function and a reducer function. The reducer function takes the state and the action as arguments
      state.count += action.payload; // the reducer function returns the new state - in this case, it increments the count by the amount in the action payload
    });

    builder.addCase(decrement, (state, action) => { // builder.addCase takes two arguments - the action creator function and a reducer function. The reducer function takes the state and the action as arguments
      state.count -= action.payload; // the reducer function returns the new state - in this case, it decrements the count by the amount in the action payload
    });

    builder.addCase(reset, (state) => { //
        state.count = 0;// the reducer function returns the new state - in this case, it resets the count to 0
        }
    );
  });

// the code above replaces the code below with better type safety, less boilerplate, and more efficient code

export const reducer = (state: CounterState, action: CounterAction) => { // the reducer takes the state and the action as arguments and returns the new state
    if (action.type === increment.type) { // if the action type is the same as the increment action type
        return { count: state.count + action.payload }; // return a new state object with the count property incremented by the payload
      }

      if (action.type === decrement.type) { // if the action type is the same as the decrement action type
        return { count: state.count - action.payload }; // return a new state object with the count property decremented by the payload
      }

      if (action.type === reset.type) { // if the action type is the same as the reset action type
        return { count: 0 }; // return a new state object with the count property set to 0
      }

      return state; // if the action type is not one of the above, return the state
};
