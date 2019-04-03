import {
	Types as uiTypes
} from '../../actions/ui/posts-page.actions';

import {
	createReducer
} from 'reduxsauce'

const INITIAL_STATE = {
	modalPostOpen: false
};

const openModal = (state = INITIAL_STATE, action) => ({
	...state,
	modalPostOpen: true
});

const closeModal = (state = INITIAL_STATE, action) => ({
	...state,
	modalPostOpen: false
});


export const HANDLERS = {
	[uiTypes.OPEN_MODAL_POST]: openModal,
	[uiTypes.CLOSE_MODAL_POST]: closeModal
}

export default createReducer(INITIAL_STATE, HANDLERS);