import {
	ACTIONS_TYPES
} from "../../constants";

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
	value: action.payload.post,
	error: false,
	loading: false,
});

const getPostFailure = (state = INITIAL_STATE, action) => ({
	value: null,
	error: action.payload.error,
	loading: false,
});

const clearPostData = (state = INITIAL_STATE, action) => ({
	...state,
	value: null
});

const HANDLERS = {
	[ACTIONS_TYPES.GET_POST_BEGIN]: getPostBegin,
	[ACTIONS_TYPES.GET_POST_SUCCESS]: getPostSuccess,
	[ACTIONS_TYPES.GET_POST_FAILURE]: getPostFailure,
	[ACTIONS_TYPES.CLEAR_POST_DATA]: clearPostData
};

export default createReducer(INITIAL_STATE, HANDLERS);