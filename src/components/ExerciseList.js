import React, {Component} from 'react';
import {List, Grid} from '@material-ui/core';
import Exercise from './Exercise';

class ExerciseList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.exercises !== this.props.excersises;
    }

    render() {
        const {exercises, handleDelete} = this.props;
        const listItems = exercises.map( 
            ex => <Exercise key={ex.id} title={ex.title} handleDelete={()=>handleDelete(ex.id)}/>
        );
        return (
            listItems.length > 0 && 
            <Grid container spacing={2} direction='column'>
                <List> {listItems} </List>
            </Grid>
        );
    }
}

export default ExerciseList;