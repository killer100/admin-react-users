import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const FormPostComponent = ({ open, handleClose, post }) => (<Dialog
	open={open}
	onClose={handleClose}
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
		<Button onClick={handleClose} color="primary">
			Cancel
	  </Button>
		<Button onClick={handleClose} color="primary">
			Subscribe
	  </Button>
	</DialogActions>
</Dialog>)

export default FormPostComponent;