import { Types as postTypes } from '../../actions/data/posts.actions';

import {
	createReducer
} from 'reduxsauce'

const INITIAL_STATE = {
	loading: false,
	value: null,
	error: null,
};

const getPostBegin = (state = INITIAL_STATE) => ({
	...state,
	error: null,
	loading: true,
});

const getPostSuccess = (state = INITIAL_STATE, action) => ({
	value: action.post,
	error: false,
	loading: false,
});

const getPostFailure = (state = INITIAL_STATE, action) => ({
	value: null,
	error: action.error,
	loading: false,
});

const clearPostData = (state = INITIAL_STATE, action) => ({
	...state,
	value: null
});

const HANDLERS = {
	[postTypes.GET_POST_BEGIN]: getPostBegin,
	[postTypes.GET_POST_SUCCESS]: getPostSuccess,
	[postTypes.GET_POST_FAILURE]: getPostFailure,
	[postTypes.CLEAR_POST_DATA]: clearPostData
};

export default createReducer(INITIAL_STATE, HANDLERS);