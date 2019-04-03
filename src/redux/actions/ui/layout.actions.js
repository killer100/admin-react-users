import {
    createActions
} from 'reduxsauce';

const {
    Creators,
    Types
} = createActions({
    openSidebar: [],
    closeSidebar: [],
});

export {
    Creators,
    Types
};