import { FETCH_ALL_POSTS_SUCCESS, FETCH_ALL_POSTS_ERROR } from '../actions/types';
import { initialState } from '../../types'

const posts = (state: initialState = { posts: [] }, action) => {
	switch(action.type){
		case FETCH_ALL_POSTS_SUCCESS:
			return {
				...state,
				posts: action.payload
			}
		case FETCH_ALL_POSTS_ERROR:
			return {
				...state,
				posts: { notFound: true } 
			}
		default: 
			return state
	}
}
export default posts;