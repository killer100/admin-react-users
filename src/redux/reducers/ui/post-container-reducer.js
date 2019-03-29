import {
	Types as uiTypes
} from '../../actions/ui-actions';

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
	[uiTypes.POST_PAGE_OPEN_MODAL]: openModal,
	[uiTypes.POST_PAGE_CLOSE_MODAL]: closeModal
}

export default createReducer(INITIAL_STATE, HANDLERS);