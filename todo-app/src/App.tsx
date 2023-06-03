import React, { useState } from 'react';
import Todos from './components/todos';
import { Grid, Typography , TextField, Button} from '@mui/material';
import './App.css';
import { CenterFocusStrong, Margin } from '@mui/icons-material';
import { markAsUntransferable } from 'worker_threads';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function App() {
  const [checked, setChecked] = React.useState([0]);
  const [todos, setTodos] = useState<string[]>(['building todo-app', 'solving problem', 'push to git']);
  const [item, setItem] = useState('')

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const onAddItems = (e:any) => {
    e.preventDefault();
    setTodos([...todos, item])


  }

  const onDeleteTodo = (value:string) => {
    const filteredData = todos.filter(item => item!==value)
    setTodos(filteredData)
  }
  return (
    <Grid container spacing={3}>
      <Grid item lg={12}>
        <Typography variant='h3' align='center'>Todo App</Typography>
        <Grid item lg={12}>
          <form className='form-container' onSubmit={(e) => onAddItems(e)}>
        <TextField id="outlined-basic" label="Enter Todo" variant="outlined" className='text-filed' onChange={(e:any) => setItem(e.target.value)}/>
        <Button variant='contained' color='secondary' className='btn-field' onClick={onAddItems} 
        sx={{ padding: 1, margin: 2 }}
        > Add </Button>
        </form>
        </Grid>
      
      </Grid>
      <Grid item lg={12} justifyContent="center" container>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map((value:string) => {
        

        return (
          <ListItem
            key={`${value}`}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <DeleteOutlineIcon onClick={() => onDeleteTodo(value)}/>
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined}  dense>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText  primary={`${value}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
      </Grid>
      
    </Grid>
  );
}

export default App;
