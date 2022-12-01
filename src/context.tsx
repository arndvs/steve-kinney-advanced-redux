import { createContext } from 'react';

import data from './api/supertasker/data.json';

const ApplicationContext = createContext(data);

export default ApplicationContext;
