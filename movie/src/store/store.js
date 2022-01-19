import {applyMiddleware, createStore} from 'redux';
import { MovieReducer } from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(MovieReducer , composeWithDevTools(applyMiddleware( thunk)) )

export default store ; 