import axios from 'axios';
import { createActions } from 'reduxsauce'

const {
	Creators,
	Types
} = createActions({
	fetchPostsBegin: [],
	fetchPostsSuccess: ['posts'],
	fetchPostsFailure: ['error'],
	getPostBegin: [],
	getPostSuccess: ['post'],
	getPostFailure: ['error'],
	clearPostData: [],
});

const AsyncActions = {

	getPost: dispatch => (postId) => {

		dispatch(Creators.getPostBegin());

		axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((response) => {
			dispatch(Creators.getPostSuccess(response.data));
		}).catch(error => {
			dispatch(Creators.getPostFailure(error));
		});

	},

	fetchPosts: (dispatch) => () => {

		dispatch(Creators.fetchPostsBegin());

		axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {

			dispatch(Creators.fetchPostsSuccess(response.data));

		}).catch(error => {

			dispatch(Creators.fetchPostsFailure(error));
		});

	}
};

export {
	AsyncActions,
	Creators,
	Types
};