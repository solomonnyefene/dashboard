

import { createStore, applyMiddleware } from 'redux';
import promise from '../src/Promise';
import { createLogger } from 'redux-logger';
import {reducers} from './reducers/index'




const store = createStore(reducers, {}, applyMiddleware(
    promise,
    createLogger({ collapsed: true }),
));

export  {store};