import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './state/store';

import Supertasker from './components/supertasker/supertasker';
import Jetsetter from './components/jetsetter/jetsetter';
import Counter from './components/counter/counter';

import { makeServer } from './api/supertasker';

import ApplicationContext from './context';
import data from './api/supertasker/data.json';
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
    <ApplicationContext.Provider value={data}>
    <Provider store={store}>
        <div className="bg-pink-100 border border-pink-300 flex justify-center overflow-auto flex-1 pb-12">
              <Supertasker />
          </div>
        <div className="flex justify-between m-4 h-1/2 space-x-5">

            <div className="items-start bg-green-100 border border-green-300 w-1/2 flex justify-center flex-1">
                <Counter />
            </div>
            <div className="items-start bg-blue-100 border border-blue-300 w-1/2 flex justify-center flex-1">
              <Jetsetter />
          </div>
          </div>
    </Provider>
    </ApplicationContext.Provider>
  </React.StrictMode>,
);
