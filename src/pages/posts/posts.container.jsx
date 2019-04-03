import PostsComponent from './posts.component';
import {
	connect
} from 'react-redux';

import {
	Creators as postActionsCreators,
	AsyncActions
} from '../../redux/actions/data/posts.actions';

import {
	Creators as postPageActions
} from '../../redux/actions/ui/posts-page.actions';

const mapStateToProps = (state) => ({
	ui: state.postPage.ui,
	data: state.postPage.data
});

const mapDispatchToProps = dispatch => ({
	getPost: AsyncActions.getPost(dispatch),
	fetchPosts: AsyncActions.fetchPosts(dispatch),
	openModalPost: () => dispatch(postPageActions.openModalPost()),
	closeModalPost: () => dispatch(postPageActions.closeModalPost()),
	clearPostData: () => dispatch(postActionsCreators.clearPostData())
});

const PostsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostsComponent);

export default PostsContainer;