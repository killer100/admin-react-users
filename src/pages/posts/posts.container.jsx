import PostsComponent from './posts.component';
import {
	connect
} from 'react-redux';

import {
	getPostAction,
	getPostsAction,
	clearPostDataAction
} from '../../redux/actions/posts-actions';

import {
	Creators as uiActions
} from '../../redux/actions/ui-actions';

const mapStateToProps = (state) => ({
	ui: state.postPage.ui,
	data: state.postPage.data
});

const mapDispatchToProps = (dispatch) => {

	const getPost = getPostAction(dispatch);

	const fetchPosts = getPostsAction(dispatch);

	const clearPostData = () => dispatch(clearPostDataAction());

	const openModalPost = () => dispatch(uiActions.postPageOpenModal());

	const closeModalPost = () => dispatch(uiActions.postPageCloseModal());

	return {
		getPost,
		fetchPosts,
		openModalPost,
		closeModalPost,
		clearPostData
	};
};

const PostsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostsComponent);

export default PostsContainer;