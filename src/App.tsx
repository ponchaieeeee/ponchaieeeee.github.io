import { useState, useEffect } from 'react';
import { FormDialog } from "./FormDialog"
import { TodoItem } from "./TodoItem";
import { ToolBar } from "./ToolBar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { indigo, pink } from '@mui/material/colors';
import { SideBar } from "./SideBar";
import { QR } from "./QR";
import { ActionButton } from "./ActionButton";
import { AlertDialog } from "./AlertDialog";
import localforage from 'localforage';

type Filter = 'all' | 'checked' | 'unchecked' | 'removed';

const theme = createTheme({
  palette: {
      primary: {
          main: indigo[500],
          light: '#757de8',
          dark: '#002984',
      },
      secondary: {
          main: pink[500],
          light: '#ff6090',
          dark: '#b0003a',
      },
  },
})

export const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>('all');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  const handleOnSubmit = () => {
    if (!text){
      setDialogOpen(false);
      return;
    } 

    const newTodo: Todo = {
      value: text,
      id: new Date().getTime(),
      checked: false,
      removed: false,
    };
    setTodos([newTodo, ...todos]);
    setText('');
    setDialogOpen(false);
  }
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const handleOnEdit = (id: number, value: string) => {
    const deepCopy = todos.map((todo) => ({ ...todo }));

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.value = value;
      }
      return todo;
    });
    setTodos(newTodos);
  }
  const handleOnCheck = (id: number, checked: boolean) => {
    const deepCopy = todos.map((todo) => ({ ...todo }));

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });
    setTodos(newTodos);
  }
  const handleOnRemove = (id: number, removed: boolean) => {
    const deepCopy = todos.map((todo) => ({ ...todo }));

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.removed = !removed;
      }
      return todo;
    });
    setTodos(newTodos);
  }
  const handleOnEmpty = () => {
    const newTodos = todos.filter((todo) => !todo.removed);
    setTodos(newTodos);
  }
  const onToggleDrawer = () => setDrawerOpen(!drawerOpen);
  const handleOnSort = (filter: Filter) => {
    setFilter(filter);
  }
  const onToggleQR = () => setQrOpen(!qrOpen);
  const onToggleDialog = () => {
    setDialogOpen(!dialogOpen);
    setText('');
  }
  const onToggleAlert = () => setAlertOpen(!alertOpen);

  useEffect(() => {
    localforage
      .getItem('todo-20200101')
      .then((value) => setTodos(value as Todo[]))
      .catch((err) => console.log(err));
  }, []);
  
  useEffect(() => {
    localforage
      .setItem('todo-20200101', todos)
      .catch((err) => console.log(err));
  }, [todos]);

  return(
      <ThemeProvider theme={theme}>
      <ToolBar filter={filter} onToggleDrawer={onToggleDrawer} />
      <SideBar 
        drawerOpen={drawerOpen}
        onToggleDrawer={onToggleDrawer}
        onSort={handleOnSort}
        onToggleQR={onToggleQR}
      />
      <QR open={qrOpen} onClose={onToggleQR} />
      <FormDialog 
        text={text} 
        onChange={handleOnChange} 
        onSubmit={handleOnSubmit} 
        dialogOpen={dialogOpen}
        onToggleDialog={onToggleDialog}
      />
      <AlertDialog
        alertOpen={alertOpen}
        onToggleAlert={onToggleAlert}
        onEmpty={handleOnEmpty}
      />
      <TodoItem 
        todos={todos} 
        filter={filter} 
        onCheck={handleOnCheck} 
        onEdit={handleOnEdit} 
        onRemove={handleOnRemove} 
      />
      <ActionButton
        todos={todos}
        filter={filter}
        onToggleDialog={onToggleDialog}
        onToggleAlert={onToggleAlert}
        dialogOpen={dialogOpen}
      />
      </ThemeProvider>
  );
};