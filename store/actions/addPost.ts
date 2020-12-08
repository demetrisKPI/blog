import axios from 'axios'
import { Post } from '../../types'

export const addPost = (post: Post) => () => {
	axios.post(`https://simple-blog-api.crew.red/posts`, post)
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		});
}