import {
	connect
} from 'react-redux';
import {
	Creators as layoutActions
} from '../../../redux/actions/ui/layout.actions';
import Layout from './layout';

const mapStateToProps = (state) => state.layout;

const mapDispatchToProps = {
	openSidebar: layoutActions.openSidebar,
	closeSidebar: layoutActions.closeSidebar
};

const LayoutContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Layout);

export default LayoutContainer;