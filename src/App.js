import React, {Component} from 'react';
import { Typography, Grid, TextField, Button, Paper } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import ExerciseList from './components/ExerciseList'
import ExerciseForm from './components/ExerciseForm';


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
                    <ExerciseForm handleChange={this.handleChange} handleCreate={this.handleCreate} title={title}/>
                </Paper>
                <Paper>
                    <ExerciseList exercises={exercises} handleDelete={this.handleDelete}/>
                </Paper>
            </React.Fragment>  
        );
    } 
}

export default App;