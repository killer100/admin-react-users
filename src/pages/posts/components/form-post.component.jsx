import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const FormPostComponent = ({ open, onClose, post, onExited }) => (<Dialog
	open={open}
	onClose={onClose}
	onExited={onExited}
	aria-labelledby="form-dialog-title"
>
	{post.value && <DialogTitle id="form-dialog-title">{post.value.title}</DialogTitle>}

	<DialogContent>
		{post.loading && "Cargando..."}
		{post.value &&
			<DialogContentText>
				{post.value.body}
			</DialogContentText>
		}
	</DialogContent>
	<DialogActions>
		<Button onClick={onClose} color="primary">
			Cancel
	  </Button>
		<Button onClick={onClose} color="primary">
			Subscribe
	  </Button>
	</DialogActions>
</Dialog>)

export default FormPostComponent;