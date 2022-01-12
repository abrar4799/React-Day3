import {createStore} from 'redux';
import { MovieReducer } from './reducer';

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(MovieReducer , composeWithDevTools() )

export default store ; 