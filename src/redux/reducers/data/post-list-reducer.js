import {
	ACTIONS_TYPES
} from "../../constants";

import {
	createReducer
} from 'reduxsauce'

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
	items: action.payload.posts,
	error: false,
	loading: false,
});

const fetchPostsFailure = (state = INITIAL_STATE, action) => ({
	items: [],
	error: action.payload.error,
	loading: false,
});

const HANDLERS = {
	[ACTIONS_TYPES.GET_POSTS_BEGIN]: fetchPostsBegin,
	[ACTIONS_TYPES.GET_POSTS_SUCCESS]: fetchPostsSuccess,
	[ACTIONS_TYPES.GET_POSTS_FAILURE]: fetchPostsFailure
};

export default createReducer(INITIAL_STATE, HANDLERS);