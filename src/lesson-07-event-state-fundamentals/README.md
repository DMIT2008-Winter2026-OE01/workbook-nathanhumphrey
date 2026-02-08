# Lesson 08 - React Events and State Fundamentals [ToDo List]

## Why?

State is what makes React so powerful, it's a great way of keeping in sync what is displayed in your component and your JavaScript code.

## Setup Steps
1. Create and Run the Next.js Project
    - Create the project
    `> npx create-next-app@latest state-events-fundamental-example`
    *Ensure you select the correct options for this course*
    - Go in to the new folder
    `> cd state-events-fundamental-example`
    - Run the project to ensure correct installation
    `> npm run dev`

2. Stop your project (`ctrl+c`) and install [MUI](https://mui.com/material-ui/getting-started/installation/)
    - install the required packages
    `> npm install @mui/material @emotion/react @emotion/styled @mui/icons-material`
    - add the Roboto font
    `> npm install @fontsource/roboto`
    - import the fonts into the `_app.js`
    ```js
    // _app.js
    import "@/styles/globals.css"; // remove this line
    import '@fontsource/roboto/300.css';
    import '@fontsource/roboto/400.css';
    import '@fontsource/roboto/500.css';
    import '@fontsource/roboto/700.css';
    ```
    - add the provided [CSSBaseline](https://mui.com/material-ui/react-css-baseline/)

3. Startup the project to ensure everything is still working as expected.
   `> npm run dev`

## Intro to Local Component State

1. In your index page
    - Remove all JSX and style imports at the top of the file (it should just be an export of the Home component function)
    - add a container ([docs here](https://mui.com/material-ui/react-container/))
      ```jsx
      // pages/index.js
      import TodoList from '@/components/TodoList';
      import { Container, Typography } from '@mui/material';

      export default function Home() {
        return (
          <Container>
            <Typography component="h1" variant="h3">State and Events Fundamentals Example</Typography >
            <Typography>This is the home page for the State and Events Fundamentals example.</Typography>
          </Container>
        );
      }
      ```
2. Create a `TodoList` component in a newly created `components/` folder.
    - We're going to use the following MUI components to build or TodoList app:
      - [Button](https://mui.com/material-ui/react-button/#basic-button)
      - [Grid](https://mui.com/material-ui/react-grid/)
      - [IconButton](https://mui.com/material-ui/api/icon-button/)
      - [CloseIcon](https://mui.com/material-ui/material-icons/?query=close&selected=Close)
      - [List](https://mui.com/material-ui/api/list/)
      - [ListItem](https://mui.com/material-ui/api/list-item/)
      - [ListItemText](https://mui.com/material-ui/api/list-item-text/)
      - [TextField](https://mui.com/material-ui/react-text-field/)
      
    - Start by creating a basic form for Todo input:
      ```jsx
      // components/TodoList.jsx
      import { Box, Button, Grid, TextField, Typography } from '@mui/material';

      export default function TodoList() {

        return (
          <Box sx={{ mt: 4 }}>
            <form>
              <Grid container spacing={2}>
                <Grid size={12}>
                  <Typography component="h2" variant={'h4'}>
                    Nothing Todo
                  </Typography>
                </Grid>

                <Grid size={10}>
                  <TextField
                    id="todo-input"
                    label="What are you going to do?"
                    variant="outlined"
                    fullWidth
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
          </Box>
        );
      }
      ```
    - Import and add the TodoList to the page:
      ```jsx
      // pages/index.js
      import TodoList from '@/components/TodoList';
      ...
      <Container>
        <Typography component="h1" variant="h3">State and Events Fundamentals Example</Typography >
        <Typography>This is the home page for the State and Events Fundamentals example.</Typography>
        <TodoList />
      </Container>
      ```

3. We'll use an event to listen to changes with the `onChange` react event
    - in your `TodoList` component add a function that will take an "event" as a parameter. Note this "event" you can think of as the same as your event object from vanilla JS, except with a bit more in it. Here's what the function looks like:
      ```jsx
      const textFieldHandler = (event) => {
        // just log the value, for now
        console.log(event.target.value);
      };
      ```
      *Note: this is going to just print out the value of the input to the console.*
    - On your `TextField` component we're going to add the `onChange` property with the value of the function `textFieldHandler` that we've just created.
      ```jsx
      <TextField
        id="todo-input"
        label="What are you going to do?"
        variant="outlined"
        fullWidth
        onChange={textFieldHandler}
      />
      ```
   - Observe that when you write in the text field input the event is fired and a console message is printed
4. Let's add an event on the form that listens to onSubmit events.
    - first create a function in our `TodoList` component
      ```jsx
      const addTodoToList = (event) => {
        // just like before, we're going to prevent the default action
        event.preventDefault();
        console.log('clicked');
      };
      ```
    - on the `form` add the function `addTodoToList` as the value `onSubmit` property on the component:
      ```jsx
      ...
      <form onSubmit={addTodoToList}>
      ...
      ```
    - Observe that when you click this button the event is fired and a console message is printed
5. Let's create a stateful variable using reacts' `useState` hook and let's make the text field set this stateful variable any time its' value changes. We are creating a *controlled input* ([https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)):
    - import useState from react
      ```jsx
      import { useState } from 'react';
      ...
      ```
    - in the root of the `TodoList` component add a stateful variable named `todoText` like below.
      ```jsx
      // right under the defintion of the funciton signature
      const [todoText, setTodoText] = useState('');
      ```
      Note: the argument being passed into the  `useState('')` is the original value of the `todoText` variable.
    - In the `textFieldHandler` use the `setTodoText` function 
      ```jsx
      const textFieldHandler = (event) => {
        console.log(event.target.value);
        setTodoText(event.target.value);
      }
      ```
    - on the `TextField` set the value to the `todoText`, and everytime the input changes fire the `textFieldHandler` function, it will update the value:
      ```jsx
      <TextField
        id="todo-input"
        label="What are you going to do?"
        variant="outlined"
        fullWidth
        value={todoText}
        onChange={textFieldHandler}
      />
      ```
      Note: use `setTodoText` when you want to change the variable `todoText` (currently being done in the `textFieldHandler` function)
    - **Now we have a way to access the input value in our component.**

## Working with Local Component State

1. Let's see the difference on the page. Under the button add the following code to see our state changing.
    ```jsx
    <Grid size={12}>
      Current input text: {todoText}
    </Grid>
    ```
    You should now see the input value printed to the page as you type.
2. Let's add one more stateful variable called `allTodos` to manage any todos that have been added. We're going to use `setAllTodos` as the setter function like below:
    ```jsx
    ...
    export default function TodoList() {
      const [todoText, setTodoText] = useState('');
      const [allTodos, setAllTodos] = useState([]); // default to an empty array
    ...
    ```
    *Note: You can see here that the original value of `allTodos` is an empty list.*
3.  In the `addTodoToList` function, we're going to do a few things. We're going to add the `todoText`, to the list of `allTodos` and we're going to reset the `todoText`. Change the `addTodoToList` with the following code:
    ```jsx
    const addTodoToList = () => {
      // just like before, we're going to prevent the default action
      event.preventDefault();
      console.log('clicked');
      // create a new list that has allTodos and the new todos.
      const newAllTodoList = [...allTodos, todoText];
      console.log(newAllTodoList);
      // set the todoList
      setAllTodos(newAllTodoList);
      // reset the value of the todo text.
      setTodoText('');
    }
    ```
4.  Display the list right under our our current input so that we can see the differnces of the list:
    ```jsx
      <Grid size={12}>
        Current input text: {todoText} <br/>
        Current TodoList: {allTodos.toString()}
      </Grid>
    ```
5.  Let's use [MUI lists](https://mui.com/material-ui/react-list/#basic-list) to render the the list of todos. This is going to use the following components: `List`, `ListItem`, `ListItemText` (be sure import them correctly).
    - We're going to use our knowledge of JSX and how to render lists. Add the following righ after the closing `form` tag:
      ```jsx
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
      ```
      Note: you can see that we loop through the todos using map. You can also see above that the parameters of map are `todoItem` and `index`, the todoItem is the item in the list, and the index is only used for the keys.

6.  Removed the following lines and see what the app looks like now:
    ```jsx
    <Grid size={12}>
      Current input text: {todoText} <br />
      Current TodoList: {allTodos.toString()}
    </Grid>
    ```

## Student Exercise

Update the example with the following features:

- Render each Todo item with button that can be used to **remove** a Todo from the list
  - Requires event listener and state updates
- Update the list heading so that it reflects the number of items currently in the list:
  - Requires conditional rendering