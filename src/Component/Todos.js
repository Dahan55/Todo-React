import { Button, Grid, List, ListItem, ListItemButton, TextField, Typography } from '@mui/material'
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import React, { Component } from 'react'

export default class Todos extends Component {

    constructor(props) {
        super(props)
        this.state = {

            update: '',
            id: '',

            updateData: []

        }
    }

    
    onChanageUpdate = (e) => {
        this.setState({ update: e.target.value })
    }

    updateTodo = (todo) => {
        this.props.onUpdate(todo.id, this.state.update)
    }

    deleteTodo = (id) => {
        console.log(id,'Before on delete')
        this.props.onDelete(id)
        
    }

    render() {
        const { todolist} = this.props;
        return (
            <div>


                <Grid display="flex" justifyContent="space-around" alignItems="center" >
                    {todolist && todolist.map(todo => (

                        <List sx={{ width: '100%', maxWidth: 400, bgcolor: '#eeeeee', }}>


                            <ListItem key={todo.id}
                                secondaryAction={
                                    <Button key={todo.id}
                                        onClick={() => this.deleteTodo(todo.id)} 
                                        color="error" >Delete</Button>
                                }>
                                <ListItemButton>
                                    <Typography>{todo.todoname}</Typography>
                                </ListItemButton>

                            </ListItem>


                            <List component="div" disablePadding>


                                <ListItem sx={{ pl: 4 }} >
                                    <TextField
                                        value={this.state.update}
                                        onChange={this.onChanageUpdate}
                                    />
                                    <Button onClick={() => this.updateTodo(todo)} sx={{ color: 'white', backgroundColor: 'orange', ':hover': { backgroundColor: '#ffb74d' } }} >Update</Button>

                                </ListItem>
                            </List>

                        </List>
                    ))}
                </Grid>

            </div>
        )
    }
}
