import {
	createActions
} from 'reduxsauce';

const {
	Creators,
	Types
} = createActions({
	postPageOpenModal: ['payload'],
	postPageCloseModal: ['payload'],
});

export {
	Creators,
	Types
};