import React, {Component} from 'react';
import { Paper } from '@material-ui/core';
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
        const {handleChange, handleCreate, handleDelete} = this;
        return (
            <React.Fragment> 
                <Paper>
                    <ExerciseForm handleChange={handleChange} handleCreate={handleCreate} title={title}/>
                </Paper>
                <Paper>
                    <ExerciseList exercises={exercises} handleDelete={handleDelete}/>
                </Paper>
            </React.Fragment>  
        );
    } 
}

export default App;