import {
	combineReducers
} from 'redux';

import postContainerReducer from './ui/post-container-reducer';
import postListReducer from './data/post-list-reducer';
import postReducer from './data/post-reducer';
import layoutReducer from './ui/layout.reducer';


export default combineReducers({
	layout: layoutReducer,
	postPage: combineReducers({
		ui: combineReducers({
			postContainer: postContainerReducer
		}),
		data: combineReducers({
			posts: postListReducer,
			post: postReducer
		})
	})
});