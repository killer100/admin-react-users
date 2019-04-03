import {
    Types as layoutTypes
} from '../../actions/ui/layout.actions';

import {
    createReducer
} from 'reduxsauce'

const INITIAL_STATE = {
    sidebarOpen: false
};

const openSidebar = (state = INITIAL_STATE, action) => ({
    ...state,
    sidebarOpen: true
});

const closeSidebar = (state = INITIAL_STATE, action) => ({
    ...state,
    sidebarOpen: false
});


export const HANDLERS = {
    [layoutTypes.OPEN_SIDEBAR]: openSidebar,
    [layoutTypes.CLOSE_SIDEBAR]: closeSidebar
}

export default createReducer(INITIAL_STATE, HANDLERS);