import {
	combineReducers
} from 'redux';

import postContainerReducer from './ui/post-container-reducer';
import postListReducer from './data/post-list-reducer';
import postReducer from './data/post-reducer';


export default combineReducers({
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