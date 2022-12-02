import {
    // moreEfficientReducer,
    // lessEfficientReducer,
    decrement,
    increment,
    reset,
    incrementByAmount
  } from '../../features/counter-slice';
import { useAppDispatch, useAppSelector } from '../../state/hooks';

const Counter = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(state => state.counter.value);



  return (
    <section className="flex flex-col items-center w-2/3 bg-white border-4 shadow-lg border-primary-500 m-12">
      <div className="gap-8 p-8 text-center space-y-4">
          <h2>Days Since the Last Accident</h2>
          <p className="text-6xl">
            {count}
          </p>
          <div className="flex gap-2">
                <button className="bg-primary-200 hover:bg-primary-400 font-bold py-2 px-4 rounded" onClick={() => dispatch(decrement())}>➖</button>
                <button className="bg-primary-200 hover:bg-primary-400 font-bold py-2 px-4 rounded" onClick={() => dispatch(reset())}>🔁 Reset</button>
                <button  className="bg-primary-200 hover:bg-primary-400 font-bold py-2 px-4 rounded" onClick={() => dispatch(increment())}>➕ </button>

          </div>
          <div>
            <form onSubmit={(e) => e.preventDefault()}>

              <input type="number" defaultValue={0}  onChange={(e) => dispatch(incrementByAmount(Number(e.target.value)))} />
              <button className="mt-4 p-4" type="submit">Update Counter</button>
            </form>
          </div>
      </div>
    </section>
  );
};

export default Counter;


//   const [state, dispatch] = useReducer( moreEfficientReducer, { count: 0 });
//   const [state, dispatch] = useReducer( lessEfficientReducer, { count: 0 }); // This works as well
