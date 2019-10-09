import React, {Component} from 'react';
import { Typography, Grid, TextField, Button, Paper } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import ExerciseList from './components/ExerciseList'


class App extends Component{
    state = {
        exercises:[],
        title:''
    }

    handleDelete = ((id) => {
        this.setState(
            ({ exercises }) => ({ 
                exercises: exercises.filter(exercise => exercise.id !== id) 
            })
        )
      }
    )

    handleChange = (
        ({ target : { name, value } }) => this.setState({[name]: value})
    )

    handleCreate = (e) => {
        e.preventDefault();
        this.setState(
            ({exercises, title}) => ({
                exercises:[
                    ...this.state.exercises,
                    {title, id: Date.now()}
                ],
                title:''
            })
        )
    }

    render(){
        const {title, exercises} = this.state;

        return (
            <React.Fragment> 
                <Paper>
                    <Grid container spacing={2} direction='column'>
                        <Grid item>
                            <Typography variant='h4' color='primary' align='center' gutterBottom>
                                Excersise    
                            </Typography>
                        </Grid>
                        <Grid item>
                            <form onSubmit={this.handleCreate}>
                            <Grid container spacing={2} direction='row' justify='center' alignItems='center' alignContent='center'>
                                <Grid item>
                                    <TextField name='title' label='Register your onw' value={title} onChange={this.handleChange} margin='normal'/>
                                </Grid>
                                <Grid item>
                                        <Button type='submit' color='primary' variant='contained' startIcon={<SaveIcon/>}>
                                            Add Item
                                        </Button>   
                                </Grid>
                            </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper>
                    <ExerciseList exercises={exercises} handleDelete={this.handleDelete}/>
                </Paper>
            </React.Fragment>  
        );
    } 
}

export default App;