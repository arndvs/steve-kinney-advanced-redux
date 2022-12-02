import { useReducer } from 'react';
import {
    moreEfficientReducer,
    lessEfficientReducer,
    decrement,
    increment,
    reset,
  } from '../../features/counter-reducer';

const Counter = () => {


  const [state, dispatch] = useReducer( moreEfficientReducer, { count: 0 });
//   const [state, dispatch] = useReducer( lessEfficientReducer, { count: 0 }); // This works as well

  return (
    <section className="flex flex-col items-center w-2/3 bg-white border-4 shadow-lg border-primary-500 m-12">
       <div className="text-xl text-center">Redux Reducer example</div>
       <div className="text-md ">not in Redux Store</div>
      <div className="gap-8 p-8 text-center space-y-4">
          <h2>Days Since the Last Accident</h2>
          <p className="text-6xl">{state.count}</p>
          <div className="flex gap-2">
            <button onClick={() => dispatch(decrement(1))}>➖ Decrement</button>
            <button onClick={() => dispatch(reset())}>🔁 Reset</button>
            <button onClick={() => dispatch(increment(1))}>➕ Increment</button>
          </div>
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="number" value={0} onChange={() => {}} />
              <button className="mt-4 p-4" type="submit">Update Counter</button>
            </form>
          </div>
      </div>
    </section>
  );
};

export default Counter;
