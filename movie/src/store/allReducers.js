import { combineReducers } from "redux";
import MovieReducer from './reducer';
import GetMoviesReducer from './movies'

export default combineReducers({
    reducer: MovieReducer,
    movies: GetMoviesReducer , 



})