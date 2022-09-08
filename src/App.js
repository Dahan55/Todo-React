import { Button, Container, Grid, TextField } from '@mui/material'
import React, { Component } from 'react'
import Header from './Component/Header'
import Todos from './Component/Todos'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

      td: '',

      todos: [

      ],

    }
  }


  todo = (e) => {
    this.setState({ td: e.target.value })
  }

  newTodo = () => {
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(this.state.td)
    this.setState({
      todos: [
        ...this.state.todos,
        { id: id, todoname: this.state.td }
      ]
    })

  }

  deleteTodo = (id) => {


    const deleteTodo = [...this.state.todos]

    deleteTodo.splice(deleteTodo.indexOf(id),1)
    
    console.log(deleteTodo)
    this.setState({
      todos: deleteTodo
    })
  }

  // deleteTodo = (id) => {
  //   console.log(id,'App.js')
  //   setTodos(todos.filter((todo) => todo.id !== id))
  // }

  updateTodo = (id,updateData) => {

    console.log(updateData,'app.js')

    let todoData = this.state.todos

    console.log(todoData,'before for loop TodoData')

    for (let index = 0; index < todoData.length; index++) {
      const element = todoData[index];
      console.log(element,'element in the for loop')
     
      if (element.id === id) {
        element.todoname = updateData;
        break
      }
    }
    this.setState({
      todos: todoData
    })
  }

  render() {
    return (
      <div>
        <Header />

        <Container>
          <Grid display="flex" justifyContent="space-around" alignItems="center" >
            <TextField
              fullWidth sx={{ m: 1 }}
              id="filled-size-normal"
              label="ToDo Name"
              variant="filled"
              value={this.state.td}
              onChange={this.todo}
            />
            <Button onClick={this.newTodo} color='success' variant='contained'>New</Button>
          </Grid>
        </Container>



        <Todos todolist={this.state.todos} onDelete={this.deleteTodo}  onUpdate={this.updateTodo}/>
      </div>
    )
  }
}
