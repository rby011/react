import React, {Component} from 'react';
import {ListItem, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

class Exercise extends Component{
    render(){
        const {title, handleDelete} = this.props;
        return (
            <ListItem>
                <ListItemText primary={title}/>
                <ListItemSecondaryAction>
                    <IconButton color='pimary' onClick={handleDelete}>
                        <DeleteIcon/>
                    </IconButton> 
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default Exercise;