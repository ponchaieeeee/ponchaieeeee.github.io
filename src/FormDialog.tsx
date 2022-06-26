import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

type Props = {
    text: string;
    dialogOpen: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onSubmit: () => void;
    onToggleDialog: () => void;
}

export const FormDialog = (props: Props) => {
    return (
        <Dialog fullWidth open={props.dialogOpen} onClose={props.onToggleDialog}>
            {/* <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    props.onSubmit();
                }}
            >
                <div style={{ margin: '1em' }}> */}
                    <DialogContent>
                        <TextField 
                            variant="standard"
                            label="Input Task..."
                            value={props.text} 
                            onChange={(e) => props.onChange(e)} 
                            fullWidth
                            margin="dense"
                            autoFocus
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button color="secondary" onClick={props.onSubmit}>
                            Add
                        </Button>
                    </DialogActions>
                {/* </div>
            </form> */}
        </Dialog>
    );
};