import Fab from '@mui/material/Fab';
import CreateIcon from '@mui/icons-material/CreateRounded';
import DeleteIcon from '@mui/icons-material/DeleteRounded';
import { styled } from '@mui/material/styles';

type Props = {
    filter: Filter;
    todos: Todo[];
    dialogOpen: boolean;
    onToggleDialog: () => void;
    onToggleAlert: () => void;
}

const FabButton = styled(Fab)({
    position: 'fixed',
    right: 15,
    bottom: 15,
});

export const ActionButton = (props: Props) => {
    const removable = props.todos.filter((todo) => todo.removed).length !== 0;
    return (
        <>
            {props.filter === 'removed' ? (
                <FabButton 
                    onClick={props.onToggleAlert}
                    disabled={!removable}
                    color="secondary"
                >
                    <DeleteIcon />
                </FabButton>
            ) : (
                <FabButton 
                    onClick={props.onToggleDialog}
                    disabled={props.filter === 'checked' || props.dialogOpen}
                    color="secondary"
                >
                    <CreateIcon />
                </FabButton>
            )}
        </>
    )

}