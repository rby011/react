import React, {Component} from 'react';

class ExerciseForm extends Component {
    shouldComponentUpdate(preProps, preState){
        return preProps.title !== this.props.title;
    }

    render() {
        const {handleCreate, handleChange, title} = this.props;
        return (
            <Grid container spacing={2} direction='column'>
                <Grid item>
                    <Typography variant='h4' color='primary' align='center' gutterBottom>
                        Excersise    
                    </Typography>
                </Grid>
                <Grid item>
                    <form onSubmit={handleCreate}>
                        <Grid container spacing={2} direction='row' justify='center' alignItems='center' alignContent='center'>
                            <Grid item>
                                <TextField name='title' label='Register your onw' value={title} onChange={handleChange} margin='normal'/>
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
        );
    }
}

export default ExerciseForm;