import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './state/store';

import Supertasker from './components/supertasker/supertasker';
import Jetsetter from './components/jetsetter/jetsetter';
import Counter from './components/counter/counter';

import { makeServer } from './api/supertasker';


import './index.css';
import { fetchTasks } from './state/slices/tasks-slice';




const environment = process.env.NODE_ENV;
makeServer({ environment });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchTasks()) // fetch the tasks on initial load

root.render(
  <React.StrictMode>

    <Provider store={store}>
        <div className="flex justify-center flex-1 pb-12 overflow-auto bg-pink-100 border border-pink-300">
              <Supertasker />
          </div>
        <div className="flex justify-between m-4 space-x-5 h-1/2">

            <div className="flex items-start justify-center flex-1 w-1/2 bg-green-100 border border-green-300">
                <Counter />
            </div>
            <div className="flex items-start justify-center flex-1 w-1/2 bg-blue-100 border border-blue-300">
              <Jetsetter />
          </div>
          </div>
    </Provider>

  </React.StrictMode>,
);
