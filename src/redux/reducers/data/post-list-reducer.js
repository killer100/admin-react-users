import {
	createReducer
} from 'reduxsauce'

import {
	Types as postTypes
} from '../../actions/data/posts.actions';

const INITIAL_STATE = {
	loading: false,
	items: [],
	error: null,
};

const fetchPostsBegin = (state = INITIAL_STATE) => ({
	...state,
	error: null,
	loading: true,
});

const fetchPostsSuccess = (state = INITIAL_STATE, action) => ({
	items: action.posts,
	error: false,
	loading: false,
});

const fetchPostsFailure = (state = INITIAL_STATE, action) => ({
	items: [],
	error: action.error,
	loading: false,
});

const HANDLERS = {
	[postTypes.FETCH_POSTS_BEGIN]: fetchPostsBegin,
	[postTypes.FETCH_POSTS_SUCCESS]: fetchPostsSuccess,
	[postTypes.FETCH_POSTS_FAILURE]: fetchPostsFailure
};

export default createReducer(INITIAL_STATE, HANDLERS);