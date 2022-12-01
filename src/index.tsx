import React from 'react';
import ReactDOM from 'react-dom/client';
import Supertasker from './components/supertasker/supertasker';

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
      <Supertasker />
    </ApplicationContext.Provider>
  </React.StrictMode>,
);
