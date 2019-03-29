import axios from 'axios';
import {
	ACTIONS_TYPES
} from '../constants';

const getPostAction = dispatch => async (postId) => {

	dispatch({
		type: ACTIONS_TYPES.GET_POST_BEGIN
	});

	axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((response) => {

		const action = {
			type: ACTIONS_TYPES.GET_POST_SUCCESS,
			payload: {
				post: response.data,
			}
		};

		setTimeout(() => {
			dispatch(action);
		}, 500);

	}).catch(error => {

		const action = {
			type: ACTIONS_TYPES.GET_POST_FAILURE,
			payload: {
				error,
			}
		};

		dispatch(action);
	});

};

const getPostsAction = (dispatch) => async () => {

	dispatch({
		type: ACTIONS_TYPES.GET_POSTS_BEGIN,
	});

	axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {

		const action = {
			type: ACTIONS_TYPES.GET_POSTS_SUCCESS,
			payload: {
				posts: response.data,
			}
		};
		setTimeout(() => {
			dispatch(action);
		}, 500);

	}).catch(error => {

		const action = {
			type: ACTIONS_TYPES.GET_POSTS_FAILURE,
			payload: {
				error
			}
		};

		dispatch(action);
	});

};

export {
	getPostAction,
	getPostsAction
};

export const clearPostDataAction = () => ({
	type: ACTIONS_TYPES.CLEAR_POST_DATA
});