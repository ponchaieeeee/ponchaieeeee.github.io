import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckIcon from '@mui/icons-material/CheckCircleOutline';
import UndoIcon from '@mui/icons-material/Undo';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

import { styled } from '@mui/material/styles';

type Props = {
    todos: Todo[];
    filter: Filter;
    onEdit: (id: number, value: string) => void;
    onCheck: (id: number, checked: boolean) => void;
    onRemove: (id: number, removed: boolean) => void;
}

const Container = styled('div')({
    margin: '0 auto',
    maxWidth: '640px',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, sans-serif',
});

const TodoCard = styled(Card)(({ theme }) => ({
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    padding: theme.spacing(1),
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, sans-serif',
}));

const Form = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontSize: '16px',
}));

const Button = styled('button')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
}));

const ButtonContainer = styled('div')(({theme}) => ({
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}));

export const TodoItem = (props: Props) => {

    const filteredTodos = props.todos.filter((todo) => {
        switch (props.filter) {
          case 'all':
            return !todo.removed;
          case 'checked':
            return todo.checked && !todo.removed;
          case 'removed':
            return todo.removed;
          case 'unchecked':
            return !todo.checked && !todo.removed;
          default:
            return true;
        }
    })

    return(
        <Container>
            {filteredTodos.map((todo) => {
                return (
                    <TodoCard key={todo.id}>
                        <Form>
                            <TextField fullWidth value={todo.value} variant="standard" onChange={(e) => props.onEdit(todo.id, e.target.value)} />
                        </Form>
                        <ButtonContainer>
                            <Button onClick={() => props.onCheck(todo.id, todo.checked)}>
                                {todo.checked ? (
                                    <CheckIcon />
                                ) : (
                                    <RadioButtonUncheckedIcon />
                                )}
                                <Typography>Done</Typography>
                            </Button>
                            <Button onClick={() => props.onRemove(todo.id, todo.removed)}> 
                                {todo.removed ? (
                                    <Tooltip title="Undo">
                                        <UndoIcon />
                                    </Tooltip>
                                ) : (
                                    <Tooltip title="Delete">
                                        <DeleteIcon />
                                    </Tooltip>
                                )}
                            </Button>
                        </ButtonContainer>
                    </TodoCard>
                );
            })}
        </Container>
    )
}