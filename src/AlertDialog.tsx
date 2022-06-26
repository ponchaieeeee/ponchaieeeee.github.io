import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { styled } from '@mui/material/styles';

type Props = {
    alertOpen: boolean;
    onToggleAlert: () => void;
    onEmpty: () => void;
}

const Alert = styled(Dialog)(() => ({
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, sans-serif',
}));

export const AlertDialog = (props: Props) => {
    return (
        <Alert fullWidth open={props.alertOpen} onClose={props.onToggleAlert}>
            <DialogTitle>Alert</DialogTitle>
            <DialogContent>
                <DialogContentText>Do you really want to delete these items?</DialogContentText>
                <DialogContentText>This process cannot be undone.</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onToggleAlert} color="primary">
                    Cancel
                </Button>
                <Button 
                    onClick={() => {
                        props.onEmpty();
                        props.onToggleAlert();
                    }} 
                    color="secondary"
                    autoFocus
                >
                    OK
                </Button>
            </DialogActions>
        </Alert>
    )
}