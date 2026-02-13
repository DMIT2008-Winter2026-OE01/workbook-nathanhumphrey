import { Box, Button, Grid, List, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export default function TodoList() {
  const [todoText, setTodoText] = useState('');
  const [allTodos, setAllTodos] = useState([]); // default to an empty array

  const textFieldHandler = (event) => {
    // just log the value, for now
    setTodoText(event.target.value);
  };

  const addTodoToList = (event) => {
    // just like before, we're going to prevent the default action
    event.preventDefault();
    // create a new list that has allTodos and the new todos.
    const newAllTodoList = [...allTodos, todoText];
    console.log(newAllTodoList);
    // set the todoList
    setAllTodos(newAllTodoList);
    // reset the value of the todo text.
    setTodoText('');
  };

  return (
    <Box sx={{ mt: 4 }}>
      <form onSubmit={addTodoToList}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Typography component="h2" variant={'h4'}>
              {allTodos.length === 0 ? 'Nothing Todo' : `${allTodos.length} Thing${allTodos.length > 1 ? 's' : ''} Todo`}
            </Typography>
          </Grid>

          <Grid size={10}>
            <TextField
              id="todo-input"
              label="What are you going to do?"
              variant="outlined"
              fullWidth
              onChange={textFieldHandler}
              value={todoText}
            />
          </Grid>
          <Grid size={10}>
            <Button
              variant="contained"
              type="submit"
            >
              Add Todo
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid size={12}>
        Current input text: {todoText}<br />
        Current TodoList: {allTodos.toString()}
      </Grid>
      {/* display the todos */}
      <Grid container spacing={2}>
        <Grid size={10}>
          <List>
            {allTodos.map((todoItem, index) => {
              return <ListItem key={index} divider sx={{ paddingLeft: 0 }}>
                <ListItemText>
                  <Typography>
                    {todoItem}
                  </Typography>
                </ListItemText>
              </ListItem>;
            })}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}