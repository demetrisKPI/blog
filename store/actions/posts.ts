import { FETCH_ALL_POSTS_SUCCESS, FETCH_ALL_POSTS_ERROR } from './types'
import { Posts } from '../../types'

const fetchAllPosts = (posts: Posts) => dispatch => {
	posts ?
		dispatch({ type: FETCH_ALL_POSTS_SUCCESS, payload: posts }) :
		dispatch({ type: FETCH_ALL_POSTS_ERROR })
}

export default fetchAllPosts;
