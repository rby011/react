import React, {Component} from 'react';
import {List, Grid} from '@material-ui/core';
import Exercise from './Exercise';

class ExerciseList extends Component {
    shouldComponentUpdate(nextProps, nextState){
        const {exercises} = this.props;
        return exercises.length > 0 ;
    }

    render(){
        const {exercises, handleDelete} = this.props;
        return (
            <Grid container spacing={2} direction='column'>
                exercises.length > 0 && {
                    <List>
                        exercises.map( (ex) => (
                            <Exercise key={ex.id} title={ex.title} handleDelete={()=>handleDelete(ex.id)}/>
                        ))
                    </List>
                }
            </Grid>
        );
    }
}

export default ExerciseList;