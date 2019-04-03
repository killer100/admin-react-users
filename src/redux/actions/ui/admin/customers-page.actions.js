import {
	createActions
} from 'reduxsauce';

const {
	Creators,
	Types
} = createActions({
	setFilter: ['value'],
});

export {
	Creators,
	Types
};