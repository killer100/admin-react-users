import {
    createActions
} from 'reduxsauce';

const {
    Creators,
    Types
} = createActions({
    openModalPost: [],
    closeModalPost: [],
});

export {
    Creators,
    Types
};