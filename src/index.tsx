import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';

import Supertasker from './components/supertasker/supertasker';
import Jetsetter from './components/jetsetter/jetsetter';
import Counter from './components/counter/counter';

import { makeServer } from './api/supertasker';

import ApplicationContext from './context';
import data from './api/supertasker/data.json';
import './index.css';




const environment = process.env.NODE_ENV;
makeServer({ environment });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ApplicationContext.Provider value={data}>
    <Provider store={store}>
        <div className="flex justify-between m-4 cols-3">
          <div className="bg-pink-100 border border-pink-300 w-1/3 flex justify-center">
              <Supertasker />
          </div>
            <div className="items-start bg-green-100 border border-green-300 w-1/3 flex justify-center">
                <Counter />
            </div>
            <div className="items-start bg-blue-100 border border-blue-300 w-1/3 flex justify-center">
              <Jetsetter />
          </div>
          </div>
    </Provider>
    </ApplicationContext.Provider>
  </React.StrictMode>,
);
