import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/'
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';

const makeStore: MakeStore = (context: Context) => createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export const wrapper = createWrapper(makeStore, { debug: false });
