import {
	combineReducers
} from 'redux';

import postContainerReducer from './ui/post-container-reducer';
import postListReducer from './data/post-list-reducer';
import postReducer from './data/post-reducer';
import layoutReducer from './ui/layout.reducer';
import customerListReducer from './data/customer/customer-list.reducer';
import customerContainerReducer from './ui/admin/customer-container.reducer';


export default combineReducers({
	layout: layoutReducer,
	admin: combineReducers({
		customersPage: combineReducers({
			ui: customerContainerReducer,
			data: combineReducers({
				customers: customerListReducer
			})
		})
	}),
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