import React, {
	useEffect
} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormPostComponent from './components/form-post.component';

const styles = (theme) => ({
	card: {
		minWidth: 275,
		marginTop: 10,
		marginBottom: 10
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

class PostsComponent extends React.Component {

	handleClickVerMas = (id) => () => {
		this.props.openModalPost();
		this.props.getPost(id);
	};

	handleCloseModal = () => {
		this.props.clearPostData();
		this.props.closeModalPost();
	}

	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		const { classes, data, ui } = this.props;
		return <div>
			{data.posts.loading && 'Cargando...'}
			{data.posts.items.map(x => <Card className={classes.card} key={x.id}>
				<CardContent>
					<Typography variant="h6" component="h4">
						{x.title}
					</Typography>
					<Typography component="p">
						{x.body}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" color="primary" onClick={this.handleClickVerMas(x.id)}>Ver más</Button>
				</CardActions>
			</Card>)}
			<FormPostComponent open={ui.postContainer.modalPostOpen} handleClose={this.handleCloseModal} post={data.post}></FormPostComponent>
		</div>;
	}
}

export default withStyles(styles)(PostsComponent);