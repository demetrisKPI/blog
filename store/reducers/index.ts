import posts from './posts';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	posts
});

export default rootReducer

export type AppState = ReturnType<typeof rootReducer>
