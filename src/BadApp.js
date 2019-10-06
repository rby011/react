
/*
 @ref : https://www.freecodecamp.org/news/meet-your-material-ui-your-new-favorite-user-interface-library-6349a1c88a8c/
*/
import React, { Component } from 'react';
import { Typography, TextField, Paper, Button, Grid } from '@material-ui/core/'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider } from '@material-ui/core/'
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

class BadApp extends Component {
  state = {
    exercises: [],
    title: ''
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })

  handleCreate = e => {
    // prevent default page reload
    e.preventDefault();

    // check if 'title' is non-empty
    if (this.state.title) {
      // Set the state with an updater function to mitigate async updates
      // Destructure exercises and title off the prevState object
      // Spread out the exercises on the next state with a new exercise object
      // Reset the title to clear out the input field
      this.setState(({ exercises, title }) => ({
        exercises: [
          ...this.state.exercises,
          { title, id: Date.now() }
        ],
        title: ''
      })
      )
    }
  }

  handleDelete = id => {
    this.setState(({ exercises }) => ({ exercises: exercises.filter(ex => ex.id !== id) }))
  }

  // It's possible to optimize redering procedure with the below structure.
  // We need to separate the below components into 'input' and 'output', 
  // so as to handle each rednering procedure differently. 
  // shouldComponentUpdate(nextProps, nextState){
  //   return this.state.exercises.length !== nextState.exercises.length
  // }

  render() {
    const { title } = this.state;
    const { exercises } = this.state;

    return (
      <Grid container spacing={2} direction='column'>
        <Grid item><Paper>
          <Typography variant='h4' color='primary' align='center' gutterBottom> Excercise </Typography>
          <form onSubmit={this.handleCreate}>
            <Grid container spacing={2} direction='row' justify='center' alignItems='center' alignContent='center'>
              <Grid item>
                <TextField name='title' label='Add your todo' value={title} onChange={this.handleChange} margin='normal' />
              </Grid>
              <Grid item>
                <Button type='submit' color='primary' variant='contained' startIcon={<SaveIcon />}>
                  Add Item
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper></Grid>
        {
          exercises.length > 0 && (
            <Grid item> <Paper>
              <List>
                {
                  exercises.map(({ id, title }) =>
                    <React.Fragment key={id}>
                      <ListItem>
                        <ListItemText primary={title} />
                        <ListItemSecondaryAction>
                          <IconButton color='primary' onClick={() => this.handleDelete(id)}>
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <Divider variant="fullWidth" component="li" />
                    </React.Fragment>
                  )
                }
              </List>
            </Paper></Grid>
          )
        }
      </Grid>
    )
  }
}

export default BadApp;
